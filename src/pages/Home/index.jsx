import { useEffect, useState } from 'react';
import DropdownList from '../../components/DropdownList';
import DropdownText from '../../components/DropdownText';
import Gallery from '../../components/Gallery';
import Tag from '../../components/Tag';
import styles from '../../styles/pages/home.module.css';
import bg from '../../assets/background_home.svg';
import Banner from '../../components/Banner';

const test = [
    'Équipements de base',
    'Micro-Ondes',
    'Douche italienne',
    'Frigo',
    'WIFI',
];

function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('logements.json');
            let a = await result.json();
            console.log(a);
            setData(a);
        };

        fetchData();
    }, []);
    return (
        <div className={styles.home}>
            <Banner imgSrc={bg} label="Chez vous, partout et ailleurs" />
            <div style={{ display: 'flex' }}>
                <Tag label="dqsdddddddddddddd" />
                <Tag label="dsdf" />
            </div>
            ------
            <DropdownList label="Equipements" itemsList={test} />
            <DropdownText
                label="Description"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus laudantium voluptas ullam nemo perspiciatis nihil alias repudiandae voluptatibus porro a sapiente aperiam quidem, impedit tempore, fugit, ducimus molestias eos error fugiat maiores? Minus amet ullam, eum consequuntur nostrum dolore accusantium deleniti numquam provident nulla necessitatibus temporibus aperiam voluptas placeat eligendi.
"
            />
            <Gallery logementList={data} />
        </div>
    );
}

export default Home;
