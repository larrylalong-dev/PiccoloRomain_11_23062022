import styles from './header.module.css';
import Logo from '../Logo';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className={styles.header}>
            <Logo />
            <nav>
                <Link to="/" className={styles.link}>
                    Accueil
                </Link>
                <Link to="/about" className={styles.link}>
                    A Propos
                </Link>
            </nav>
        </div>
    );
}

export default Header;
