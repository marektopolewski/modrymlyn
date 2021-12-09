import React from 'react';

import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

import christmasMenu from "../assets/christmas.jpg";

export default function Christmas() {
    return (
        <Container style={{ maxWidth: '750px', width: '90%' }}>
            <Image src={christmasMenu} fluid />
        </Container>
    );
}
