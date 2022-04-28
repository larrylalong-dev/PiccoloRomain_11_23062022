import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Avatar from '../../components/Avatar/index.jsx';
import DropdownList from '../../components/DropdownList/index.jsx';
import DropdownText from '../../components/DropdownText/index.jsx';
import Rating from '../../components/Rating/index.jsx';
import Slider from '../../components/Slider/index.jsx';
import Tag from '../../components/Tag/index.jsx';
import { fetchData } from '../../helper/helper.js';
import styles from '../../styles/pages/logement.module.css';

//id, title, cover, pictures[], description, host{name, picture}, rating, location, equipments[], tags[]
function Logement() {
    const { id } = useParams();
    const [data, setData] = useState({});
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        let cachedData = JSON.parse(localStorage.getItem('logementData'));
        if (!cachedData) {
            fetchData('/logements.json').then((data) => {
                localStorage.setItem('logementData', JSON.stringify(data));
                cachedData = data;
            });
        }

        for (const logement of cachedData) {
            if (logement.id === id) {
                console.log(logement);
                setData(logement);
                break;
            }
        }

        setLoading(false);
    }, []);

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
