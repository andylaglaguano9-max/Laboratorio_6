import { render, screen } from '@testing-library/react'
import { PersonajeCard } from './personaje'

// La prueba 1 verifica que el nombre del personaje se renderiza correctamente.
test('muestra correctamente el nombre del personaje', () => {
  render(
    <PersonajeCard
      nombre="Rick Sanchez"
      especie="Humano"
      imagen="rick.png"
    />
  )

  expect(screen.getByText('Rick Sanchez')).toBeInTheDocument()
})

// La prueba 2 verifica que la especie del personaje se muestra correctamente.
test('muestra correctamente la especie del personaje', () => {
  render(
    <PersonajeCard
      nombre="Morty Smith"
      especie="Human"
      imagen="morty.png"
    />
  )

  expect(screen.getByText('Human')).toBeInTheDocument()
})

// La prueba 3 verifica que la imagen del personaje se renderiza.
test('muestra la imagen del personaje con el alt correcto', () => {
  render(
    <PersonajeCard
      nombre="Beth Smith"
      especie="Human"
      imagen="beth.png"
    />
  )

  const imagen = screen.getByAltText('Beth Smith')
  expect(imagen).toBeInTheDocument()
  expect(imagen).toHaveAttribute('src', 'beth.png')
})
