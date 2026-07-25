import { useMemo, useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa'
import style from './dashboard.module.css'

const initialItems = [
  {
    id: 1,
    nombre: 'React',
    descripcion: 'Libreria para construir interfaces de usuario',
    imagen: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  },
  {
    id: 2,
    nombre: 'MUI',
    descripcion: 'Sistema de componentes UI para React',
    imagen: 'https://mui.com/static/logo.png',
  },
  {
    id: 3,
    nombre: 'Vite',
    descripcion: 'Herramienta de desarrollo y construccion moderna',
    imagen: 'https://vitejs.dev/logo.svg',
  },
]

const emptyForm = {
  id: '',
  nombre: '',
  descripcion: '',
  imagen: '',
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#97ce4c',
    },
    background: {
      paper: '#12181b',
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: '16px',
          border: '1px solid rgba(151, 206, 76, 0.15)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
        },
      },
    },
  },
})

export const Dashboard = () => {
  const [items, setItems] = useState(initialItems)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [form, setForm] = useState(emptyForm)

  const nextId = useMemo(() => {
    return items.reduce((max, item) => Math.max(max, item.id), 0) + 1
  }, [items])

  const openCreateDialog = () => {
    setEditingId(null)
    setForm({ ...emptyForm, id: nextId })
    setDialogOpen(true)
  }

  const openEditDialog = (item) => {
    setEditingId(item.id)
    setForm({
      id: item.id,
      nombre: item.nombre,
      descripcion: item.descripcion,
      imagen: item.imagen,
    })
    setDialogOpen(true)
  }

  const closeDialog = () => {
    setDialogOpen(false)
    setEditingId(null)
    setForm(emptyForm)
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (editingId === null) {
      setItems((current) => [
        ...current,
        {
          id: Number(form.id),
          nombre: form.nombre,
          descripcion: form.descripcion,
          imagen: form.imagen,
        },
      ])
    } else {
      setItems((current) =>
        current.map((item) =>
          item.id === editingId
            ? {
                ...item,
                nombre: form.nombre,
                descripcion: form.descripcion,
                imagen: form.imagen,
              }
            : item
        )
      )
    }

    closeDialog()
  }

  const handleDelete = (id) => {
    setItems((current) => current.filter((item) => item.id !== id))
  }

  return (
    <section className={style.dashboardPage}>
      <Stack className={style.header} spacing={1}>
        <Typography variant="overline" className={style.label}>
          Panel de control
        </Typography>
        <Typography variant="h4" className={style.title}>
          Dashboard
        </Typography>
        <Typography className={style.subtitle}>
          Gestion de registros con opciones de agregar, editar y eliminar.
        </Typography>
      </Stack>

      <div className={style.actionsBar}>
        <Button
          variant="contained"
          startIcon={<FaPlus />}
          onClick={openCreateDialog}
          className={style.addButton}
        >
          Agregar
        </Button>
      </div>

      <TableContainer component={Paper} className={style.tableContainer}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={style.tableHeadCell}>ID</TableCell>
              <TableCell className={style.tableHeadCell}>Nombre</TableCell>
              <TableCell className={style.tableHeadCell}>Descripcion</TableCell>
              <TableCell className={style.tableHeadCell}>Imagen</TableCell>
              <TableCell className={style.tableHeadCell}>Accion</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id} className={style.tableRow}>
                <TableCell className={style.tableCell}>{item.id}</TableCell>
                <TableCell className={style.tableCell}>{item.nombre}</TableCell>
                <TableCell className={style.tableCell}>{item.descripcion}</TableCell>
                <TableCell className={style.tableCell}>
                  <img className={style.thumb} src={item.imagen} alt={item.nombre} />
                </TableCell>
                <TableCell className={style.tableCell}>
                  <div className={style.rowActions}>
                    <IconButton
                      aria-label={`Editar ${item.nombre}`}
                      onClick={() => openEditDialog(item)}
                      className={style.editButton}
                    >
                      <FaEdit />
                    </IconButton>
                    <IconButton
                      aria-label={`Eliminar ${item.nombre}`}
                      onClick={() => handleDelete(item.id)}
                      className={style.deleteButton}
                    >
                      <FaTrash />
                    </IconButton>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <ThemeProvider theme={darkTheme}>
        <Dialog open={dialogOpen} onClose={closeDialog} fullWidth maxWidth="sm">
          <DialogTitle className={style.dialogTitle}>
            {editingId === null ? 'Agregar registro' : 'Editar registro'}
          </DialogTitle>
          <form onSubmit={handleSubmit}>
            <DialogContent className={style.dialogContent}>
              <Stack spacing={2.5} sx={{ mt: 1 }}>
                <TextField
                  name="id"
                  label="ID"
                  type="number"
                  value={form.id}
                  onChange={handleChange}
                  fullWidth
                  required
                  disabled={editingId !== null}
                />
                <TextField
                  name="nombre"
                  label="Nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  fullWidth
                  required
                />
                <TextField
                  name="descripcion"
                  label="Descripcion"
                  value={form.descripcion}
                  onChange={handleChange}
                  fullWidth
                  required
                  multiline
                  minRows={3}
                />
                <TextField
                  name="imagen"
                  label="URL de imagen"
                  value={form.imagen}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Stack>
            </DialogContent>
            <DialogActions className={style.dialogActions} sx={{ p: 2.5, pt: 1 }}>
              <Button onClick={closeDialog} sx={{ color: '#a0aab2' }}>Cancelar</Button>
              <Button type="submit" variant="contained" className={style.saveButton}>
                Guardar
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </ThemeProvider>
    </section>
  )
}

export default Dashboard