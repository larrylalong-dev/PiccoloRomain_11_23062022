import styles from './star.module.css';
import star from '../../assets/filled_star.svg';
import emptyStar from '../../assets/empty_star.svg';

function Star({ fill = false }) {
    return (
        <>
            {fill ? (
                <img className={styles.star} src={star} alt="star" />
            ) : (
                <img className={styles.star} src={emptyStar} alt="emptyStar" />
            )}
        </>
    );
}

export default Star;
