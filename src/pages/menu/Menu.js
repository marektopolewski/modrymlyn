import { useState } from 'react';
import useWindowDimensions from '../../WindowSize';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import './Menu.css';

import logo2 from "assets/mlyn_logo2.jpg";

const Menu = () => {
    const { width } = useWindowDimensions();
    const [isEng, setIsEng] = useState(false);

    const text = isEng ? (width > 500 ? "Zmień język 🇵🇱" : "🇵🇱") : (width > 500 ? "Change language 🇬🇧" : "🇬🇧");
    const lang = isEng ? "ang" : "pol";

    return (
        <Container className="menu">
            <div className="lang-button">
                <Button variant="outline-secondary" onClick={() => setIsEng(eng => !eng)}>
                    {text}
                </Button>
            </div>
            <Row className="justify-content-md-center">
                <Col className="header-row">
                    <Image src={logo2} width="50%" />
                </Col>
            </Row>
            <Row lg="2" md="2" sm="1">
                {[...Array(7).keys()].map(idx => (
                    <Col sm key={idx}>
                        <Image fluid
                            src={require(`assets/menu-${lang}/menu-modry-mlin-${lang}_Page_${idx + 2}.jpg`)?.default}/>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Menu;