import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import useWindowDimensions from '../WindowSize';

import "./NavBar.css"

const paths = [
    { lgLabel: "Strona główna", smLabel: "🏠", path: "/" },
    // { lgLabel: "Święta", smLabel: "🎄", path: "/christmas" },
    { lgLabel: "Walentynki", smLabel: "❤️", path: "/valentines" },
    { lgLabel: "Menu", smLabel: "🍽", path: "/menu" },
    // { lgLabel: "Rezerwacja", smLabel: "📆", path: "/reserve" },
    { lgLabel: "Zdjęcia", smLabel: "📷", path: "/photos" },
];

export default function Navbar() {
    const { width } = useWindowDimensions();
    return (
        <Container>
            <Nav fill variant="tabs" as="ul" defaultActiveKey="/" activeKey={window.location.pathname}>
            {
                paths.map(({lgLabel, smLabel, path}) => {
                    return (
                        <Nav.Item as="li" style={{ backgroundColor:'aliceblue' }}>
                            <Nav.Link href={path} eventKey={path}>
                                {width < 500 ? smLabel : lgLabel}
                            </Nav.Link>
                        </Nav.Item>
                    );
                })
            }
            </Nav>
        </Container>
    );
};
