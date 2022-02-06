import React from 'react';

import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

import valentinesMenu from "../assets/valentines.jpg";

export default function Valentines() {
    return (
        <Container style={{ maxWidth: '750px', width: '90%' }}>
            <Image src={valentinesMenu} fluid />
        </Container>
    );
}
