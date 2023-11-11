import { useCallback, useState } from 'react';
import useLocalStorageState from 'use-local-storage-state';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { ReactComponent as Bin } from 'assets/icons/bin.svg';
import styles from './FloatingCart.module.css';


const _clamp = (count) => {
    return Math.max(Math.min(count, 99), 0);
};

const CartItemCount = ({ itemId }) => {
    const [cart, setCart] = useLocalStorageState('cart', {});
    const cartCount = (cart && itemId in cart) ? cart[itemId] : 0;
    const [inputCount, setInputCount] = useState(cartCount);

    const updateCartCount = useCallback(newCount => {
        setCart(prevCart => ({ ...prevCart, [itemId]: _clamp(newCount) }));
    }, [itemId, setCart]);

    const updateInputCount = useCallback(newCount => {
        setInputCount(_clamp(newCount));
    }, [setInputCount]);

    const updateAllCounts = useCallback(newCount => {
        updateCartCount(newCount);
        updateInputCount(newCount);
    }, [updateCartCount, updateInputCount]);

    return (
        <div className={styles['cart-modal-item-count-wrapper']}>
            <div className={styles['cart-modal-item-count']}>
                <Button
                    variant='secondary' 
                    onClick={() => updateAllCounts(cartCount - 1)}
                >
                    -
                </Button>
                <Form.Control
                    type='number' size='2' maxLength='2'
                    value={inputCount}
                    onChange={e => updateInputCount(e.target.value)}
                    onBlur={e => updateAllCounts(e.target.value)}
                />
                <Button
                    variant='secondary'
                    onClick={() => updateAllCounts(cartCount + 1)}
                >
                    +
                </Button>
            </div>
            <Button
                variant="danger"
                disabled={cartCount === 0}
                onClick={() => updateAllCounts(0)}
            >
                <Bin/>
            </Button>
        </div>
    );
};

export default CartItemCount;
