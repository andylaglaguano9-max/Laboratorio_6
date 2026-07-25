import  style from './footer.module.css';

export const Footer = () => {
    const aniolActual = new Date().getFullYear();

    return (
        <footer className={style.footer}>
            <p className={style.texto}>Todos los derechos reservados &copy; ESPE {aniolActual}</p>
        </footer>
    )
}
