import React from 'react';
import useWindowDimensions from 'hooks/windowsize';

import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

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
    { lgLabel: "Oferta", smLabel: "📆", path: "/services" },
    { lgLabel: "Zdjęcia", smLabel: "📷", path: "/photos" },
    { lgLabel: "Unia Europejska", smLabel: <ArpIcon/>, path: "/arp" },
];

const CustomNavItem = ({ href, className, children }) => (
    <Nav.Item as='div' className={className}>
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
        <Container className="nav-bar-container">
            <Nav as="div" fill variant="tabs" defaultActiveKey="/" activeKey={window.location.pathname}>
                {paths.map(({lgLabel, smLabel, path}) => (
                    <CustomNavItem key={path} href={path} className={path === "/arp" ? "arp-link" : ""}>
                        <FlexibleTitleItem smLabel={smLabel} lgLabel={lgLabel}/>
                    </CustomNavItem>
                ))}
            </Nav>
        </Container>
    );
};
