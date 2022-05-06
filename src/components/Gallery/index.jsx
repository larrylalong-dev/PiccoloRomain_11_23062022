import styles from './gallery.module.css';
import Card from '../Card';

function Gallery({ logementList = [] }) {
    return (
        <div className={styles.gallery}>
            {logementList.map((d) => (
                <Card key={d.id} id={d.id} title={d.title} cover={d.cover} />
            ))}
        </div>
    );
}

export default Gallery;
