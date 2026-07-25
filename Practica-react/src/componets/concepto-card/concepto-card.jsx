import PropTypes from "prop-types";
import styles from "./concepto-card.module.css";

export const ConceptoCard = ({ titulo, descripcion, imagenUrl }) => {
  return (
    <div className={styles.conceptoCard}>
      {imagenUrl && <img src={imagenUrl} alt={titulo} className={styles.imagen} />}
      <div className={styles.contenido}>
        <h3 className={styles.titulo}>{titulo}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
      </div>
    </div>
  );
};

ConceptoCard.propTypes = {
  titulo: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  imagenUrl: PropTypes.string,
};
