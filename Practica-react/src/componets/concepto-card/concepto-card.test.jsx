import { render, screen } from '@testing-library/react'
import { ConceptoCard } from './concepto-card'

// Prueba 1: Verifica que el tÃ­tulo se renderiza correctamente
test('muestra correctamente el tÃ­tulo recibido', () => {
  render(
    <ConceptoCard
      titulo="React"
      descripcion="Biblioteca para interfaces"
      imagenUrl="react.png"
    />
  )

  expect(screen.getByText('React')).toBeInTheDocument()
})

// Prueba 2: Verifica que la descripciÃ³n se renderiza correctamente
test('muestra correctamente la descripciÃ³n recibida', () => {
  render(
    <ConceptoCard
      titulo="Vite"
      descripcion="Herramienta de construcciÃ³n rÃ¡pida"
      imagenUrl="vite.png"
    />
  )

  expect(screen.getByText('Herramienta de construcciÃ³n rÃ¡pida')).toBeInTheDocument()
})

// Prueba 3: Verifica que la imagen se renderiza cuando se proporciona imagenUrl
test('muestra la imagen cuando se proporciona imagenUrl', () => {
  render(
    <ConceptoCard
      titulo="CSS Modules"
      descripcion="Estilos con alcance local"
      imagenUrl="css.png"
    />
  )

  const imagen = screen.getByAltText('CSS Modules')
  expect(imagen).toBeInTheDocument()
  expect(imagen).toHaveAttribute('src', 'css.png')
})

// Prueba 4: Verifica que no se renderiza imagen si no se proporciona imagenUrl
test('no muestra imagen cuando no se proporciona imagenUrl', () => {
  render(
    <ConceptoCard
      titulo="React Router"
      descripcion="NavegaciÃ³n en React"
    />
  )

  expect(screen.queryByRole('img')).not.toBeInTheDocument()
})
