import React from 'react';
import { SocialIcon } from 'react-social-icons';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import PigeonMap from './MapContainer';
import logo from "../assets/mlyn_logo.jpg";
import exterior from "../assets/photo-7.jpeg";
import interior from "../assets/photo-6.jpeg";
import './Home.css';

const contentHeight = 300;

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
                    <Col md="auto" style={{ textAlign:'center' }}>
                        <Image src={logo} style={{ height: '10rem' }} fluid />
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    </Container>

    <Container>
        <Row className="justify-content-center">
            <Col className="content-col" xs="auto" sm="auto" md="auto" lg={4}>
                <Image src={exterior} style={{ height: contentHeight }} fluid />
            </Col>
            <Col className="content-col" xs="auto" sm="auto" md="auto" lg={4}>
                <Image src={interior} style={{ height: contentHeight }} fluid />
            </Col>
            <Col className="content-col" sm={12} md={8} lg={4}>
                <PigeonMap height={contentHeight} />
            </Col>
        </Row>
    </Container>

    <Container style={{ marginTop:'2rem' }}>
        <Jumbotron>
            <Row>
                <Col style={{ textAlign:'center' }}>
                    <Row><Col className="phone-header">Zadzwoń do nas:</Col></Row>
                    <Row><Col className="phone-number">(+48) 733 314 441</Col></Row>
                </Col>
                <Col sm>
                    <Row style={{ textAlign:'center' }}>
                        <Col><SocialIcon url="https://www.facebook.com/modrymlyn.rumia"/></Col>
                        <Col><SocialIcon url="https://www.instagram.com/modrymlyn.rumia"/></Col>
                        <Col><SocialIcon url="https://goo.gl/maps/Te9WZqxWGadQH34N7" network="google"/></Col>
                    </Row>
                </Col>
            </Row>
        </Jumbotron>
    </Container>
    </>
);

export default Home;
