import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Avatar from '../../components/Avatar/index.jsx';
import DropdownList from '../../components/DropdownList/index.jsx';
import DropdownText from '../../components/DropdownText/index.jsx';
import Rating from '../../components/Rating/index.jsx';
import Slider from '../../components/Slider/index.jsx';
import Tag from '../../components/Tag/index.jsx';
import { getFromCacheOrFetch } from '../../helper/helper.js';
import styles from './logement.module.css';

function Logement() {
    const { id } = useParams();
    const [data, setData] = useState();
    const [isLoading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        getFromCacheOrFetch('logementData', '/logements.json').then(data => {
            const cachedData = data.filter((logement) => logement.id === id)[0];
            !cachedData ? navigate('/404') : setData(cachedData);
            setLoading(false);
        });
    }, [id, navigate]);

    return (
        !isLoading && (
            <>
                <Slider pictures={data.pictures} />
                <div className={styles.logementInfoWrapper}>
                    <div className={styles.logementInfos}>
                        <div className={styles.logementTitle}>{data.title}</div>
                        <div className={styles.logementLocation}>
                            {data.location}
                        </div>
                        <div className={styles.logementTags}>
                            {data.tags.map((tag, index) => (
                                <Tag key={index} label={tag} />
                            ))}
                        </div>
                    </div>
                    <div className={styles.logementHost}>
                        <Avatar className={styles.avatar} host={data.host} />
                        <Rating className={styles.rating} rate={3} />
                    </div>
                </div>
                <div className={styles.logementContent}>
                    <DropdownText
                        label="Description"
                        content={
                            data.description +
                            data.description +
                            data.description
                        }
                    />
                    <DropdownList
                        itemsList={data.equipments}
                        label="Equipements"
                    />
                </div>
            </>
        )
    );
}

export default Logement;
