import { UserCard } from '../../componets'
import style from './teams.module.css'

const integrantes = [
  {
    nombre: 'Ana Martinez',
    url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    edad: 22,
    activo: true,
  },
  {
    nombre: 'Carlos Rivera',
    url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    edad: 24,
    activo: true,
  },
  {
    nombre: 'Sofia Gomez',
    url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    edad: 21,
    activo: false,
  },
]

export const TeamsPage = () => {
  return (
    <section className={style.teamsPage}>
      <div className={style.pageHeader}>
        <span className={style.pageLabel}>Nuestro equipo</span>
        <h1>Teams</h1>
        <p>
          Conoce a los integrantes que forman parte del proyecto y revisa su estado dentro del equipo.
        </p>
      </div>

      <div className={style.teamsGrid}>
        {integrantes.map((integrante) => (
          <UserCard
            key={integrante.nombre}
            nombre={integrante.nombre}
            url={integrante.url}
            edad={integrante.edad}
            activo={integrante.activo}
          />
        ))}
      </div>
    </section>
  )
}
