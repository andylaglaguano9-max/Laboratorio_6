import PropTypes from "prop-types";
import styles from "./materia-item.module.css";

export const MateriaItem = ({ nombre, descripcion, Icono }) => {
  return (
    <div className={styles.materiaItem}>
      <div className={styles.iconoContainer}>
        {Icono && <Icono className={styles.icono} />}
      </div>
      <div className={styles.contenido}>
        <h3 className={styles.nombre}>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
      </div>
    </div>
  );
};

MateriaItem.propTypes = {
  nombre: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  Icono: PropTypes.elementType,
};
