import styles from '../../styles/components/avatar.module.css';

function Avatar({ host }) {
    const [firstName, lastName] = host.name.split(' ');
    return (
        <div className={styles.avatar}>
            <div className={styles.identity}>
                <span>{firstName}</span>
                <span>{lastName}</span>
            </div>
            <img
                className={styles.avatarImg}
                src={host.picture}
                alt={host.name}
            />
        </div>
    );
}

export default Avatar;
