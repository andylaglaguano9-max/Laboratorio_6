import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Layout } from './layout'

// La prueba 1 verifica que el contenido hijo se renderiza correctamente.
test('renderiza el contenido hijo', () => {
  render(
    <BrowserRouter>
      <Layout>
        <h1>Contenido de prueba</h1>
      </Layout>
    </BrowserRouter>
  )

  expect(screen.getByText('Contenido de prueba')).toBeInTheDocument()
})

// La prueba 2 verifica que el Header se renderiza dentro del Layout.
test('renderiza el Header dentro del Layout', () => {
  render(
    <BrowserRouter>
      <Layout>
        <p>Contenido</p>
      </Layout>
    </BrowserRouter>
  )

  expect(screen.getByText('Home')).toBeInTheDocument()
})

// La prueba 3 verifica que el Footer se renderiza dentro del Layout.
test('renderiza el Footer dentro del Layout', () => {
  render(
    <BrowserRouter>
      <Layout>
        <p>Contenido</p>
      </Layout>
    </BrowserRouter>
  )

  expect(screen.getByText(/ESPE/i)).toBeInTheDocument()
})

// Prueba 4: Verifica que se pueden pasar mÃºltiples hijos
test('renderiza mÃºltiples elementos hijos', () => {
  render(
    <BrowserRouter>
      <Layout>
        <h2>TÃ­tulo de secciÃ³n</h2>
        <p>PÃ¡rrafo de contenido</p>
      </Layout>
    </BrowserRouter>
  )

  expect(screen.getByText('TÃ­tulo de secciÃ³n')).toBeInTheDocument()
  expect(screen.getByText('PÃ¡rrafo de contenido')).toBeInTheDocument()
})
