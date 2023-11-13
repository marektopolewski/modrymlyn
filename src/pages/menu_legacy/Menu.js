import { useNavigate, useParams } from "react-router-dom";
import useWindowDimensions from 'hooks/windowsize';

import Container from 'components/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import styles from './Menu.module.css';

import logo2 from "assets/mlyn_logo2.jpg";

const LanguageConfig = {
    en: {
        button: {
            lgLabel: "Zmień język 🇵🇱",
            smLabel: "🇵🇱",
            pathParam: "pl"
        },
        imgPrefix: "ang",
    },
    pl: {
        button: {
            lgLabel: "Change language 🇬🇧",
            smLabel: "🇬🇧",
            pathParam: "en"
        },
        imgPrefix: "pol",
    }
}

const Menu = () => {
    const navigate = useNavigate();
    const { langVersion } = useParams();
    const lang = langVersion === "en" ? "en" : "pl";
    const imgPrefix = LanguageConfig[lang].imgPrefix;

    const { width } = useWindowDimensions();

    return (
        <Container className={styles.menu}>
            <div className={styles["lang-button"]}>
                <Button variant="outline-secondary" onClick={() => navigate(`/menu/${LanguageConfig[lang].button.pathParam}`)}>
                    {width > 500 ? LanguageConfig[lang].button.lgLabel : LanguageConfig[lang].button.smLabel}
                </Button>
            </div>
            <Row className="justify-content-md-center">
                <Col className="d-flex justify-content-md-center">
                    <Image className="w-50" src={logo2} />
                </Col>
            </Row>
            <Row lg="2" md="2" sm="1">
                {[...Array(7).keys()].map(idx => (
                    <Col sm key={idx}>
                        <Image fluid
                            src={require(`assets/menu-${imgPrefix}/menu-modry-mlin-${imgPrefix}_Page_${idx + 2}.jpg`)}/>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Menu;