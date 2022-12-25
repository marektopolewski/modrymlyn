import React from 'react';
import Image from 'react-bootstrap/Image';

import Container from 'components/Container';
import valentinesMenu from "assets/valentines.jpg";

export default function Valentines() {
    return (
        <Container>
            <Image src={valentinesMenu} fluid />
        </Container>
    );
}
