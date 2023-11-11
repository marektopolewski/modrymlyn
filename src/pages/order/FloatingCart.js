import useLocalStorageState from 'use-local-storage-state';
import { useNavigate } from 'react-router-dom';

import CartItemCount from './CartItemCount';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';

import { ReactComponent as CartLogo } from 'assets/icons/cart.svg';
import styles from './FloatingCart.module.css';

import OrderData from './order-data.json'


const getTotalItemCount = (cart) => {
    return Object.keys(cart || {}).reduce(
        (acc, itemId) => acc + cart[itemId],
        0,
    );
};

const getTotalItemValue = (cart) => {
    return getCartItems(cart).reduce(
        (acc, itemId) => acc + cart[itemId] * getOrderItem(itemId).price,
        0,
    ).toFixed(2);
};

const getCartItems = (cart) => {
    return Object.keys(cart || {}).filter(itemId => cart[itemId] > 0);
};

const getOrderItem = (itemId) => {
    for (const sectionIt in OrderData) {
        for (const itemIt in OrderData[sectionIt].items) {
            if (OrderData[sectionIt].items[itemIt].id === itemId)
                return OrderData[sectionIt].items[itemIt];
        }
    }
    return undefined;
};

const CartButton = ({ onClick }) => {
    const [cart,] = useLocalStorageState('cart', {});
    return (
        <button
            className={styles['cart-button']}
            onClick={onClick}
        >
            <div className={styles['cart-button-row']}>
                <CartLogo/>
                <span>Koszyk</span>
                <div className={styles['cart-button-count']}>
                    {getTotalItemCount(cart)}
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
            {(count * item.price).toFixed(2)} zł
        </Col>
    </Row>
);

const CartModalEmpty = () => (
    <p className={styles['cart-modal-empty']}>Trochę tu pusto 🤔</p>
);

const CartModal = (props) => {
    const navigate = useNavigate();
    const [cart, setCart] = useLocalStorageState('cart', {});
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
                    getTotalItemCount(cart) === 0 ?
                        <CartModalEmpty/>
                    :
                        getCartItems(cart).map(itemId => (
                            <CartModalItem
                                key={itemId}
                                item={getOrderItem(itemId)}
                                count={cart[itemId]}
                                updateCount={count => setCart(prevCart => ({ ...prevCart, [itemId]: count }))}
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
                        disabled={getTotalItemCount(cart) === 0}
                        onClick={() => navigate('/order-checkout')}
                    >
                            Do kasy ({getTotalItemValue(cart)} zł)
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
