import React from 'react';

import Container from 'components/Container';
import LazyImage from 'components/LazyImage';

import valentinesMenu from "assets/valentines.jpg";

import styles from "./Valentines.module.css"


export default function Valentines() {
    return (
        <Container>
            <div className={styles['image-wrap']}>
                <LazyImage src={valentinesMenu} className={styles.image}/>
            </div>
        </Container>
    );
}
