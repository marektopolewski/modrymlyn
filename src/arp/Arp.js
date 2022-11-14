import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import arp from "../assets/arp_large.jpg";

const Arp = () => (
    <Container className="header">
        <Image src={arp} style={{ maxHeight: '100%', maxWidth: '100%' }} fluid />
    </Container>
);

export default Arp;
