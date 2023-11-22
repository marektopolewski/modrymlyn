import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import arp from "assets/arp_large.jpg";
import arp2 from "assets/arp2_large.jpg";

import styles from "./Arp.module.css"

const Arp = () => (
    <Container>
        <div className={styles.header}>
            <div className={styles['image-wrap']}>
                <Image src={arp} className={styles.image}/>
            </div>
            <div className={styles['image-wrap']}>
                <Image src={arp2} className={styles.image}/>
            </div>
        </div>
        
    </Container>
);

export default Arp;
