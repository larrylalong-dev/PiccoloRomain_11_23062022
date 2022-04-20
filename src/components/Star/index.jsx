import star from '../../assets/filled_star.svg';
import emptyStar from '../../assets/empty_star.svg';

function Star({ fill = false }) {
    return (
        <>
            {fill ? (
                <img src={star} alt="star" />
            ) : (
                <img src={emptyStar} alt="emptyStar" />
            )}
        </>
    );
}

export default Star;
