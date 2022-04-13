import styles from '../../styles/components/layout.module.css';
import Header from '../Header';
import Footer from '../Footer';

function Layout({ children }) {
    return (
        <>
            <div className={styles.layout}>
                <div className={styles.header}>
                    <Header />
                </div>
                <main className={styles.main}>{children}</main>
                <div className={styles.footer}>
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default Layout;
