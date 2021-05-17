import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import "./NavBar.css"

export default class Navbar extends React.Component {

    render() {
        return (
            <Container>
            <Nav fill variant="tabs" as="ul" defaultActiveKey="/" activeKey={window.location.pathname}>
                    <Nav.Item as="li">
                        <Nav.Link href="/" eventKey="/">Strona główna</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link href="/menu" eventKey="/menu">Menu</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link href="/photos" eventKey="/photos">Zdjęcia</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        );
    }
}
