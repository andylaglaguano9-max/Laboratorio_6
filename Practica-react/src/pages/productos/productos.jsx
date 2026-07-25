import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import style from './productos.module.css';
import {
  obtenerProductos,
  crearProducto,
  actualizarProducto,
  eliminarProducto
} from '../../service/ProductService';

export const ProductosPage = () => {
  const [productos, setProductos] = useState([]);
  const [editId, setEditId] = useState(null);
  const [alertInfo, setAlertInfo] = useState({ open: false, message: '', severity: 'success' });

  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    stock: '',
    imagen: ''
  });

  useEffect(() => {
    cargarProductos();
  }, []);

  const cargarProductos = async () => {
    const data = await obtenerProductos();
    if (data) setProductos(data);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const mostrarMensaje = (msg, severity = 'success') => {
    setAlertInfo({ open: true, message: msg, severity });
  };

  const handleCloseAlert = () => setAlertInfo({ ...alertInfo, open: false });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await actualizarProducto(editId, formData);
        mostrarMensaje('Producto actualizado correctamente.');
        setEditId(null);
      } else {
        await crearProducto(formData);
        mostrarMensaje('Producto registrado correctamente.');
      }
      setFormData({ nombre: '', descripcion: '', precio: '', stock: '', imagen: '' });
      cargarProductos();
    } catch (error) {
      mostrarMensaje('Error al procesar el producto', 'error');
    }
  };

  const handleEdit = (prod) => {
    setEditId(prod.id);
    setFormData({
      nombre: prod.nombre,
      descripcion: prod.descripcion,
      precio: prod.precio,
      stock: prod.stock,
      imagen: prod.imagen
    });
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de eliminar este producto?')) {
      try {
        await eliminarProducto(id);
        mostrarMensaje('Producto eliminado correctamente.');
        cargarProductos();
      } catch (error) {
        mostrarMensaje('Error al eliminar producto', 'error');
      }
    }
  };

  return (
    <Box className={style.page}>
      <Container maxWidth="lg">
        
        {/* Formulario de Creación / Edición */}
        <Paper elevation={4} className={style.card}>
          <Stack spacing={1.5} className={style.header}>
            <Typography variant="overline" className={style.label}>
              Administración
            </Typography>
            <Typography variant="h4" className={style.title}>
              Gestión de Productos
            </Typography>
          </Stack>

          <Box component="form" onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <Box className={style.gridTwoColumns}>
                <TextField name="nombre" label="Nombre del Producto" value={formData.nombre} onChange={handleInputChange} required fullWidth variant="outlined" className={style.field} />
                <TextField name="precio" label="Precio ($)" type="number" inputProps={{ step: "0.01" }} value={formData.precio} onChange={handleInputChange} required fullWidth variant="outlined" className={style.field} />
              </Box>

              <TextField name="descripcion" label="Descripción" value={formData.descripcion} onChange={handleInputChange} required fullWidth variant="outlined" multiline rows={2} className={style.field} />
              
              <Box className={style.gridTwoColumns}>
                <TextField name="stock" label="Stock Disponible" type="number" value={formData.stock} onChange={handleInputChange} required fullWidth variant="outlined" className={style.field} />
                <TextField name="imagen" label="URL de la Imagen" value={formData.imagen} onChange={handleInputChange} required fullWidth variant="outlined" className={style.field} />
              </Box>

              <Button type="submit" variant="contained" size="large" className={style.submitButton}>
                {editId ? 'ACTUALIZAR PRODUCTO' : 'CREAR PRODUCTO'}
              </Button>
            </Stack>
          </Box>
        </Paper>

        {/* Tabla de Productos */}
        <Paper elevation={4} className={style.card}>
          <Typography variant="h5" className={style.tableTitle}>
            Inventario Actual
          </Typography>
          
          <TableContainer>
            <Table>
              <TableHead className={style.tableHeader}>
                <TableRow>
                  <TableCell className={style.tableCellHeader}>Imagen</TableCell>
                  <TableCell className={style.tableCellHeader}>Nombre</TableCell>
                  <TableCell className={style.tableCellHeader}>Descripción</TableCell>
                  <TableCell className={style.tableCellHeader}>Precio</TableCell>
                  <TableCell className={style.tableCellHeader}>Stock</TableCell>
                  <TableCell className={style.tableCellHeader} sx={{ textAlign: 'center' }}>Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {productos.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} sx={{ color: '#aaa', textAlign: 'center', py: 3 }}>
                      No hay productos registrados.
                    </TableCell>
                  </TableRow>
                ) : (
                  productos.map((prod) => (
                    <TableRow key={prod.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell className={style.tableCell}>
                        <img src={prod.imagen} alt={prod.nombre} style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px' }} />
                      </TableCell>
                      <TableCell className={style.tableCell}>{prod.nombre}</TableCell>
                      <TableCell className={style.tableCellDesc}>{prod.descripcion}</TableCell>
                      <TableCell className={style.tableCellPrice}>${prod.precio}</TableCell>
                      <TableCell className={style.tableCell}>{prod.stock}</TableCell>
                      <TableCell sx={{ textAlign: 'center' }}>
                        <Button size="small" variant="outlined" onClick={() => handleEdit(prod)} className={style.editButton}>
                          Editar
                        </Button>
                        <Button size="small" variant="outlined" color="error" onClick={() => handleDelete(prod.id)}>
                          Eliminar
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>

      {/* Alertas */}
      <Snackbar open={alertInfo.open} autoHideDuration={4000} onClose={handleCloseAlert} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert onClose={handleCloseAlert} severity={alertInfo.severity} variant="filled" sx={{ width: '100%' }}>
          {alertInfo.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};
