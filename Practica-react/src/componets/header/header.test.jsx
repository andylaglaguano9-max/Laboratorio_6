import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Header } from './header'

// Prueba 1: Verifica que el menÃº principal (enlace Home) se renderiza
test('muestra el menÃº principal', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )

  expect(screen.getByText('Home')).toBeInTheDocument()
})

// Prueba 2: Verifica que todos los enlaces de navegaciÃ³n estÃ¡n presentes
test('muestra todos los enlaces de navegaciÃ³n', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )

  expect(screen.getByText('Home')).toBeInTheDocument()
  expect(screen.getByText('Nosotros')).toBeInTheDocument()
  expect(screen.getByText('Personajes')).toBeInTheDocument()
  expect(screen.getByText('Teams')).toBeInTheDocument()
  expect(screen.getByText('Contact')).toBeInTheDocument()
})

// Prueba 3: Verifica que el tÃ­tulo de la aplicaciÃ³n se muestra
test('muestra el tÃ­tulo de la aplicaciÃ³n en el header', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )

  expect(
    screen.getByText('Programacion integrativa de componentes web')
  ).toBeInTheDocument()
})

// La prueba 4 verifica que los enlaces tienen el href correcto.
test('los enlaces apuntan a las rutas correctas', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )

  expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', '/')
  expect(screen.getByText('Nosotros').closest('a')).toHaveAttribute('href', '/nosotros')
  expect(screen.getByText('Personajes').closest('a')).toHaveAttribute('href', '/personajes')
})
