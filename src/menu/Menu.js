import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import logo2 from "../assets/mlyn_logo2.jpg"; 
import menu1 from "../assets/MenuModriMlin_dodruku-1.jpg";
import menu2 from "../assets/MenuModriMlin_dodruku-2.jpg";
import menu3 from "../assets/MenuModriMlin_dodruku-3.jpg";
import menu4 from "../assets/MenuModriMlin_dodruku-4.jpg";
import menu5 from "../assets/MenuModriMlin_dodruku-5.jpg";
import menu6 from "../assets/MenuModriMlin_dodruku-6.jpg";
import menu7 from "../assets/MenuModriMlin_dodruku-7.jpg";
import alko from "../assets/alko.jpg";

import './Menu.css';

const Menu = () => (
    <Container className="menu">
        <Row className="justify-content-md-center">
            <Col className="header-row">
                <Image src={logo2} width="50%" />
            </Col>
        </Row>
        <Row>
            <Col sm><Image src={menu1} fluid /></Col>
            <Col sm><Image src={menu2} fluid /></Col>
        </Row>
        <Row>
            <Col sm><Image src={menu3} fluid /></Col>
            <Col sm><Image src={menu4} fluid /></Col>
        </Row>
        <Row>
            <Col sm><Image src={menu5} fluid /></Col>
            <Col sm><Image src={menu6} fluid /></Col>
        </Row>
        <Row>
            <Col sm><Image src={menu7} fluid /></Col>
            <Col sm><Image src={alko} fluid /></Col>
        </Row>
    </Container>
)

export default Menu;