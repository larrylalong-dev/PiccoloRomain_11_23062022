import { useEffect, useState } from 'react';
import Gallery from '../../components/Gallery';
import styles from './home.module.css';
import bg from '../../assets/background_home.svg';
import Banner from '../../components/Banner';
import { fetchData } from '../../helper/helper.js';

function Home() {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const cachedData = JSON.parse(localStorage.getItem('logementData'));
        if (!cachedData) {
            fetchData('/logements.json').then((data) => {
                localStorage.setItem('logementData', JSON.stringify(data));
                setData(data);
            });
        } else {
            setData(cachedData);
        }

        setLoading(false);
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
