import LazyImage from 'components/LazyImage';
import CartItemCount from './CartItemCount';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import styles from './OrderItemModal.module.css';

import OrderData from './order-data.json'


const getOrderItem = (itemId) => {
    for (const sectionIt in OrderData) {
        for (const itemIt in OrderData[sectionIt].items) {
            if (OrderData[sectionIt].items[itemIt].id === itemId)
                return OrderData[sectionIt].items[itemIt];
        }
    }
    return undefined;
};

const OrderItemModalContent = ({ itemId, onBasket, onHide }) => {
    const item = getOrderItem(itemId);
    return (
        <Modal.Body className={styles['order-modal-body']}>
            <LazyImage
                className={styles['order-modal-img']}
                text={"Image placeholder"}
                src={require(`assets/menu/${"ciasto"}.jpeg`)}
            />
            <div className={styles['order-modal-details']}>
                <Modal.Title>{item.name}</Modal.Title>
                <p>{item.desc}</p>
                <CartItemCount itemId={item.id}/>
                <div className={styles['order-modal-buttons']}>
                    <Button
                        size='lg'
                        variant='outline-primary'
                        onClick={onHide}
                    >
                        Powrót
                    </Button>
                    <Button size='lg' onClick={onBasket}>Koszyk</Button>
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
