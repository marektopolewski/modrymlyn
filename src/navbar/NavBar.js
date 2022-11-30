import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import useWindowDimensions from '../WindowSize';

import euIcon from '../assets/icons/eu.png'
import "./NavBar.css"

const paths = [
    { lgLabel: "Strona główna", smLabel: "🏠", path: "/" },
    { lgLabel: "🎄 Święta 🎅", smLabel: "🎄", path: "/christmas" },
    // { lgLabel: "Walentynki", smLabel: "❤️", path: "/valentines" },
    // { lgLabel: "Ukraina", smLabel: "🇺🇦", path: "/ukraine" },
    // { lgLabel: "Wilekanoc", smLabel: "🐣", path: "/easter" },
    { lgLabel: "Menu", smLabel: "🍽", path: "/menu" },
    { lgLabel: "Rezerwacje", smLabel: "📆", path: "/reservations" },
    { lgLabel: "Zdjęcia", smLabel: "📷", path: "/photos" },
];

const CustomNavItem = ({ href, className, children }) => (
    <Nav.Item as='li' className={className} style={{ backgroundColor:'aliceblue' }}>
        <Nav.Link href={href} eventKey={href}>{children}</Nav.Link>
    </Nav.Item>
);

export default function Navbar() {
    const { width } = useWindowDimensions();
    const swapWidth = paths.length * 160;
    return (
        <Container>
            <Nav fill variant="tabs" as="ul" defaultActiveKey="/" activeKey={window.location.pathname}>
                {paths.map(({lgLabel, smLabel, path}) => (
                    <CustomNavItem key={path} href={path}>
                        {width < swapWidth ? smLabel : lgLabel}
                    </CustomNavItem>
                ))}
                <CustomNavItem href='/arp' className='arp-link'>
                    <Image src={euIcon} className='arp-icon' title='EU funds'/>
                </CustomNavItem>
            </Nav>
        </Container>
    );
};
