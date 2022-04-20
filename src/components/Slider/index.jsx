import styles from '../../styles/components/slider.module.css';
import prev from '../../assets/arrow_back.svg';
import next from '../../assets/arrow_forward.svg';
import { useState } from 'react';

function Slider(data = []) {
    const [currentIndex, setIndex] = useState(0);

    const handlePreviousClick = () => {
        const index =
            currentIndex === 0 ? data.pictures.length - 1 : currentIndex - 1;
        setIndex(index);
    };

    const handleNextClick = () => {
        const index =
            currentIndex === data.pictures.length - 1 ? 0 : currentIndex + 1;
        setIndex(index);
    };

    return (
        <div className={styles.slider}>
            <div className={styles.stepContainer}>
                <img
                    className={styles.previous}
                    onClick={handlePreviousClick}
                    src={prev}
                    alt="previous"
                />
                <img
                    onClick={handleNextClick}
                    className={styles.next}
                    src={next}
                    alt="next"
                />
            </div>
            <img
                className={styles.sliderImg}
                src={data.pictures[currentIndex]}
                alt="a"
            />
            <div className={styles.index}>
                <p>{currentIndex + 1 + '/' + data.pictures.length}</p>
            </div>
        </div>
    );
}

export default Slider;
