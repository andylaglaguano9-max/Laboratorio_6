import { ConceptoCard } from '../../componets/concepto-card';
import style from './inicio.module.css';

export const InicioPage = () => {
  return (
    <section className={style.pageCard}>
      <span className={style.pageLabel}>Inicio</span>
      <h1>Bienvenido a la plataforma</h1>
      
      <p style={{marginBottom: '2rem'}}>Esta es la pagina de inicio de nuestro sitio web desarrollada con React. Aquí aplicamos conceptos modernos de diseño basado en componentes.</p>
      
      <ConceptoCard 
        titulo="React y Desarrollo de Componentes" 
        descripcion="React es una biblioteca de JavaScript para construir interfaces de usuario. Permite crear componentes reutilizables, manejar estados eficientemente con Hooks y utilizar una arquitectura moderna para aplicaciones de una sola página (SPA)."
        imagenUrl="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
      />
    </section>
  );
};
