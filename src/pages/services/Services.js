import TextWithBackground from "components/TextWithBackground";
import LazyImage from "components/LazyImage";
import Container from "components/Container";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import DolnaSala from 'assets/venues/dolna_sala.jpeg';
import Wiata from 'assets/venues/wiata.jpeg';

import styles from './Services.module.css';
import { useState } from "react";


const ServiceFiltersData = [
    {
        id: 0,
        text: "Organizacja imprez okolicznościowych",
        img: Wiata,
    },
    {
        id: 1,
        text: "Sprzedaż domowych wędzonek",
        img: Wiata,
    },
];

const ServiceFiltersItem = ({ text, img, active, onClick }) => (
    <Card
        className={`${styles["service-filters-item"]} ${active && styles["service-filter-active"]}`}
        onClick={onClick}
    >
        <Card.Img variant="top" src={img}/>
        <div className={styles["service-filters-item-text"]}>
            <span>{text}</span>
        </div>
        <Button variant="secondary" size='sm' disabled={active}>Więcej informacji</Button>
    </Card>
);

const ServiceFilters = ({ activeFilter, onActiveFilterChanged }) => (
    <div className={styles["service-filters"]}>
    {
        ServiceFiltersData.map(filter => (
            <ServiceFiltersItem
                key={filter.id}
                text={filter.text}
                img={filter.img}
                onClick={() => onActiveFilterChanged(filter.id)}
                active={activeFilter === filter.id}
            />
        ))
    }
    </div>
);

const VenueImage = ({ src, text, href }) => (
    <Container className={styles["venue-image-container"]}>
        <a href={href} target="_blank" rel="noreferrer" >
            <LazyImage className={styles["venue-image"]} src={src} text={text} />
        </a>
    </Container>
);

const Parties = () => (
    <>
    <TextWithBackground>
        <h3>
            📆 Organizacja imprez okolicznościowych 🍽
        </h3>
        <br/>
        <p>
            Wesele, urodziny, I Komunia święta czy Wigilia firmowa... w Modrym Młynie
            zorganizujemy dla Ciebie wymarzoną imprezę okolicznościową. Sprawdź
            dostępność dat i sal telefonicznie: <b>(+48) 733 314 441</b>
        </p>

        <br/>
        <p>
            Dysponujemy kameralną, oddzielną salką, gdzie zapewniamy
            niepowtarzalną atmosferę, no i pyszne jedzenie 😋
        </p>
        <VenueImage
            src={DolnaSala} 
            text="Imprezy okolicznościowe: sala dolna" 
            href="https://www.facebook.com/modrymlyn.rumia/photos/a.105183665087110/157751023163707"
        />

        <br/>
        <p>
            Zapraszamy również do naszej wiaty w sielskim klimacie! 🌻
        </p>
        <VenueImage
            src={Wiata}
            text="Imprezy okolicznościowe: wiata"
            href="https://www.facebook.com/modrymlyn.rumia/photos/a.105183665087110/341843051421169"    
        />
        <p>
            Sprawdź dostępność telefonicznie: <b>(+48) 733 314 441</b>
        </p>
    </TextWithBackground>
    </>
);

const Smoked = () => (
    <>
    <TextWithBackground>
        <h3>
            🐟 Sprzedaż domowych wędzonek 🍖
        </h3>
    </TextWithBackground>
    </>
);

const Services = () => {
    const [activeFilter, setActiveFilter] = useState(0);
    return (
        <Container>
            <ServiceFilters
                activeFilter={activeFilter}
                onActiveFilterChanged={setActiveFilter}
            />
            { activeFilter === 0 && <Parties/> }
            { activeFilter === 1 && <Smoked/> }
        </Container>
    );
};

export default Services;
