import { useState } from 'react';
import useWindowDimensions from '../../WindowSize';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import './Menu.css';

import logo2 from "assets/mlyn_logo2.jpg";

import menuPol1 from "assets/menu-pol/menu-modry-mlin-pol_Page_2.jpg";
import menuPol2 from "assets/menu-pol/menu-modry-mlin-pol_Page_3.jpg";
import menuPol3 from "assets/menu-pol/menu-modry-mlin-pol_Page_4.jpg";
import menuPol4 from "assets/menu-pol/menu-modry-mlin-pol_Page_5.jpg";
import menuPol5 from "assets/menu-pol/menu-modry-mlin-pol_Page_6.jpg";
import menuPol6 from "assets/menu-pol/menu-modry-mlin-pol_Page_7.jpg";
import menuPol7 from "assets/menu-pol/menu-modry-mlin-pol_Page_8.jpg";

import menuEng1 from "assets/menu-ang/menu-modry-mlin-ang_Page_2.jpg";
import menuEng2 from "assets/menu-ang/menu-modry-mlin-ang_Page_3.jpg";
import menuEng3 from "assets/menu-ang/menu-modry-mlin-ang_Page_4.jpg";
import menuEng4 from "assets/menu-ang/menu-modry-mlin-ang_Page_5.jpg";
import menuEng5 from "assets/menu-ang/menu-modry-mlin-ang_Page_6.jpg";
import menuEng6 from "assets/menu-ang/menu-modry-mlin-ang_Page_7.jpg";
import menuEng7 from "assets/menu-ang/menu-modry-mlin-ang_Page_8.jpg";

const MENU_POL = [ [menuPol1, menuPol2], [menuPol3, menuPol4], [menuPol5, menuPol6], [menuPol7]];
const MENU_ENG = [ [menuEng1, menuEng2], [menuEng3, menuEng4], [menuEng5, menuEng6], [menuEng7]];

const Menu = () => {
    const { width } = useWindowDimensions();
    const [engMenu, setEngMenu] = useState(false);

    const text = engMenu ? (width > 500 ? "Zmień język 🇵🇱" : "🇵🇱") : (width > 500 ? "Change language 🇬🇧" : "🇬🇧");

    return (
        <Container className="menu">
            <div className="lang-button">
                <Button variant="outline-secondary" onClick={() => setEngMenu(eng => !eng)}>
                    {text}
                </Button>
            </div>
            <Row className="justify-content-md-center">
                <Col className="header-row">
                    <Image src={logo2} width="50%" />
                </Col>
            </Row>
            {
                (engMenu ? MENU_ENG : MENU_POL).map(it => (
                    <Row key={it.toString()}>
                        <Col sm><Image src={it[0]} fluid /></Col>
                        <Col sm><Image src={it[1]} fluid /></Col>
                    </Row>
                ))
            }
        </Container>
    );
};

export default Menu;