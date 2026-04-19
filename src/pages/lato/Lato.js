import React from 'react';

import Container from 'components/Container';
import LazyImage from 'components/LazyImage';
import TextWithBackground from 'components/TextWithBackground';

import Scenery1 from 'assets/lato/lato_scenery_1.jpg';
import Scenery2 from 'assets/lato/lato_scenery_2.jpg';
import Drinks1 from 'assets/lato/lato_drinks_1.jpg';
import Drinks2 from 'assets/lato/lato_drinks_2.jpg';
import Grill1 from 'assets/lato/lato_grill_1.jpg';
import Grill2 from 'assets/lato/lato_grill_2.jpg';

import styles from './Lato.module.css';

const Lato = () => (
    <Container>
        <TextWithBackground>
            <h3>
                ☀️ Lato w Modrym Młynie 🌿
            </h3>
            <br/>
            <p>
                Z nadejściem cieplejszych dni 🌱 zapraszamy do naszego
                nowego letniego stoiska w ogrodzie restauracyjnym! 🏡
                Serwujemy coś świeżego prosto pod chmurką — bez wchodzenia
                do środka, z widokiem na młyński staw 💦
            </p>
        </TextWithBackground>

        <div className={styles['img-container']}>
            <LazyImage src={Scenery1} />
            <LazyImage src={Scenery2} />
        </div>

        <TextWithBackground>
            <p>
                Orzeźwiające <b>shakes</b> 🥤 i <b>smoothies</b> 🍓
                z sezonowych owoców, domowe <b>lemoniady</b> 🍋,
                &nbsp;<b>bezalkoholowe koktajle</b> 🍹 oraz
                &nbsp;<b>kawa na wynos</b> ☕ — idealna na leniwe
                popołudnie lub spacer nad rzeką 🌞
            </p>
        </TextWithBackground>

        <div className={styles['img-container']}>
            <LazyImage src={Drinks1} />
            <LazyImage src={Drinks2} />
        </div>

        <TextWithBackground>
            <p>
                Prosto z grilla 🔥 serwujemy <b>świeże wyroby</b> 🍢
                przygotowywane na miejscu — aromatyczne, chrupiące, gotowe
                do złapania w biegu albo zjedzenia w naszym ogródku 🌿
            </p>
        </TextWithBackground>

        <div className={styles['img-container']}>
            <LazyImage src={Grill1} />
            <LazyImage src={Grill2} />
        </div>

        <TextWithBackground>
            <p>
                Otwarcie stoiska uzależnione jest od pogody ⛅ — aby
                potwierdzić dostępność, prosimy o kontakt telefoniczny 📞
                <br/>
                <a href="tel:+48733314441">(+48) 733 314 441</a>
            </p>
        </TextWithBackground>
    </Container>
);

export default Lato;
