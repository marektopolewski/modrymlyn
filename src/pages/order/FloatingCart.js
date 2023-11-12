import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { getCart, getCartCountTotal, getCartValueTotal, OrderItemsMap } from 'services/Cart';

import CartItemCount from './CartItemCount';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';

import { ReactComponent as CartLogo } from 'assets/icons/cart.svg';
import styles from './FloatingCart.module.css';


const CartButton = ({ onClick }) => {
    const cartCountTotal = useSelector(getCartCountTotal);
    return (
        <button
            className={styles['cart-button']}
            onClick={onClick}
        >
            <div className={styles['cart-button-row']}>
                <CartLogo/>
                <span>Koszyk</span>
                <div className={styles['cart-button-count']}>
                    {cartCountTotal}
                </div>
            </div>
        </button>
    );
};

const CartModalItem = ({ item, count }) => (
    <Row className={styles['cart-modal-item']}>
        <Col>
            {item.name}
        </Col>
        <Col>
            <CartItemCount itemId={item.id}/>
        </Col>
        <Col>
            ({(count * item.price).toFixed(2)}zł)
        </Col>
    </Row>
);

const CartModalEmpty = () => (
    <p className={styles['cart-modal-empty']}>Trochę tu pusto 🤔</p>
);

const CartModal = (props) => {
    const navigate = useNavigate();
    const cart = useSelector(getCart);
    const cartCountTotal = useSelector(getCartCountTotal);
    const cartValueTotal = useSelector(getCartValueTotal);
    return (
        <Modal
            {...props}
            size='lg'
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Twój koszyk</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    cartCountTotal === 0 ?
                        <CartModalEmpty/>
                    :
                        Object.keys(cart).map(itemId => (
                            <CartModalItem
                                key={itemId}
                                item={OrderItemsMap[itemId]}
                                count={cart[itemId]}
                            />
                        ))
                }
            </Modal.Body>
            <hr/>
            <Row className={styles['cart-modal-footer']}>
                <Col>
                    <Button
                        size='lg'
                        variant="outline-primary"
                        onClick={props.onHide}
                    >
                        Powrót
                    </Button>
                </Col>
                <Col>
                    <Button
                        size='lg'
                        disabled={cartCountTotal === 0}
                        onClick={() => navigate('/order-checkout')}
                    >
                            Do kasy
                            {' '}
                            <span className={styles['cart-modal-total']}>({cartValueTotal.toFixed(2)}zł)</span>
                    </Button>
                </Col>
            </Row>
        </Modal>
    );
};

const FloatingCart = ({ modalShow, setModalShow }) => (
    <>
    <CartButton onClick={() => setModalShow(true)} />
    <CartModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
);

export default FloatingCart;
