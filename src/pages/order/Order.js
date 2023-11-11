import { useCallback, useState } from 'react';
import useLocalStorageState from 'use-local-storage-state';

import Container from 'components/Container';
import FloatingCart from './FloatingCart';
import LazyImage from 'components/LazyImage';
import OrderItemModal from './OrderItemModal';
import TextWithBackground from 'components/TextWithBackground';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { ReactComponent as CartLogo } from 'assets/icons/cart.svg';
import styles from './Order.module.css';

import OrderData from './order-data.json'

const getCartItemCount = (cart, itemId) => {
    return Object.keys(cart || {}).includes(itemId) ? cart[itemId] : 0
};

const OrderItem = ({ item, count, onClick }) => (
    <Row className={styles['order-item-wrapper']}>
        <Col>
            <LazyImage
                className={styles['order-item-img']}
                text={"Image placeholder"}
                src={require(`assets/menu/${"ciasto"}_s.jpeg`)}
            />
        </Col>
        <Col>
            <span>{item.name}</span>
        </Col>
        <Col className={styles['order-item-desc']}>
            <span>{item.desc}</span>
        </Col>
        <Col>
            <Button
                className={styles['order-item-button']}
                onClick={() => onClick(item.id)}
            >
                <div className={styles['order-item-button-content']}>
                    <CartLogo/>
                    <span>{item.price.toFixed(2)} zł</span>
                </div>
                {!!count && <div className={styles['order-item-button-count']}>{count}</div>}
            </Button>
        </Col>
    </Row>
);

const OrderSection = ({ name, items, onItemClick }) => {
    const [cart,] = useLocalStorageState('cart', {});
    return (
        <div className={styles['section-wrapper']}>
            <h4>⏤ {name} ⏤</h4>
            {items.map((item) => (
                <OrderItem
                    key={item.id}
                    item={item}
                    count={getCartItemCount(cart, item.id)}
                    onClick={onItemClick}
                />
            ))}
        </div>
    );
};



const Order = () => {
    const [basketPreview, setBasketPreview] = useState(false);
    const [itemPreview, setItemPreview] = useState({});
    const previewOrder = useCallback((id) => {
        setItemPreview({ show: true, id: id })
    }, []);
    return (
        <>
        <Container>
        <TextWithBackground>
            <h3>
                📆 Garmaż Modrego Młyna 🍽
            </h3>
            <br/>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
        </TextWithBackground>

        <TextWithBackground>
            <Col>
                {OrderData.map((orderSection, idx) => (
                    <OrderSection
                        key={idx}
                        name={orderSection.name}
                        items={orderSection.items}
                        onItemClick={previewOrder}
                    />
                ))}
            </Col>
        </TextWithBackground>
        </Container>
        <OrderItemModal
            show={itemPreview?.show}
            onHide={() => setItemPreview({})}
            onBasket={() => {
                setItemPreview({});
                setBasketPreview(true);
            }}
            itemId={itemPreview?.id}
        />
        <FloatingCart modalShow={basketPreview} setModalShow={setBasketPreview}/>
        </>
    );
}

export default Order;