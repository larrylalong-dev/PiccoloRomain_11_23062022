import { Link } from 'react-router-dom';
import styles from '../../styles/components/card.module.css';

function Card({ id, title, cover }) {
    return (
        <Link to={`/logement/${id}`} className={styles.card}>
            <img src={cover} alt={title} className={styles.cardImg}></img>
            <span className={styles.cardTitle}>{title}</span>
        </Link>
    );
}

export default Card;
