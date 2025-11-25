import React from 'react';

import Snowfall from 'react-snowfall'

import Container from 'components/Container'
import LazyImage from 'components/LazyImage';
import TextWithBackground from 'components/TextWithBackground'

import christmasMenu0 from "assets/christmas/christmas_0.jpeg";
import christmasMenu1 from "assets/christmas/christmas_1.jpeg";
import christmasMenu2 from "assets/christmas/christmas_2.jpeg";
import christmasMenu3 from "assets/christmas/christmas_3.jpeg";

import styles from './Christmas.module.css'

const Christmas = () => (
    <>
    <Snowfall
        className={styles['snowfall']}
        color="white"
        snowflakeCount={200}
    />
    <Container> 
        <TextWithBackground>
            <h3>
                🎄 Święta z Modrym Młynem 🎅
            </h3>
            <br/>
            <p>
                Z racji tego, że grudzień zbliża się wielkimi krokami, a do
                Świąt Bożego Narodzenia pozostało już niewiele czasu,
                przygotowaliśmy dla Was ofertę <b>cateringu świątecznego</b> 🧑‍🎄
            </p>
            <p>
                Zapraszamy do wyboru potraw na Wasz świąteczny stół!
            </p>
            <p>
                Zamówienia przyjmujemy <b>do piątku 19 grudnia</b>, a po odbiór zapraszamy 23 grudnia 🕗
            </p>
            <p>
                Zachęcamy do składania zamówień telefonicznie 😊<br/>
                <a href="tel:+48733314441">(+48) 733 314 441</a>
            </p>
        </TextWithBackground>

        <div className={styles['img-container']}>
            <LazyImage src={christmasMenu0} />
            <LazyImage src={christmasMenu1} />
        </div>

        <div className={styles['img-container']}>
            <LazyImage src={christmasMenu2} />
            <LazyImage src={christmasMenu3} />
        </div>

        <TextWithBackground className={[styles.text, styles.hashtags]}>
            <p>
                #kaszuby #kuchniakaszubska #restrauracjakaszubska #modrymłyn
                #rumia #święta #wigilia #catering #cateringświąteczny
                #ofertaświąteczna #menuświąteczne #świątecznystół
            </p>
        </TextWithBackground>

    </Container>
    </>
);

export default Christmas;
