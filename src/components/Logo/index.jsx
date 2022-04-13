import lightLogo from '../../assets/logo_light.png';
import darklogo from '../../assets/logo_dark.png';

function Logo({ darkmode, width }) {
    const logo = darkmode ? darklogo : lightLogo;

    return (
        <div className="logo-container">
            <img src={logo} width={width} alt="Kasa Logo" />
        </div>
    );
}

Logo.defaultProps = {
    darkmode: false,
    width: '200px',
};

export default Logo;
