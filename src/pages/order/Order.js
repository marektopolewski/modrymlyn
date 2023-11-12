import { useCallback, useEffect, useState } from 'react';

import { Provider, useSelector } from 'react-redux';
import store, { getCartCount } from 'services/Cart';
import OrderData from 'services/order-data.json'

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
import usePageBottom from 'hooks/pagebottom';


const OrderItem = ({ item, onClick }) => {
    const cartCount = useSelector(state => getCartCount(state, item.id));
    return (
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
                    {!!cartCount && <div className={styles['order-item-button-count']}>{cartCount}</div>}
                </Button>
            </Col>
        </Row>
    );
};

const OrderSection = ({ name, items, onItemClick }) => (
    <div className={styles['section-wrapper']}>
        <h4>⏤ {name} ⏤</h4>
        {items.map((item) => (
            <OrderItem
                key={item.id}
                item={item}
                onClick={onItemClick}
            />
        ))}
    </div>
);

const Order = () => {
    const [basketPreview, setBasketPreview] = useState(false);
    const [basketShake, setBasketShake] = useState(false);
    const [itemPreview, setItemPreview] = useState({});
    const previewOrder = useCallback((id) => {
        setItemPreview({ show: true, id: id })
    }, []);

    const pageBottom = usePageBottom();
    useEffect(() => {
        if (pageBottom)
            setBasketShake(true);
    }, [pageBottom, setBasketShake]);

    return (
        <Provider store={store}>
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
                setBasketShake(true);
            }}
            itemId={itemPreview?.id}
        />
        <FloatingCart
            modalShow={basketPreview} setModalShow={setBasketPreview}
            shake={basketShake} setShake={setBasketShake}
        />
        </Provider>
    );
}

export default Order;