import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';

import Container from 'components/Container';
import LazyImage from 'components/LazyImage'

import styles from './Menu.module.css';

const MenuItemModal = ({ data, onHide }) => (
    <Modal
        className={styles['modal-container']}
        size='lg'
        centered
        show={data !== undefined}
        onHide={onHide}
    >
        <Modal.Header closeButton>
            <Col>
                <Row>
                    <Modal.Title>
                        {data?.name}
                        {data?.vege && <span className={styles['vege']}> Wege</span>}
                    </Modal.Title>
                </Row>
                <Row>
                    <span>{data?.desc}</span>
                </Row>
            </Col>
        </Modal.Header>
        <Modal.Body>
            <Container className={styles['modal-body']}>
                <LazyImage
                    className={styles['modal-img']}
                    text={data?.name}
                    src={data && require(`assets/menu/${data.img}.jpeg`)}
                />
            </Container>
        </Modal.Body>
    </Modal>
);

export default MenuItemModal;
