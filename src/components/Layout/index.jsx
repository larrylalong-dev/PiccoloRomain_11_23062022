import styles from './layout.module.css';
import Header from '../Header';
import Footer from '../Footer';

function Layout({ children }) {
    return (
        <>
            <div className={styles.layout}>
                <div>
                    <Header />
                </div>
                <main>{children}</main>
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
}

export default Layout;
