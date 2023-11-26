import React, { useEffect, useState } from 'react';
import { SocialIcon } from 'react-social-icons';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Spinner from 'react-bootstrap/Spinner';

import TextWithBackground from '../../components/TextWithBackground';
import Container from '../../components/Container';

import PigeonMap from './MapContainer';
import logo from "assets/mlyn_logo.jpg";
import exterior from "assets/photos/photo-7.jpeg";
import interior from "assets/photos/photo-6.jpeg";
import pfr from "assets/pfr.jpg";
import arp from "assets/arp.jpg";
import arp2 from "assets/arp2.jpg";

import styles from './Home.module.css';

const SocialLink = ({ url, network }) => (
    <Col style={{ marginBottom:'1rem' }}>
        <SocialIcon url={url} network={network}/>
    </Col>
);

const Map = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const loadTimer = setTimeout(() => setLoading(false), 201);
        return () => clearTimeout(loadTimer);
    }, [setLoading]);
    if (loading)
        return (
        <TextWithBackground className={[styles['map-placeholder']]}>
            <Spinner/>
        </TextWithBackground>
    )
    return <PigeonMap height={300}/>;
};

const Home = () => (
    <Container>
        <TextWithBackground>
            <Container>
                <Row>
                    <Col>
                        <h1 className="mt-3">Modry Młyn</h1>
                        <h5 className={styles.subtitle}>Tradycyjna kuchnia kaszubska w nowoczesnym wydaniu.</h5>
                        <h5 className={styles.subsubtitle}>ul. Mickewicza 19A, Rumia</h5>
                    </Col>
                    <Col md="auto">
                        <Image src={logo} className={styles.logo} />
                    </Col>
                </Row>
            </Container>
        </TextWithBackground>

        <Row className={`justify-content-center ${styles["content-row"]}`}>
            <Col className={styles["content-col"]} xs="auto" sm="auto" md="auto" lg={4}>
                <Image src={exterior} className={styles["content-image"]} />
            </Col>
            <Col className={styles["content-col"]} xs="auto" sm="auto" md="auto" lg={4}>
                <Image src={interior} className={styles["content-image"]} />
            </Col>
            <Col className={styles["content-col"]} sm={12} md={8} lg={4}>
                <Map/>
            </Col>
        </Row>

        <Row className="justify-content-center">
            <Col className={styles["content-col"]} xs="auto" sm="auto" md="auto" lg="auto">
                <Image src={pfr} className={styles["funding-image"]} />
            </Col>
            <Col xs="auto" sm="auto" md="auto" lg="auto">
                <a href="/arp">
                    <Image src={arp} className={styles["funding-image"]} />
                </a>
            </Col>
            <Col xs="auto" sm="auto" md="auto" lg="auto">
                <a href="/arp">
                    <Image src={arp2} className={styles["funding-image"]} />
                </a>
            </Col>
        </Row>

        <TextWithBackground>
            <Row>
                <Col className={styles["content-col"]}>
                    <Row><Col className={styles["phone-header"]}>Zadzwoń do nas:</Col></Row>
                    <Row><Col className={styles["phone-number"]}>(+48) 733 314 441</Col></Row>
                </Col>
                <Col sm className={styles["content-col"]}>
                    <Row>
                        <SocialLink url="https://www.facebook.com/modrymlyn.rumia"/>
                        <SocialLink url="https://www.instagram.com/modrymlyn.rumia"/>
                        <SocialLink url="https://goo.gl/maps/Te9WZqxWGadQH34N7" network="google"/>
                        <SocialLink url="mailto:biuro@mlynmodry.pl"/>
                    </Row>
                </Col>
            </Row>
        </TextWithBackground>
    </Container>
);

export default Home;
