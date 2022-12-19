import React from 'react';

import { Card } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

import easterMenu from "assets/easter.jpg";

export default function Easter() {
    return (
        <Container style={{ maxWidth: '750px', width: '90%' }}>
            <Card>
                <Card.Body>
                    <Card.Title style={{ textAlign: 'center', marginTop: '20px' }}>
                        🐰🐰 Zamówienia świąteczne 🐰🐰
                    </Card.Title>
                    <Card.Text style={{ textAlign: 'center' }}>
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
}
