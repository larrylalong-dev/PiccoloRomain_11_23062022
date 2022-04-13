import logoLight from '../../assets/logo_light.svg';
import logoDark from '../../assets/logo_dark.svg';
import styles from '../../styles/components/logo.module.css';

function Logo({ darkmode }) {
    const logoStyle = darkmode ? styles.darklogo : styles.logo;

    return (
        <div>
            <img
                src={darkmode ? logoDark : logoLight}
                className={logoStyle}
                alt="Kasa Logo"
            />
        </div>
    );
}

Logo.defaultProps = {
    darkmode: false,
};

export default Logo;
