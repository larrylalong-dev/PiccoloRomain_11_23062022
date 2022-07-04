import { useEffect, useState } from 'react';
import Gallery from '../../components/Gallery';
import styles from './home.module.css';
import bg from '../../assets/bg_home.png';
import Banner from '../../components/Banner';
import { getFromCacheOrFetch } from '../../helper/helper.js';

function Home() {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        getFromCacheOrFetch('logementData', '/logements.json').then(data => {
            setData(data);
            setLoading(false);
        });
    }, []);
    return (
        !isLoading && (
            <div className={styles.home}>
                <Banner
                    imgSrc={bg}
                    label="Chez vous, partout et ailleurs"
                    mobileHeight="sm"
                />
                <Gallery logementList={data} />
            </div>
        )
    );
}

export default Home;
