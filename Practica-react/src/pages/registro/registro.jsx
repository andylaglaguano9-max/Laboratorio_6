import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import style from './registro.module.css'
import api from '../../API/axios'

export const RegistroPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  
  // Estado para la notificación estética
  const [alertInfo, setAlertInfo] = useState({ open: false, message: '', severity: 'success' })

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (form.password !== form.confirmPassword) {
      setAlertInfo({ open: true, message: 'Las contraseñas no coinciden', severity: 'error' });
      return;
    }
    
    try {
      await api.post("/auth/register", {
        nombre: `${form.nombre} ${form.apellido}`,
        correo: form.email,
        password: form.password
      });
      setAlertInfo({ open: true, message: 'Usuario registrado correctamente', severity: 'success' });
      
      // Esperamos 2 segundos antes de redirigir para que el usuario lea el mensaje
      setTimeout(() => {
        navigate('/login');
      }, 2000);
      
    } catch (error) {
      setAlertInfo({ open: true, message: 'Error al registrar usuario', severity: 'error' });
      console.error(error);
    }
  }

  const handleCloseAlert = () => setAlertInfo({ ...alertInfo, open: false });

  return (
    <Box className={style.page}>
      <Container maxWidth="md" className={style.container}>
        <Paper elevation={0} className={style.card}>
          <Stack spacing={1.5} className={style.header}>
            <Typography variant="overline" className={style.label}>
              Crear cuenta
            </Typography>
            <Typography variant="h4" className={style.title}>
              Registro
            </Typography>
            <Typography className={style.subtitle}>
              Completa tus datos para crear una nueva cuenta.
            </Typography>
          </Stack>

          <Box component="form" onSubmit={handleSubmit} className={style.form}>
            <Stack spacing={2.2}>
              <Box className={style.gridTwoColumns}>
                <TextField
                  name="nombre"
                  label="Nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  autoComplete="given-name"
                  fullWidth
                  required
                  variant="outlined"
                  className={style.field}
                />
                <TextField
                  name="apellido"
                  label="Apellido"
                  value={form.apellido}
                  onChange={handleChange}
                  autoComplete="family-name"
                  fullWidth
                  required
                  variant="outlined"
                  className={style.field}
                />
              </Box>

              <TextField
                name="email"
                label="Correo electronico"
                type="email"
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
                fullWidth
                required
                variant="outlined"
                className={style.field}
              />

              <Box className={style.gridTwoColumns}>
                <TextField
                  name="password"
                  label="Contrasena"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  autoComplete="new-password"
                  fullWidth
                  required
                  variant="outlined"
                  className={style.field}
                />
                <TextField
                  name="confirmPassword"
                  label="Confirmar contrasena"
                  type="password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  autoComplete="new-password"
                  fullWidth
                  required
                  variant="outlined"
                  className={style.field}
                />
              </Box>

              <Button type="submit" variant="contained" size="large" className={style.submitButton}>
                Crear cuenta
              </Button>

              <Typography className={style.footerText}>
                Ya tienes cuenta?{' '}
                <Link component={NavLink} to="/login" underline="hover" className={style.link}>
                  Inicia sesion
                </Link>
              </Typography>
            </Stack>
          </Box>
        </Paper>
      </Container>
      
      {/* Alerta estética usando Material UI */}
      <Snackbar open={alertInfo.open} autoHideDuration={4000} onClose={handleCloseAlert} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert onClose={handleCloseAlert} severity={alertInfo.severity} variant="filled" sx={{ width: '100%' }}>
          {alertInfo.message}
        </Alert>
      </Snackbar>
    </Box>
  )
}