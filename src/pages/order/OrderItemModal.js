import { useCallback, useRef, useState } from 'react';

import { useDispatch } from 'react-redux';
import { setCartCount, OrderItemsMap, CATERING_LAUNCHED } from 'services/Cart';

import LazyImage from 'components/LazyImage';
import CartItemCount from './CartItemCount';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import styles from './OrderItemModal.module.css';


const OrderItemModalContent = ({ itemId, onBasket, onHide }) => {
    const item = OrderItemsMap[itemId];

    const [isItemCountDirty, setIsItemCountDirty] = useState(false);
    const itemCountRef = useRef();

    const dispatch = useDispatch();
    const onConfirm = useCallback(() => {
        dispatch(setCartCount(itemId, itemCountRef.current.value));
        onBasket();
    }, [itemId, itemCountRef, dispatch, onBasket]);

    return (
        <Modal.Body className={styles['order-modal-body']}>
            <LazyImage
                className={styles['order-modal-img']}
                text={"Image placeholder"}
                src={require(`assets/catering/${item.img}.jpg`)}
            />
            <div className={styles['order-modal-details']}>
                <Modal.Title>{item.name}</Modal.Title>
                <p>{item.desc}</p>
                {CATERING_LAUNCHED && <CartItemCount
                    itemId={item.id}
                    ref={itemCountRef}
                    captureChange={() => setIsItemCountDirty(true)}
                />}
                <div className={styles['order-modal-buttons']}>
                    <Button
                        size='lg'
                        variant='outline-primary'
                        onClick={onHide}
                    >
                        Powrót
                    </Button>
                    {CATERING_LAUNCHED && <Button
                        size='lg'
                        disabled={!isItemCountDirty}
                        onClick={onConfirm}
                    >
                        Dodaj
                    </Button>}
                </div>
            </div>
        </Modal.Body>
    );

};

const OrderItemModal = ({itemId, onBasket, ...props}) => (
    <Modal
        {...props}
        size='lg'
        centered
    >
        {props.show &&
            <OrderItemModalContent
                itemId={itemId}
                onBasket={onBasket}
                onHide={props.onHide}
            />
        }
    </Modal>
);

export default OrderItemModal;
