import React from 'react';

import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

import christmasMenu from "../assets/christmas.jpg";

export default function Christmas() {
    return (
        <Container style={{ maxWidth: '750px', width: '90%', textAlign: 'center'  }}>
            <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>
                🎄 Święta z Modrym Młynem 🎄
            </h3>
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

            <Image src={christmasMenu} fluid />

            <p style={{
                marginTop: '2rem', marginBottom: '3rem',
                color: 'blue', textDecoration: 'underline', cursor: 'default'
            }}>
                #kaszuby #kuchniakaszubska #restrauracjakaszubska #modrymłyn
                #rumia #święta #wigilia #catering #cateringświąteczny
                #ofertaświąteczna #menuświąteczne #świątecznystół
            </p>

        </Container>
    );
}
