import { render, screen } from '@testing-library/react'
import { MateriaItem } from './materia-item'

// La prueba 1 verifica que el nombre de la asignatura se renderiza correctamente.
test('muestra correctamente la asignatura', () => {
  render(
    <MateriaItem
      nombre="ProgramaciÃ³n Web"
      descripcion="Desarrollo Frontend"
    />
  )

  expect(screen.getByText('ProgramaciÃ³n Web')).toBeInTheDocument()
})

// Prueba 2: Verifica que la descripciÃ³n se renderiza correctamente
test('muestra correctamente la descripciÃ³n de la materia', () => {
  render(
    <MateriaItem
      nombre="Base de Datos"
      descripcion="GestiÃ³n de informaciÃ³n estructurada"
    />
  )

  expect(screen.getByText('GestiÃ³n de informaciÃ³n estructurada')).toBeInTheDocument()
})

// Prueba 3: Verifica el renderizado sin Ã­cono (Icono es opcional)
test('renderiza correctamente sin Ã­cono', () => {
  render(
    <MateriaItem
      nombre="ProgramaciÃ³n Integrativa"
      descripcion="Componentes Web avanzados"
    />
  )

  expect(screen.getByText('ProgramaciÃ³n Integrativa')).toBeInTheDocument()
  expect(screen.getByText('Componentes Web avanzados')).toBeInTheDocument()
})

// Prueba 4: Verifica el renderizado con un Ã­cono personalizado
test('renderiza el Ã­cono cuando se proporciona', () => {
  const IconoMock = () => <svg data-testid="icono-mock" />

  render(
    <MateriaItem
      nombre="Redes"
      descripcion="Infraestructura de red"
      Icono={IconoMock}
    />
  )

  expect(screen.getByTestId('icono-mock')).toBeInTheDocument()
})
