import React from 'react';

import Container from 'components/Container';
import LazyImage from 'components/LazyImage';
import TextWithBackground from 'components/TextWithBackground';

import Scenery from 'assets/lato/scenery.jpg';
import Drinks1 from 'assets/lato/drinks_1.jpg';
import Drinks2 from 'assets/lato/drinks_2.jpg';
import Menu1 from 'assets/lato/menu_lato_1.jpg';

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
            <LazyImage src={Scenery} />
            <LazyImage src={Drinks1} />
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
            <LazyImage src={Drinks2} />
            <LazyImage src={Menu1} />
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
