import styles from './footer.module.css';
import Logo from '../Logo';

function Footer() {
    return (
        <div className={styles.footer}>
            <Logo darkmode />
            <div>© 2020 Kasa. All rights reserved</div>
        </div>
    );
}

export default Footer;
