import { NavLink } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import style from './header.module.css'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Nosotros', to: '/nosotros' },
  { label: 'Personajes', to: '/personajes' },
  { label: 'Teams', to: '/teams' },
  { label: 'Contact', to: '/contactos' },
  { label: 'Dashboard', to: '/dashboard' },
]

export const Header = () => {
  return (
    <AppBar position="sticky" elevation={0} className={style.header}>
      <Toolbar disableGutters className={style.toolbar}>
        <Container maxWidth="xl" className={style.container}>
          <Box className={style.brand}>
            <Box
              component="img"
              src="/icon-192x192.png"
              alt="Logo de la aplicacion"
              className={style.logo}
            />
            <Typography variant="h6" noWrap className={style.title}>
              Programacion integrativa de componentes web
            </Typography>
          </Box>

          <Box className={style.nav}>
            {navItems.map((item) => (
              <Button
                key={item.to}
                component={NavLink}
                to={item.to}
                end={item.to === '/'}
                color="inherit"
                className={({ isActive }) =>
                  `${style.navButton} ${isActive ? style.navButtonActive : ''}`
                }
              >
                {item.label}
              </Button>
            ))}
            <Button
              component={NavLink}
              to="/login"
              variant="outlined"
              color="inherit"
              className={({ isActive }) =>
                `${style.navButton} ${style.loginButton} ${isActive ? style.navButtonActive : ''}`
              }
            >
              Login
            </Button>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  )
}
