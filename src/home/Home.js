import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import logo from "../assets/mlyn_logo.jpg";

import './Home.css';

const Home = () => (
    <>
    <Container className="header">
        <Jumbotron>
            <Container>
                <Row>
                    <Col>
                        <h1>Modry Młyn</h1>
                        <h5 className="subtitle">Tradycyjna kuchnia kaszubska w nowoczesnym wydaniu.</h5>
                        <h5 className="subsubtitle">ul. Mickewicza 19A, Rumia</h5>
                    </Col>
                    <Col md="auto">
                        <Image src={logo} style={{ height: '10rem' }} fluid />
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    </Container>
    </>
);

export default Home;
