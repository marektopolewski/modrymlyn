import React from 'react';
import { SocialIcon } from 'react-social-icons';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import logo from "../assets/mlyn_logo.jpg";
import PigeonMap from './MapContainer';

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
                    <Col md="auto" style={{ textAlign:'center' }}>
                        <Image src={logo} style={{ height: '10rem' }} fluid />
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    </Container>

    <Container>
        <Row className="justify-content-md-center">
            <Col><PigeonMap /></Col>
            <Col>

            </Col>
        </Row>
    </Container>

    <div className="footer">
        <Container>
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
    </div>
    </>
);

export default Home;
