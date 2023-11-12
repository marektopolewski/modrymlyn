import { forwardRef, useCallback, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getCartCount, setCartCount, _clamp_count} from 'services/Cart';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { ReactComponent as Bin } from 'assets/icons/bin.svg';
import styles from './FloatingCart.module.css';


const CartItemCount = forwardRef((props, ref) => {

    const itemId = props.itemId;
    const drafting = !!props.drafting;

    const cartCount = useSelector(state => getCartCount(state, itemId));
    const [inputValue, setInputValue] = useState(cartCount);

    const dispatch = useDispatch();
    const safeDispatch = useCallback((...args) => {
        if (drafting)
            return;
        return dispatch(...args);
    }, [drafting, dispatch]);

    const onChange = useCallback((count) => {
        setInputValue(_clamp_count(count));
    }, [setInputValue]);

    const onBlur = useCallback((count) => {
        const newCount = _clamp_count(count);
        safeDispatch(setCartCount(itemId, newCount));
        setInputValue(newCount);
    }, [itemId, safeDispatch, setInputValue]);

    const onClick = useCallback((diff) => {
        const newCount = _clamp_count(inputValue + diff);
        safeDispatch(setCartCount(itemId, newCount));
        setInputValue(newCount);
    }, [itemId, inputValue, safeDispatch, setInputValue]);

    const onDeleteClick = useCallback(() => {
        safeDispatch(setCartCount(itemId, 0));
        setInputValue(0);
    }, [itemId, safeDispatch, setInputValue]);

    return (
        <div className={styles['cart-modal-item-count-wrapper']}>
            <div className={styles['cart-modal-item-count']}>
                <Button
                    variant='secondary'
                    onClick={() => onClick(-1)}
                >
                    -
                </Button>
                <Form.Control
                    ref={ref}
                    type='number' size='2' maxLength='2'
                    value={inputValue}
                    onChange={e => onChange(e.target.value)}
                    onBlur={e => onBlur(e.target.value)}
                />
                <Button
                    variant='secondary'
                    onClick={() => onClick(+1)}
                >
                    +
                </Button>
            </div>
            <Button
                variant="danger"
                disabled={inputValue === 0}
                onClick={onDeleteClick}
            >
                <Bin/>
            </Button>
        </div>
    );
});

export default CartItemCount;
