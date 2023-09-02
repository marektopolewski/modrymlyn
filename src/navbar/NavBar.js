import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import useWindowDimensions from '../WindowSize';

import euIcon from '../assets/icons/eu.png'
import "./NavBar.css"

const ArpIcon = () => (
    <Image src={euIcon} className='arp-icon' title='EU funds'/>
);

const paths = [
    { lgLabel: "Strona główna", smLabel: "🏠", path: "/" },
    // { lgLabel: "🎄 Święta 🎅", smLabel: "🎄", path: "/christmas" },
    // { lgLabel: "Walentynki", smLabel: "❤️", path: "/valentines" },
    // { lgLabel: "Ukraina", smLabel: "🇺🇦", path: "/ukraine" },
    // { lgLabel: "Wilekanoc", smLabel: "🐣", path: "/easter" },
    { lgLabel: "Menu", smLabel: "🍽", path: "/menu" },
    { lgLabel: "Imprezy", smLabel: "📆", path: "/reservations" },
    { lgLabel: "Zdjęcia", smLabel: "📷", path: "/photos" },
    { lgLabel: "Unia Europejska", smLabel: <ArpIcon/>, path: "/arp" },
];

const CustomNavItem = ({ href, className, children }) => (
    <Nav.Item as='li' className={className} style={{ backgroundColor:'aliceblue' }}>
        <Nav.Link href={href} eventKey={href}>{children}</Nav.Link>
    </Nav.Item>
);

const FlexibleTitleItem = ({ smLabel, lgLabel }) => {
    const { width } = useWindowDimensions();
    const swapWidth = paths.length * 160;

    if (width < swapWidth)
        return smLabel;

    if (width < swapWidth + 200 && lgLabel === "Unia Europejska")
        lgLabel = "UE";

    return (
        <Container> 
            <Row>
                <Col>
                    {smLabel}
                </Col>
            </Row>
            <Row>
                <span className='flex-title-item-text'>{lgLabel}</span>
            </Row>
        </Container>
    );
};

export default function Navbar() {
    return (
        <Container>
            <Nav fill variant="tabs" as="ul" defaultActiveKey="/" activeKey={window.location.pathname}>
                {paths.map(({lgLabel, smLabel, path}) => (
                    <CustomNavItem key={path} href={path} className={path === "/arp" ? "arp-link" : ""}>
                        <FlexibleTitleItem smLabel={smLabel} lgLabel={lgLabel}/>
                    </CustomNavItem>
                ))}
            </Nav>
        </Container>
    );
};
