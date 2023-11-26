import React from 'react';

import Container from 'components/Container';
import LazyImage from 'components/LazyImage';

import valentinesMenu from "assets/valentines.jpg";

export default function Valentines() {
    return (
        <Container>
            <LazyImage src={valentinesMenu} fluid />
        </Container>
    );
}
