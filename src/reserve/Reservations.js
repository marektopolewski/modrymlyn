import { Container } from "react-bootstrap";

import TextWithBackground from "../components/TextWithBackground";
import LazyImage from "../components/LazyImage";

import DolnaSala from '../assets/venues/dolna_sala.jpeg';
import Wiata from '../assets/venues/wiata.jpeg';

import styles from './Reservations.module.css';

const VenueImage = ({ src, text, href }) => (
    <a href={href} target="_blank" rel="noreferrer" >
        <LazyImage className={styles["venue-image"]} src={src} text={text} />
    </a>
);

const Reservations = () => (
    <Container className={styles.wrapper} style={{  }}>

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
    </TextWithBackground>

    <TextWithBackground>
        Dysponujemy kameralną, oddzielną salką, gdzie zapewniamy
        niepowtarzalną atmosferę, no i pyszne jedzenie 😋
    </TextWithBackground>
    <VenueImage
        src={DolnaSala} text="Imprezy okolicznościowe: sala dolna" 
        href="https://www.facebook.com/modrymlyn.rumia/photos/a.105183665087110/157751023163707" />

    <TextWithBackground>
        Zapraszamy również do naszej wiaty w sielskim klimacie! 🌻
    </TextWithBackground>
    <VenueImage
        src={Wiata} text="Imprezy okolicznościowe: wiata"
        href="https://www.facebook.com/modrymlyn.rumia/photos/a.105183665087110/341843051421169" />

    </Container>
);

export default Reservations;