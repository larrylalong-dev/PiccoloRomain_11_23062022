import styles from './slider.module.css';
import prev from '../../assets/arrow_back.svg';
import next from '../../assets/arrow_forward.svg';
import { useState } from 'react';

function Slider({ pictures = [] }) {
    const [currentIndex, setIndex] = useState(0);

    const handlePreviousClick = () => {
        const index =
            currentIndex === 0 ? pictures.length - 1 : currentIndex - 1;
        setIndex(index);
    };

    const handleNextClick = () => {
        const index =
            currentIndex === pictures.length - 1 ? 0 : currentIndex + 1;
        setIndex(index);
    };

    return (
        <div className={styles.slider}>
            {
                pictures.length > 1 && 
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
            }
            
            <img
                className={styles.sliderImg}
                src={pictures[currentIndex]}
                alt="a"
            />
            <div className={styles.index}>
                <p>{currentIndex + 1 + '/' + pictures.length}</p>
            </div>
        </div>
    );
}

export default Slider;
