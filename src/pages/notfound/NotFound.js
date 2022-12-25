import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import {
    Col,
    Row,
    Spinner
} from "react-bootstrap";

import Container from "components/Container";
import TextWithBackground from "components/TextWithBackground";

import styles from './NotFound.module.css'

const useDelayedRedirect = (where, when) => {
    const history = useHistory();

    useEffect(() => {
        const timeout = setTimeout(() => {
            history.push(where);
        }, when);
        return () => {
            clearTimeout(timeout);
        };
    }, [history, where, when]);
};

const RedirectSpinner = () => (
    <Spinner animation="border" role="status">
        <span className="visually-hidden">Redirect...</span>
    </Spinner>
);

const NotFound = () => {
    useDelayedRedirect("/", 2500);
    return (
        <Container>
            <TextWithBackground>
                <Row className={styles.container}>
                    <Col xs="auto">
                        <h2>Hmmm 🧐</h2>
                        <p>Błędny adres, zaraz zostaniesz przekierowany...</p>
                    </Col>
                    <Col xs="auto">
                        <RedirectSpinner/>
                    </Col>
                </Row>         
            </TextWithBackground>
        </Container>
    );
};

export default NotFound;
