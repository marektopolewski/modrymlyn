import { useCallback, useEffect, useState } from 'react';
import useLocalStorageState from 'use-local-storage-state'
import usePageBottom from 'hooks/pagebottom';
import { useNavigate } from 'react-router-dom';

import Container from 'components/Container';
import FloatingCart from './FloatingCart';
import TextWithBackground from 'components/TextWithBackground';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';

import styles from './Order.module.css';
import OrderData from './order-data.json'


const MIN_ITEM_COUNT = 0
const MAX_ITEM_COUNT = 20


const cartIsEmpty = (cart) => {
    if (!cart)
        return true;
    for (const itemId in cart) {
        if (cart[itemId] && cart[itemId] !== 0)
            return false;
    }
    return true;
};

const OrdersLoading = () => (
    <div className={styles['orders-loading']}>
        <span>Ładujemy pyszności...</span>
        <Spinner/>
    </div>
);

const OrderItem = ({ item, count, cartCallback }) => (
    <Row className={styles['item-wrapper']}>
        <Col xs='3'>
            <span>{item.name}</span>
        </Col>
        <Col>
            <span className={styles['item-desc']}>{item.desc}</span>
        </Col>
        <Col xs='2'>
            <span>{item.price}zł</span>
        </Col>
        <Col>
            <div className={styles['item-counter']}>
                <Button
                    size='sm'
                    variant='secondary'
                    disabled={count <= MIN_ITEM_COUNT}
                    onClick={() => cartCallback(item.id, count - 1)}
                >
                    -
                </Button>
                <div className={styles['item-count']}>
                    <span className={count === 0 ? styles['item-count-0'] : ''}>{count}</span>
                </div>
                <Button
                    size='sm'
                    variant='secondary'
                    disabled={count >= MAX_ITEM_COUNT}
                    onClick={() => cartCallback(item.id, count + 1)}
                >
                    +
                </Button>
            </div>
        </Col>
    </Row>
);

const OrderSection = ({ name, items }) => {
    const [cart, setCart] = useLocalStorageState('cart', {});
    const changeItemCount = useCallback((itemId, count) => {
        if (count < MIN_ITEM_COUNT || count > MAX_ITEM_COUNT)
            return;
        setCart((prevCart) => ({ ...prevCart, [itemId]: count }));
    }, [setCart]);
    return (
        <div className={styles['section-wrapper']}>
            <h4>⏤ {name} ⏤</h4>
            {items.map((item) => (
                <OrderItem
                    key={item.id}
                    item={item}
                    count={Object.keys(cart || {}).includes(item.id) ? cart[item.id] :  0}
                    cartCallback={changeItemCount}
                />
            ))}
        </div>
    );
};

const Order = () => {
    useEffect(() => {
        const fetchData = async () => {
            await new Promise(resolve => setTimeout(resolve, 1000));
            const data = OrderData;
            setOrderData(data);
            setIsLoading(false);
        };
        fetchData();
    }, []);

    const [orderData, setOrderData] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);
    const [canContinue, setCanContinue] = useState(false);

    const [cart,] = useLocalStorageState('cart', {});
    useEffect(() => setCanContinue(!cartIsEmpty(cart)), [cart]);

    const isPageBottom = usePageBottom(100);

    const navigate = useNavigate();

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
            {isLoading && <OrdersLoading/>}
            {!isLoading && orderData.length > 0 && 
                <Col>
                    {orderData.map((orderSection, idx) => (
                        <OrderSection
                            key={idx}
                            name={orderSection.name}
                            items={orderSection.items}
                        />
                    ))}
                </Col>
            }
        </TextWithBackground>
    
        <TextWithBackground>
            <Button
                size='lg'
                disabled={!canContinue}
                onClick={() => navigate("/order-checkout")}
            >
                Przejdź dalej
            </Button>
        </TextWithBackground>
        </Container>

        {canContinue && !isPageBottom && <FloatingCart/>}
        </>
    );
}

export default Order;