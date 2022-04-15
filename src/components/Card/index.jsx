import styles from '../../styles/components/card.module.css';

function Card({ id, title, cover }) {
    return (
        <article id={id} className={styles.card}>
            <img src={cover} alt={title} className={styles.cardImg}></img>
            <span className={styles.cardTitle}>{title}</span>
        </article>
    );
}

export default Card;
