import React from 'react';
import { NavLink } from 'react-router-dom'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import EuIcon from '../assets/icons/eu.png';
import MlynNavIcon from '../assets/nav_logo.png';

import styles from "./NavBar.module.css";


const ArpIcon = () => (
    <Image
        className={styles['arp-icon']} 
        src={EuIcon}
        title='EU funds'
    />
);

const paths = [
    // { lgLabel: "Sylwester", smLabel: "🥳", path: "/newyear" },
    // { lgLabel: "Ukraina", smLabel: "🇺🇦", path: "/ukraine" },
    // { lgLabel: "Wilekanoc", smLabel: "🐣", path: "/easter" },
    // { lgLabel: "Święta", smLabel: "🎅", path: "/christmas" },
    // { lgLabel: "Menu", smLabel: "🍽", path: "/menu" },
    // { lgLabel: "Walentynki", smLabel: "❤️", path: "/valentines" },
    { lgLabel: "Lato", smLabel: "☀️", path: "/lato" },
    { lgLabel: "Oferta", smLabel: "📆", path: "/services" },
    { lgLabel: "Zdjęcia", smLabel: "📷", path: "/photos" },
];

const MyNavbarLink = ({ path, smLabel, lgLabel }) => (
    <Nav.Link
        as={NavLink}
        to={path}
        className={styles[path.replace("/", "") + "-link"]}
        end
        eventKey={path}
    >
        <div className={styles["nav-item-label"]}>
            <span>{smLabel}</span>
            <span>{lgLabel}</span>
        </div>
    </Nav.Link>
);

const ArpNavbarLink = () => (
    <Nav.Link
        className={styles["arp-link"]}
        as={NavLink} to="/arp" end
        eventKey={"/arp"}
    >
        <div>
            <ArpIcon/>
            <span className={styles["arp-label-lg"]}>Unia<br/>Europejska</span>
            <span className={styles["arp-label-sm"]}>UE</span>
        </div>
    </Nav.Link>

);

const MyNavbar = () => (
    <Navbar
        collapseOnSelect
        expand="md"
        className={styles["nav-container"]}
    >
        <Nav>
            <Container>
                <Navbar.Brand>
                    <Nav.Link as={NavLink} to="/" eventKey={"/"} end>
                        <Image
                            className={styles["nav-logo"]}
                            src={MlynNavIcon}
                            title='Modry Młyn: Home'
                        />
                    </Nav.Link>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>

                <Navbar.Collapse
                    id="responsive-navbar-nav"
                    className={styles["nav-items"]}
                >
                        {paths.map((pathProps) => (
                            <MyNavbarLink
                                key={pathProps["path"]}
                                {...pathProps}
                            />
                        ))}
                        <ArpNavbarLink/>
                </Navbar.Collapse>
            </Container>
        </Nav>
    </Navbar>
);

export default MyNavbar;
