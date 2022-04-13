import logoLight from '../../assets/logo_light.svg';
import logoDark from '../../assets/logo_dark.svg';

function Logo({ darkmode, width }) {
    return (
        <div>
            <img
                src={darkmode ? logoDark : logoLight}
                width={width}
                alt="Kasa Logo"
            />
        </div>
    );
}

Logo.defaultProps = {
    darkmode: false,
    width: '200px',
};

export default Logo;
