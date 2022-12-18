import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import arp from "../assets/arp_large.jpg";

import styles from "./Arp.module.css"

const Arp = () => (
    <Container className={styles.header}>
        <Image src={arp} className={styles.image} />
    </Container>
);

export default Arp;
