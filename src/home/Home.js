import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { useHistory } from 'react-router-dom';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import PigeonMap from './MapContainer';
import logo from "../assets/mlyn_logo.jpg";
import exterior from "../assets/photos/photo-7.jpeg";
import interior from "../assets/photos/photo-6.jpeg";
import pfr from "../assets/pfr.jpg";
import arp from "../assets/arp.jpg";
import './Home.css';

const contentHeight = 300;

const SocialLink = ({ url, network }) => (
    <Col style={{ marginBottom:'1rem' }}>
        <SocialIcon url={url} network={network}/>
    </Col>
);

const Home = () => {
    const history = useHistory();
    return (<>
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

    <Container style={{ marginTop: "40px" }}>
        <Row className="justify-content-center" style={{ gap: "20px" }}>
            <Col className="content-col" xs="auto" sm="auto" md="auto" lg="auto">
                <Image src={pfr} style={{ height: 200 }} fluid />
            </Col>
            <Col xs="auto" sm="auto" md="auto" lg="auto">
                <a href="/arp">
                    <Image src={arp} style={{ height: 200 }} fluid />
                </a>
            </Col>
        </Row>
    </Container>

    <Container style={{ marginTop:'2rem' }}>
        <Jumbotron>
            <Row style={{ marginBottom:'-1rem' }}>
                <Col style={{ textAlign:'center', marginBottom:'1rem' }}>
                    <Row><Col className="phone-header">Zadzwoń do nas:</Col></Row>
                    <Row><Col className="phone-number">(+48) 733 314 441</Col></Row>
                </Col>
                <Col sm>
                    <Row style={{ textAlign:'center' }}>
                        <SocialLink url="https://www.facebook.com/modrymlyn.rumia"/>
                        <SocialLink url="https://www.instagram.com/modrymlyn.rumia"/>
                        <SocialLink url="https://goo.gl/maps/Te9WZqxWGadQH34N7" network="google"/>
                        <SocialLink url="mailto:biuro@mlynmodry.pl"/>
                    </Row>
                </Col>
            </Row>
        </Jumbotron>
    </Container>
    </>)
};

export default Home;
