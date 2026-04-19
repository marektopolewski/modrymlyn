import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
import Domek from 'assets/services/domek.jpg'
import Warsztaty1 from 'assets/services/warsztaty_1.jpg'
import Warsztaty2 from 'assets/services/warsztaty_2.jpg'
import Warsztaty3 from 'assets/services/warsztaty_3.jpg'
import Warsztaty4 from 'assets/services/warsztaty_4.jpg'
import Warsztaty5 from 'assets/services/warsztaty_5.jpg'

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
        // text: "Zamów catering online", // TODO: Catering launch
        text: "Catering",
        img: Catering,
    },
    {
        id: 3,
        text: "Warsztaty kulinarne",
        img: Warsztaty1,
    },
    {
        id: 4,
        text: "Wynajem domku",
        img: Domek,
        external: true,
    },
];

const ServiceFiltersItem = ({ text, img, active, onClick, external }) => (
    <Card
        className={`${styles["service-filters-item"]} ${active ? styles["service-filter-active"] : ""}`}
        onClick={onClick}
    >
        <div className={styles["card-img-wrapper"]}>
            <Card.Img variant="top" src={img}/>
            {external && <span className={styles["external-icon"]}>↗</span>}
        </div>
        <Button variant="light" disabled={active}>
            <span>{text}</span>
        </Button>
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
                    external={filter.external}
                    onClick={() => {
                        if (filter.id === 2) // catering
                            navigate('/catering')
                        else if (filter.id === 4) // rental
                            window.open('http://domek.modrymlyn.pl', '_blank', 'noopener,noreferrer');
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

const EmailLink = () => (
    <a href="mailto:biuro@mlynmodry.pl">
        <span className={styles["service-tel"]}>
            <b>biuro@mlynmodry.pl</b>
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

const CulinaryWorkshops = () => (
    <>
    <TextWithBackground>
        <h3>
            👨‍🍳 Warsztaty „Lepimy pierogi” 🥟
        </h3>
        <br/>
        <p>
            Zapraszamy na niezwykłe warsztaty, podczas których uczestnicy nauczą się
            sztuki lepienia tradycyjnych polskich pierogów — od zagniatania ciasta,
            przez wałkowanie i wykrajanie, aż po wypełnianie farszem, zaklejanie
            i gotowanie. 🤲
        </p>
        <br/>
        <Row>
            <Col xs="12" sm="6">
                <ServiceImage src={Warsztaty1} text="Warsztaty kulinarne: lepienie pierogów"/>
            </Col>
            <Col xs="12" sm="6">
                <ServiceImage src={Warsztaty2} text="Warsztaty kulinarne: lepienie pierogów"/>
            </Col>
        </Row>
        <br/>
        <p>
            Aby zagwarantować każdemu pełne zaangażowanie, przygotowujemy 4 odrębne
            stanowiska dla grup 6-8 osobowych. Każda grupa przechodzi przez wszystkie
            etapy produkcji pod okiem naszych doświadczonych instruktorów. 👨‍🍳
        </p>
        <br/>
        <p>
            Warsztaty odbywają się w wydzielonej salce, a stoły do biesiadowania
            ustawiamy na górnej sali lub w altance — jest gdzie wspólnie zasiąść
            do przygotowanych potraw. 🍽
        </p>
        <br/>
        <Row>
            <Col xs="12" sm="6">
                <ServiceImage src={Warsztaty3} text="Warsztaty kulinarne: degustacja"/>
            </Col>
            <Col xs="12" sm="6">
                <ServiceImage src={Warsztaty4} text="Warsztaty kulinarne: degustacja"/>
            </Col>
        </Row>
        <br/>
        <p>
            <b>Czas trwania:</b> 3 godziny<br/>
            <b>Liczba uczestników:</b> 20-50 osób<br/>
            <b>Termin:</b> dowolny, po wcześniejszej rezerwacji<br/>
            <b>Miejsce:</b> Restauracja „Modry Młyn”, Rumia, ul. Mickiewicza 19a
        </p>
        <br/>
        <p>
            W ramach warsztatów zapewniamy poczęstunek w formie szwedzkiego bufetu.
            Do wyboru jeden z trzech pakietów:
        </p>
        <br/>
        <table>
            <tbody>
                <tr>
                    <td>Pakiet A — pierogi 1 rodzaj (5 szt./os.), woda z miętą i cytryną</td>
                    <td>60 zł/os.</td>
                </tr>
                <tr>
                    <td>Pakiet B — zupa, pierogi 2 rodzaje (6 szt./os.), woda z miętą i cytryną</td>
                    <td>80 zł/os.</td>
                </tr>
                <tr>
                    <td>Pakiet C — czekadełko, zupa, pierogi 3 rodzaje (8 szt./os.), surówka, woda z miętą i cytryną</td>
                    <td>120 zł/os.</td>
                </tr>
            </tbody>
        </table>
        <br/>
        <p>
            <small>
                Przy każdych 10 uczestnikach 1 opiekun otrzymuje udział gratis.<br/>
                Ceny mają charakter orientacyjny i mogą ulec zmianie — aktualny cennik
                potwierdzamy telefonicznie lub mailowo.
            </small>
        </p>
        <br/>
        <ServiceImage src={Warsztaty5} text="Warsztaty kulinarne: efekt końcowy"/>
        <br/>
        <p>
            W przypadku grup międzynarodowych zapewniamy instruktaż w języku angielskim. 🇬🇧
        </p>
        <br/>
        <p>
            Zapisy i szczegóły: <TelLink/> lub <EmailLink/>
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
            { activeFilter === 3 && <CulinaryWorkshops/> }
        </Container>
    );
};

export default Services;
