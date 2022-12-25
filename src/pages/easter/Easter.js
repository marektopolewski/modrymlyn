import React from 'react';
import { Card } from 'react-bootstrap';

import Container from '../../components/Container';

import easterMenu from "assets/easter.jpg";
import styles from './Easter.module.css'

const Easter = () => (
    <Container>
        <Card>
            <Card.Body>
                <Card.Title className={styles['card-title']}>
                    🐰🐰 Zamówienia świąteczne 🐰🐰
                </Card.Title>
                <Card.Text>
                    <br/>
                    {"Zamówienia świąteczne przyjmujemy do wtorku 12 kwietnia"}
                    <br/><br/>
                    ☎️ <a href="tel:733314441">733 314 441</a> ☎️
                    <br/>
                </Card.Text>
            </Card.Body>
            <Card.Img variant="bottom" src={easterMenu} />
        </Card>
    </Container>
);

export default Easter;
