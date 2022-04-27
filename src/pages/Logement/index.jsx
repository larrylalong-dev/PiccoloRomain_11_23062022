import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Logement() {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('/logements.json');

            const jsonResult = await result.json();
            console.log(jsonResult);

            setData(jsonResult);
            setLoading(false);
        };
        fetchData();
    }, []);

    return !isLoading && <div>Logement {id}</div>;
}

export default Logement;
