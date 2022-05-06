import styles from './banner.module.css';

function Banner({ imgSrc, label, mobileHeight = 'md' }) {
    const styleHeight = mobileHeight === 'sm' ? styles.mobileHeight : '';
    return (
        <div className={styles.banner + ' ' + styleHeight}>
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
