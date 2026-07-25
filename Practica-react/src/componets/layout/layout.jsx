import { Header } from '../header';
import { Footer } from '../footer';
import PropTypes from 'prop-types'
import style from './layout.module.css'

export const Layout = ({ children }) => {
    return (
        <div className={style.layout}>
            <Header />
            <main className={style.main}>
                {children}
            </main>
            <Footer />
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}
