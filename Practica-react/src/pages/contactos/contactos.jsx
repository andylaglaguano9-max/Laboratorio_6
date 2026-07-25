import style from './contactos.module.css'

export const ContactosPage = () => {
  return (
    <section className={style.pageCard}>
      <span className={style.pageLabel}>Contacto</span>
      <h1>Contactos</h1>
      <p>Esta es la pagina de contactos de nuestro sitio web. Aqui encontraras informacion sobre como ponerte en contacto con nosotros.</p>
      <p>Explora nuestro sitio para descubrir todo lo que tenemos para ofrecer. Gracias por visitarnos.</p>
    </section>
  )
}
