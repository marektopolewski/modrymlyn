import { useState } from "react";
// import { useNavigate } from "react-router-dom";

import TextWithBackground from "components/TextWithBackground";
import LazyImage from "components/LazyImage";
import Container from "components/Container";

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

import DolnaSala from 'assets/services/dolna_sala.jpeg';
import DolnaSala2 from 'assets/services/dolna_sala_2.jpeg';
import Wiata from 'assets/services/wiata.jpeg';
import Wiata2 from 'assets/services/wiata_2.jpeg';
import GornaSala from 'assets/services/gorna_sala.jpeg';
import GornaSala2 from 'assets/services/gorna_sala_2.jpeg';
import Wedzoniki from 'assets/services/wedzonki.jpeg';
import Catering from 'assets/catering/mus_groszek.jpg'

import styles from './Services.module.css';


const ServiceFiltersData = [
    {
        id: 0,
        text: "Organizacja imprez",
        img: Wiata2,
    },
    {
        id: 1,
        text: "Sprzedaż wędzonek",
        img: Wedzoniki,
    },
    {
        id: 2,
        text: "Zamów catering online",
        img: Catering,
    },
];

const ServiceFiltersItem = ({ text, img, active, onClick }) => (
    <Card
        className={`${styles["service-filters-item"]} ${active ? styles["service-filter-active"] : ""}`}
        onClick={onClick}
    >
        <Card.Img variant="top" src={img}/>
        <Button variant="light" disabled={active}>
            <span>{text}</span>
        </Button>
    </Card>
);

const ServiceFilters = ({ activeFilter, onActiveFilterChanged }) => {
    // const navigate = useNavigate();
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
                            // navigate('/catering')
                            alert("Dostępne wkrótce!")
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
    <a href={href} target="_blank" rel="noreferrer">
        <LazyImage
            className={styles["service-image"]}
            src={src}
            text={text}
        />
    </a>
);

const TelLink = () => (
    <a href="tel:+48733314441">
        <span className={styles["service-tel"]}>
            <b>(+48) 733 314 441</b>
        </span>
    </a>
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
            zorganizujemy dla Ciebie wymarzoną imprezę okolicznościową. <br/>
            Sprawdź dostępność dat i sal telefonicznie: <TelLink/>
        </p>

        <br/>
        <p>
            Dysponujemy kameralną, oddzielną salką, gdzie zapewniamy
            niepowtarzalną atmosferę, no i pyszne jedzenie 😋
        </p>
        <br/>
        <Row>
            <Col xs="12" sm="6">
                <ServiceImage
                    src={DolnaSala2} 
                    text="Imprezy okolicznościowe: sala dolna" 
                    href="https://www.facebook.com/modrymlyn.rumia/photos/a.105183665087110/157751023163707"
                />
            </Col>
            <Col xs="12" sm="6">
                <ServiceImage
                    src={DolnaSala} 
                    text="Imprezy okolicznościowe: sala dolna" 
                    href="https://www.facebook.com/modrymlyn.rumia/photos/a.105183665087110/157751023163707"
                />
            </Col>
        </Row>

        <br/>
        <p>
            ☀️ Dla spragnionych słońca i widoku na park Starowiejski
            możemy również zaoferować salę górną 🌳
        </p>
        <br/>
        <Row>
            <Col xs="12" sm="6">
                <ServiceImage
                    src={GornaSala}
                    text="Imprezy okolicznościowe: sala górna"
                    href="https://www.facebook.com/modrymlyn.rumia/posts/pfbid0V7tEb67FU7gjhbMJ3MFUgybetDKwxrdPyz4YeZ7TV4nkntxc7wbFWmaabXT9bQZNl"
                />
            </Col>
            <Col xs="12" sm="6">
                <ServiceImage
                    src={GornaSala2} 
                    text="Imprezy okolicznościowe: sala górna 2" 
                    href="https://www.facebook.com/photo.php?fbid=534031755539375&set=pb.100067976659529.-2207520000&type=3"
                />
            </Col>
        </Row>

        <br/>
        <p>
            Zapraszamy również do naszej wiaty w sielskim klimacie! 🌻
        </p>
        <br/>
        <Row>
            <Col xs="12" sm="6">
                <ServiceImage
                    src={Wiata2}
                    text="Imprezy okolicznościowe: wiata"
                    href="https://www.facebook.com/modrymlyn.rumia/posts/pfbid0V7tEb67FU7gjhbMJ3MFUgybetDKwxrdPyz4YeZ7TV4nkntxc7wbFWmaabXT9bQZNl"    
                />
            </Col>
            <Col xs="12" sm="6">
                <ServiceImage
                    src={Wiata}
                    text="Imprezy okolicznościowe: wiata"
                    href="https://www.facebook.com/modrymlyn.rumia/photos/a.105183665087110/341843051421169"    
                />
            </Col>
        </Row>

        <br/>
        <p>
            Zadzwoń i dowiedź się więcej: <TelLink/>
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
            <tbody>
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
            </tbody>
        </table>
        <br/>
            
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
            Sprawdź dostępność telefonicznie: <TelLink/>
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
