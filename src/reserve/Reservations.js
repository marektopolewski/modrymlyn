import { Container } from "react-bootstrap";

import LazyImage from "../components/LazyImage";

import DolnaSala from '../assets/venues/dolna_sala.jpeg'
import Wiata from '../assets/venues/wiata.jpeg'
import './Reservations.css'

const VenueImage = ({ src, text, href }) => (
    <a href={href} target="_blank">
        <LazyImage className="venue-image" src={src} text={text} />
    </a>
);

const Reservations = () => (
    <Container style={{
        textAlign: 'center', marginTop: '2rem', marginBottom: '3rem',
        width: '90%', maxWidth: '950px'
    }}>

    <h3 style={{ marginTop: '2rem', marginBottom: '2rem' }}>
        📆 Organizacja imprez okolicznościowych 🍽
    </h3>
    <p>
        Wesele, urodziny, I Komunia święta czy Wigilia firmowa.. w Modrym Młynie
        zorganizujemy dla Ciebie wymarzoną imprezę okolicznościową. Sprawdź
        dostępność dat i sal telefonicznie: <b>(+48) 733 314 441</b>
    </p>

    <p style={{ marginTop: '2rem', marginBottom: '1rem' }}>
        Dysponujemy kameralną, oddzielną salką, gdzie zapewniamy
        niepowtarzalną atmosferę, no i pyszne jedzenie 😋
    </p>
    <VenueImage
        src={DolnaSala} text="Imprezy okolicznościowe: sala dolna" 
        href="https://www.facebook.com/modrymlyn.rumia/photos/a.105183665087110/157751023163707" />

    <p style={{ marginTop: '2rem', marginBottom: '1rem' }}>
        Zapraszamy również do naszej wiaty w sielskim klimacie! 🌻
    </p>
    <VenueImage
        src={Wiata} text="Imprezy okolicznościowe: wiata"
        href="https://www.facebook.com/modrymlyn.rumia/photos/a.105183665087110/341843051421169" />

    </Container>
);

export default Reservations;