import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import Container from '@mui/material/Container'
import FormControlLabel from '@mui/material/FormControlLabel'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import style from './login.module.css'
import api from '../../API/axios'
export const LoginPage = () => {
  const [form, setForm] = useState({ email: '', password: '', remember: true })

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target
    setForm((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      // Actividad 3.3 y 3.4 Consumir Login y guardar token
      const respuesta = await api.post('/auth/login', {
        correo: form.email,
        password: form.password,
      })
      
      localStorage.setItem('token', respuesta.data.token)
      navigate('/dashboard')
    } catch (error) {
      alert('Credenciales incorrectas o error en el servidor')
      console.error(error)
    }
  }

  return (
    <Box className={style.page}>
      <Container maxWidth="sm" className={style.container}>
        <Paper elevation={0} className={style.card}>
          <Stack spacing={1.5} className={style.header}>
            <Typography variant="overline" className={style.label}>
              Acceso
            </Typography>
            <Typography variant="h4" className={style.title}>
              Iniciar sesion
            </Typography>
            <Typography className={style.subtitle}>
              Ingresa con tu correo para continuar en la aplicacion.
            </Typography>
          </Stack>

          <Box component="form" onSubmit={handleSubmit} className={style.form}>
            <Stack spacing={2.2}>
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

              <TextField
                name="password"
                label="Contrasena"
                type="password"
                value={form.password}
                onChange={handleChange}
                autoComplete="current-password"
                fullWidth
                required
                variant="outlined"
                className={style.field}
              />

              <FormControlLabel
                control={
                  <Checkbox
                    name="remember"
                    checked={form.remember}
                    onChange={handleChange}
                    className={style.checkbox}
                  />
                }
                label="Recordarme"
                className={style.remember}
              />

              <Button type="submit" variant="contained" size="large" className={style.submitButton}>
                Entrar
              </Button>

              <Typography className={style.footerText}>
                No tienes cuenta?{' '}
                <Link component={NavLink} to="/registro" underline="hover" className={style.link}>
                  Registrate
                </Link>
              </Typography>
            </Stack>
          </Box>
        </Paper>
      </Container>
    </Box>
  )
}