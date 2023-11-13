import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import useWindowDimensions from 'hooks/windowsize';

import { useSelector } from 'react-redux';
import { getCart, getCartCountTotal, getCartValueTotal, OrderItemsMap } from 'services/Cart';

import CartItemCount from './CartItemCount';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';

import { ReactComponent as CartLogo } from 'assets/icons/cart.svg';
import styles from './FloatingCart.module.css';


const CartButton = ({ shake, setShake, onClick }) => {
    const cartCountTotal = useSelector(getCartCountTotal);
    const animationRef = useRef(null);
    return (
        <CSSTransition
            nodeRef={animationRef}
            in={shake}
            timeout={200}
            classNames={{
                enterActive: styles['cart-anim-enter-active'],
                enterDone: styles['cart-anim-enter-done'],
                exitActive: styles['cart-anim-exit-active'],
                exitDone: styles['cart-anim-exit-done']
            }}
            onEntered={() => setShake(false)}  // automatically exit the animation
        >
            <button
                ref={animationRef}
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
        </CSSTransition>
    );
};

const CartModalItem = (props) => {
    const { width } = useWindowDimensions();
    if (width > 500)
        return <CartModalItemLg {...props}/>
    else
        return <CartModalItemSm {...props}/>
};

const CartModalItemLg = ({ item, count }) => (
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

const CartModalItemSm = ({ item, count }) => (
    <Col className={styles['cart-modal-item']}>
        <Row className={styles['cart-modal-item-sm-row']}>
            <Col>
                {item.name}
            </Col>
            <Col>
                ({(count * item.price).toFixed(2)}zł)
            </Col>
        </Row>
        <Row className={styles['cart-modal-item-sm-row']}>
            <Col>
                <CartItemCount itemId={item.id}/>
            </Col>
        </Row>
    </Col>
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

const FloatingCart = ({ modalShow, setModalShow, shake, setShake }) => (
    <>
    <CartButton shake={shake} setShake={setShake} onClick={() => setModalShow(true)} />
    <CartModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
);

export default FloatingCart;
