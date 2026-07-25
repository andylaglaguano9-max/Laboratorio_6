import { MateriaItem } from '../../componets/materia-item';
import { FaCode, FaDatabase, FaServer, FaLaptopCode } from 'react-icons/fa';
import style from './nosotros.module.css';

export const NosotrosPage = () => {
  return (
    <section className={style.pageCard}>
      <span className={style.pageLabel}>Quienes somos</span>
      <h1>Sobre nosotros</h1>
      <p style={{marginBottom: '2rem'}}>Somos estudiantes de Ingeniería en Tecnologías de la Información. Durante este semestre cursamos diversas asignaturas enfocadas al desarrollo tecnológico y de software. Conoce algunas de ellas:</p>
      
      <div style={{marginTop: '2rem'}}>
        <MateriaItem 
          nombre="Programación Integrativa de Componentes Web" 
          descripcion="Desarrollo de aplicaciones web modernas utilizando frameworks y bibliotecas como React, implementando componentes reutilizables y consumo de APIs REST."
          Icono={FaCode}
        />
        <MateriaItem 
          nombre="Sistemas de Bases de Datos" 
          descripcion="Diseño, implementación y administración de bases de datos relacionales y no relacionales para el almacenamiento persistente de la información."
          Icono={FaDatabase}
        />
        <MateriaItem 
          nombre="Arquitectura de Software" 
          descripcion="Principios y patrones de diseño para estructurar sistemas de software escalables, mantenibles y eficientes."
          Icono={FaServer}
        />
        <MateriaItem 
          nombre="Programación Avanzada" 
          descripcion="Paradigmas de programación y técnicas avanzadas para el desarrollo de algoritmos y soluciones complejas."
          Icono={FaLaptopCode}
        />
      </div>
    </section>
  );
};
