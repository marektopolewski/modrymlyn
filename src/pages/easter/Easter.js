import React from 'react';

import Container from '../../components/Container';
import TextWithBackground from 'components/TextWithBackground'


import easterMenu from "assets/easter.jpg";
import LazyImage from 'components/LazyImage';
import styles from './Easter.module.css'

const Easter = () => (

    <Container>
        <TextWithBackground>
            <h3>
                🐰🐰 Zamówienia świąteczne 🐰🐰
            </h3>
            <br/>
            {/* <p>Zamówienia świąteczne przyjmujemy do wtorku 12 kwietnia</p> */}
            <br/>
            <p>☎️ <a href="tel:+48733314441">(+48) 733 314 441</a> ☎️</p>
        </TextWithBackground>

        <div className={styles['img-container']}>
            <LazyImage src={easterMenu} />
        </div>
    </Container>
);

export default Easter;
