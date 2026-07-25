import { useState } from 'react'
import PropTypes from 'prop-types'
import style from './card.module.css'

// El componente UserCard recibe datos de un usuario mediante propiedades.
export const UserCard = ({ nombre, url, edad, activo = true }) => {
  const [estaActivo, setEstaActivo] = useState(activo)
  const tieneEdad = edad !== undefined && edad !== null

  return (
    <div className={style.card}>
      <img className={style['card-image']} src={url} alt={nombre} />

      <h2 className={style['card-title']}>{nombre}</h2>

      {tieneEdad && <p>Edad: {edad}</p>}

      {tieneEdad && <p>{edad >= 18 ? 'Mayor de edad' : 'Menor de edad'}</p>}

      <p className={style['card-status'] + ' ' + (estaActivo ? style['active'] : style['inactive'])}>
        {estaActivo ? 'Usuario activo' : 'Usuario inactivo'}
      </p>

      <button type="button" className={style['card-button']} onClick={() => setEstaActivo(!estaActivo)}>
        {estaActivo ? 'Cambiar a inactivo' : 'Cambiar a activo'}
      </button>
    </div>
  )
}

UserCard.propTypes = {
  nombre: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  edad: PropTypes.number,
  activo: PropTypes.bool,
}
