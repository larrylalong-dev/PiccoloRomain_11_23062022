import styles from '../../styles/components/rating.module.css';
import Star from '../Star';

function Rating({ rate = 0 }) {
    const starArray = [];
    for (let index = 0; index < 5; index++) {
        index < rate ? starArray.push('fill') : starArray.push('empty');
    }

    return (
        <div className={styles.rating}>
            {starArray.map((starType, index) =>
                starType === 'fill' ? (
                    <Star key={index} fill />
                ) : (
                    <Star key={index} />
                )
            )}
        </div>
    );
}

export default Rating;
