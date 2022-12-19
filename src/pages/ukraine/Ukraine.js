import React from 'react';

import { Card } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

import ukraineHeader from "assets/ukraine.jpg";

const LinkLikeText = (props) => {
    return (
        <span style={{ textDecoration: 'underline', color: '#0d6efd' }}>
            {props.text}
        </span>
    );
}

export default function Ukraine() {
    return (
        <Container style={{ maxWidth: '750px', width: '90%' }}>
            <Card>
                <Card.Img variant="top" src={ukraineHeader} />
                <Card.Body>
                    <Card.Title>Kochani! 💔 🇺🇦</Card.Title>
                    <Card.Text>
                        <br/>
                        {"Chcielibyśmy włączyć się razem z Yura Savshak do akcji pomocy Ukrainie 🇺🇦"}
                        <br/><br/>
                        {"Od jutra będziemy mieli specjalne danie w menu: 🥣 BARSZCZ UKRAIŃSKI 🥣"}
                        <br/><br/>
                        {"Cały przychód ze sprzedaży tej pysznej zupy wrzucony do 💰skarbonki💰 \
                          przekażemy na rzecz organizacji pomagającej Walczącym Ukraińcom: "}
                        <a href="https://www.siepomaga.pl/pah-ukraina">https://www.siepomaga.pl/pah-ukraina</a>
                        <br/><br/>
                        <LinkLikeText text="#ukrainawalczy" /> {" "}
                        <LinkLikeText text="#pomocdlaukrainy" /> {" "}
                        <LinkLikeText text="#modrymłyn" />
                    </Card.Text>
                </Card.Body>
            </Card>

        </Container>
    );
}
