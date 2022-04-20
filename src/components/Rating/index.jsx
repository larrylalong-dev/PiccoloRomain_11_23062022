import styles from '../../styles/components/rating.module.css';
import star from '../../assets/filled_star.svg';
// import emptyStar from '../../assets/empty_star.svg';

function Rating({ rate = 0 }) {
    const filledStar = Array(rate);
    console.log(filledStar);
    return (
        <div className={styles.rating}>
            {/* {filledStar.map(star, (index) => (
                <img key={index} src={star} alt="index" />
            ))} */}
        </div>
    );
}

export default Rating;
