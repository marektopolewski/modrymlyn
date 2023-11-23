import { useState } from "react";

import TextWithBackground from "components/TextWithBackground";
import LazyImage from "components/LazyImage";
import Container from "components/Container";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import DolnaSala from 'assets/services/dolna_sala.jpeg';
import Wiata from 'assets/services/wiata.jpeg';
import Wedzoniki from 'assets/services/wedzonki.jpeg';

import styles from './Services.module.css';
import { useNavigate } from "react-router-dom";


const ServiceFiltersData = [
    {
        id: 0,
        text: "Organizacja imprez okolicznościowych",
        img: Wiata,
    },
    {
        id: 1,
        text: "Sprzedaż domowych wędzonek",
        img: Wedzoniki,
    },
    {
        id: 2,
        text: "Zamów catering online",
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

const ServiceFilters = ({ activeFilter, onActiveFilterChanged }) => {
    const navigate = useNavigate();
    return (
        <div className={styles["service-filters"]}>
        {
            ServiceFiltersData.map(filter => (
                <ServiceFiltersItem
                    key={filter.id}
                    text={filter.text}
                    img={filter.img}
                    onClick={() => {
                        if (filter.id === 2) // catering
                            navigate('/order')
                        else
                            onActiveFilterChanged(filter.id)
                    }}
                    active={activeFilter === filter.id}
                />
            ))
        }
        </div>
    );
};

const ServiceImage = ({ src, text, href }) => (
    <Container className={styles["service-image-container"]}>
        <a href={href} target="_blank" rel="noreferrer" >
            <LazyImage className={styles["service-image"]} src={src} text={text} />
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
        <ServiceImage
            src={DolnaSala} 
            text="Imprezy okolicznościowe: sala dolna" 
            href="https://www.facebook.com/modrymlyn.rumia/photos/a.105183665087110/157751023163707"
        />

        <br/>
        <p>
            Zapraszamy również do naszej wiaty w sielskim klimacie! 🌻
        </p>
        <ServiceImage
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
        <br/>
        <p>
            Miłośnikom prawdziwego głębokiego smaku oferujemy własnoręcznie przygotowane
            w naszej wędzarni wędliny i nie tylko. Przygotowane jedynie z naturalnych
            składników, bez żadnej „chemii”, wędzone w prawdziwym dymie ze starannie
            dobranego drewna. 👨‍🍳💨
        </p>

        <br/>
        <table>
            <tr>
                <td>Szynka wędzona prażona (ok. 500g)</td>
                <td>85 zł/1kg</td>
            </tr>
            <tr>
                <td>Boczek wędzony (ok. 500g)</td>
                <td>75 zł/1kg</td>
            </tr>
            <tr>
                <td>Polędwiczka wędzona prażona (ok. 300g)</td>
                <td>95 zł/1kg</td>
            </tr>
            <tr>
                <td>Pstrąg wędzony cały (ok. 350g)</td>
                <td>85 zł/1kg</td>
            </tr>
            <tr>
                <td>Jajko wędzone</td>
                <td>12 zł/3szt</td>
            </tr>
        </table>
            
        <ServiceImage
            src={Wedzoniki}
            text="Imprezy okolicznościowe: wiata"
        />

        <p>
            Wszystko przygotowane według tradycyjnych, sprawdzonych przepisów.<br/>
            Musicie tego spróbować! 😋
        </p>

        <br/>
        <p>
            Sprawdź dostępność telefonicznie: <b>(+48) 733 314 441</b> 
        </p>
    </TextWithBackground>
    </>
);

const Services = () => {
    const [activeFilter, setActiveFilter] = useState(0);
    return (
        <Container className={styles["services-container"]}>
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
