import React from 'react';

import Container from 'components/Container'
import LazyImage from 'components/LazyImage';
import TextWithBackground from 'components/TextWithBackground'

import christmasMenu from "assets/christmas.jpg";

import styles from './Christmas.module.css'

const Christmas = () => (
    <Container>
        <TextWithBackground>
            <h3>
                🎄 Święta z Modrym Młynem 🎄
            </h3>
            <br/>
            <p>
                Z racji tego, że grudzień zbliża się wielkimi krokami, a do
                Świąt Bożego Narodzeniapozostało już niewiele czasu,
                przygotowaliśmy dla Was ofertę cateringu świątecznego 🎅
            </p>
            <p>
                Zapraszamy do wyboru potraw na Wasz świąteczny stół!
            </p>
            <p>
                Zamówienia przyjmujemy do 18 grudnia, a po odbiór zapraszamy 23 grudnia 🕗
            </p>
            <p>
                Zachęcamy do składania zamówień na miejscu, ewentualnie telefonicznie 😊
            </p>
        </TextWithBackground>

        <LazyImage src={christmasMenu} fluid />

        <TextWithBackground className={[styles.text, styles.hashtags]}>
            #kaszuby #kuchniakaszubska #restrauracjakaszubska #modrymłyn
            #rumia #święta #wigilia #catering #cateringświąteczny
            #ofertaświąteczna #menuświąteczne #świątecznystół
        </TextWithBackground>

    </Container>
);

export default Christmas;
