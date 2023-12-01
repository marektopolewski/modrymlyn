import { Button, Nav } from 'react-bootstrap';

import Container from 'components/Container';
import TextWithBackground from 'components/TextWithBackground';

import styles from './OrderSuccess.module.css';


const BackToMainButton = (props) => (
    <Button
        className={styles['back-to-main-button']}
        variant='secondary'
    >
        {props.children}
    </Button>
);

const OrderSuccess = () => {
    return (
        <Container className={styles['order-success-wrapper']}>
            <TextWithBackground>
                <h2>Gotowe ✅</h2>
                <br/>
                <p>Twoje zamówienie zostało wysłane do restauracji.</p>
                <p>
                    Na Twój email wysłaliśmy email z potwierdzeniem i <b>dalszymi
                    krokami</b>. 
                </p>
                <br/>
                <p>
                    <small>
                        W razie pytań skontaktuj się z nami
                        telefonicznie <a href="tel:+48733314441">(+48) 733 314 441</a> lub
                        mailowo <a href="mailto:biuro@mlynmodry.pl">biuro@mlynmodry.pl</a>
                    </small>
                </p>
                <br/>
                <Nav.Link as={BackToMainButton}>
                    Strona główna
                </Nav.Link>
            </TextWithBackground>
        </Container>
    );
}

export default OrderSuccess;
