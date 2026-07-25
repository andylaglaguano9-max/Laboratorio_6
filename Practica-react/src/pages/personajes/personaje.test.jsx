import { vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import PersonajePage from './personaje'

// Mock del mÃ³dulo de servicio para evitar llamadas reales a la API
vi.mock('../../service/rick-and-morty-service', () => ({
  obtenerPersonaje: vi.fn(() =>
    Promise.resolve([
      {
        id: 1,
        name: 'Rick Sanchez',
        species: 'Human',
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      },
      {
        id: 2,
        name: 'Morty Smith',
        species: 'Human',
        image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
      },
    ])
  ),
}))

// Prueba 1: Verifica que la pÃ¡gina carga personajes desde la API (simulada)
test('carga personajes desde la API', async () => {
  render(<PersonajePage />)

  expect(await screen.findByText('Rick Sanchez')).toBeInTheDocument()
})

// Prueba 2: Verifica que se muestran mÃºltiples personajes
test('muestra mÃºltiples personajes al cargar', async () => {
  render(<PersonajePage />)

  expect(await screen.findByText('Rick Sanchez')).toBeInTheDocument()
  expect(await screen.findByText('Morty Smith')).toBeInTheDocument()
})

// La prueba 3 verifica que el estado de carga "Cargando..." aparece inicialmente.
test('muestra el estado de carga inicialmente', () => {
  render(<PersonajePage />)

  expect(screen.getByText('Cargando...')).toBeInTheDocument()
})

// Prueba 4: Verifica que el tÃ­tulo de la pÃ¡gina se renderiza correctamente
test('muestra el tÃ­tulo de la pÃ¡gina de personajes', async () => {
  render(<PersonajePage />)

  expect(await screen.findByText('Personajes Rick and Morty')).toBeInTheDocument()
})

// La prueba 5 verifica la especie de los personajes.
test('muestra la especie de los personajes cargados', async () => {
  render(<PersonajePage />)

  const especies = await screen.findAllByText('Human')
  expect(especies.length).toBeGreaterThan(0)
})
