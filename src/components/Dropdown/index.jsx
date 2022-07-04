import arrowUp from '../../assets/arrow_up.svg';
import arrowDown from '../../assets/arrow_down.svg';
import styles from './dropdown.module.css';
import { useState } from 'react';

function Dropdown({ children, label }) {
    const [isOpen, setIsOpen] = useState(false);
    const show = isOpen ? styles.dblock : styles.dnone;

    return (
        <div className={styles.dropdown}>
            <div className={styles.label}>
                <span>{label}</span>
                <img
                    src={isOpen ? arrowUp : arrowDown}
                    alt="Arrow direction"
                    className={styles.arrow}
                    onClick={() => setIsOpen(!isOpen)}
                />
            </div>
            <div className={styles.list + ' ' + show}>{children}</div>
        </div>
    );
}

export default Dropdown;
