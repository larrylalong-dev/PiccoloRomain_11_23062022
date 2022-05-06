import Banner from '../../components/Banner';
import bg from '../../assets/background_about.svg';
import DropdownText from '../../components/DropdownText';
import styles from './about.module.css';

function About() {
    return (
        <div className={styles.about}>
            <Banner className={styles.banner} imgSrc={bg} />
            <div className={styles.dropdownWrapper}>
                <DropdownText
                    label="Fiabilité"
                    content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
                />
                <DropdownText
                    label="Respect"
                    content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                />
                <DropdownText
                    label="Service"
                    content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
                />
                <DropdownText
                    label="Sécurité"
                    content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                />
            </div>
        </div>
    );
}

export default About;
