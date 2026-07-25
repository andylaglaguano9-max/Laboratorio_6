import { render, screen } from '@testing-library/react'
import { Footer } from './footer'

// Prueba 1: Verifica que la informaciÃ³n institucional (ESPE) se muestra
test('muestra la informaciÃ³n institucional', () => {
  render(<Footer />)

  expect(screen.getByText(/ESPE/i)).toBeInTheDocument()
})

// Prueba 2: Verifica que el aÃ±o actual aparece en el footer
test('muestra el aÃ±o actual en el footer', () => {
  render(<Footer />)

  const anioActual = new Date().getFullYear().toString()
  expect(screen.getByText(new RegExp(anioActual))).toBeInTheDocument()
})

// Prueba 3: Verifica que el texto de derechos reservados estÃ¡ presente
test('muestra el texto de derechos reservados', () => {
  render(<Footer />)

  expect(screen.getByText(/Todos los derechos reservados/i)).toBeInTheDocument()
})
