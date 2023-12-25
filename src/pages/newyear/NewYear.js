import React from 'react';

import Snowfall from 'react-snowfall'

import Container from 'components/Container'
import LazyImage from 'components/LazyImage';
import TextWithBackground from 'components/TextWithBackground'

import NewYearImg1 from "assets/services/newyear_1.jpg";
import NewYearImg2 from "assets/services/newyear_2.jpg";
import NewYearImg3 from "assets/services/newyear_3.gif";
import GoldStar from "assets/icons/star_gold.png";
import PurpleStar from "assets/icons/star_purple.png";

import styles from './NewYear.module.css'


const snowflake1 = document.createElement('img')
snowflake1.src = GoldStar;
const snowflake2 = document.createElement('img')
snowflake2.src = PurpleStar;


const NewYear = () => (
    <>
    <Snowfall
        className={styles['snowfall']}
        snowflakeCount={200}
        images={[snowflake1, snowflake2]}
    />
    <Container> 
        <TextWithBackground>
            <h3>
                🎉 Sylwestrowy Box 🎊
            </h3>
            <br/>
            <LazyImage
                className={styles['vid-container']}
                src={NewYearImg3}
            />
            <p>
                👉 dla 4 osób 170zł
                <br/>
                👉 dla 6 osób 250zł
            </p>
            <p>
                Zamówienia przyjmujemy do 28 grudnia 🕗
            </p>
            <p>
                Zachęcamy do składania zamówień na miejscu lub telefonicznie 😊<br/>
                <a href="tel:+48733314441">(+48) 733 314 441</a>
            </p>
        </TextWithBackground>

        <div className={styles['img-container']}>
            <LazyImage src={NewYearImg1} />
            <LazyImage src={NewYearImg2} />
        </div>
    </Container>
    </>
);

export default NewYear;
