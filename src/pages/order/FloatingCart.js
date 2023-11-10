import { useCallback, useRef, useState } from 'react';
import useLocalStorageState from 'use-local-storage-state';
import useClickOutside from 'hooks/clickoutside';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import styles from './FloatingCart.module.css';


const SmallCart = ({ onClick }) => (
    <button
        className={styles['small-cart']}
        onClick={onClick}
    >
        🛒
    </button>
);

const LargeCartItem = ({ id, count, onClick }) => (
    <Row className={styles['large-cart-item']}>
        <Col><span>Item {id}</span></Col>
        <Col><span>x{count}</span></Col>
        <Col>
            <button onClick={(e) => {
                onClick(id);
                e.stopPropagation();
            }}>
                🗑️
            </button>
        </Col>
    </Row>

);

const LargeCart = ({ onClick }) => {
    const largeCartRef = useRef(null);
    useClickOutside(largeCartRef, onClick);

    const [cart, setCart] = useLocalStorageState('cart', {});
    const deleteItem = useCallback((itemId) => {
        setCart((prevCart) => ({ ...prevCart, [itemId]: 0 }))
    }, [setCart]);

    const navigate = useNavigate();

    return (
        <div
            ref={largeCartRef}
            className={styles['large-cart']}
        >
            <div className={styles['large-cart-header']}>
                <span>⏤ Twój koszyk ⏤</span>
                <Button
                    size='sm'
                    onClick={() => navigate("/order-checkout")}
                >
                    Przejdź dalej
                </Button>
            </div>
            <div className={styles['large-cart-items']}>
                {Object.keys(cart)
                    .filter((itemId) => cart[itemId] > 0)
                    .map((itemId) => (
                        <LargeCartItem
                            key={itemId}
                            id={itemId}
                            count={cart[itemId]}
                            onClick={deleteItem}
                        />
                    )
                )}
            </div>
        </div>
    );
};

const FloatingCart = () => {
    const [preview, setPreview] = useState(false);
    return (
        <div className={styles['wrapper']}>
            <div className={styles['container']}>
                {!preview && <SmallCart onClick={() => setPreview(true)}/>}
                {preview && <LargeCart onClick={() => setPreview(false)}/>}
            </div>
        </div>
    );
};

export default FloatingCart;
