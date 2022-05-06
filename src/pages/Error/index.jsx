import { Link } from 'react-router-dom';
import styles from './404.module.css';

function Error() {
    return (
        <div className={styles.error}>
            <div className={styles.errorLabel}>404</div>
            <div className={styles.errorInfo}>
                Oups! La page que vous demandez n'existe pas.
            </div>
            <Link to="/" className={styles.errorLink}>
                Retourner sur la page d'accueil
            </Link>
        </div>
    );
}

export default Error;
