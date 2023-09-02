import { useState } from 'react';
import useWindowDimensions from 'WindowSize';

import Container from 'components/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import styles from './Menu.module.css';

import logo2 from "assets/mlyn_logo2.jpg";
import TextWithBackground from 'components/TextWithBackground';

const OutdatedWarning = () => (
    <TextWithBackground className={[styles.outdated]}>
        <h3>¡Sorry!</h3>
        <p>
            This version of the menu is <b>slightly out-of-date</b> 😢
            <br/>
            We're working on it but feel free to contact the
            restaurant directly if you have any questions!
        </p>
    </TextWithBackground>
)

const Menu = () => {
    const { width } = useWindowDimensions();
    const [isEng, setIsEng] = useState(false);

    const text = isEng ? (width > 500 ? "Zmień język 🇵🇱" : "🇵🇱") : (width > 500 ? "Change language 🇬🇧" : "🇬🇧");
    const lang = isEng ? "ang" : "pol";

    return (
        <Container className={styles.menu}>
            <div className={styles["lang-button"]}>
                <Button variant="outline-secondary" onClick={() => setIsEng(eng => !eng)}>
                    {text}
                </Button>
            </div>
            { isEng && <OutdatedWarning/> }
            <Row className="justify-content-md-center">
                <Col>
                    <Image className="w-50" src={logo2} />
                </Col>
            </Row>
            <Row lg="2" md="2" sm="1">
                {[...Array(7).keys()].map(idx => (
                    <Col sm key={idx}>
                        <Image fluid
                            src={require(`assets/menu-${lang}/menu-modry-mlin-${lang}_Page_${idx + 2}.jpg`)}/>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Menu;