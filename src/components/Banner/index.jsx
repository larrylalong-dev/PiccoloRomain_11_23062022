import styles from '../../styles/components/banner.module.css';

function Banner({ imgSrc, label }) {
    return (
        <div className={styles.banner}>
            <img className={styles.bannerImg} src={imgSrc} alt="banner" />

            {label && (
                <div className={styles.bannerLabelContainer}>
                    <span className={styles.bannerLabel}>{label}</span>
                </div>
            )}
        </div>
    );
}

export default Banner;
