import Container from 'components/Container';
import TextWithBackground from 'components/TextWithBackground';

import { Provider, useSelector } from 'react-redux';
import store, { getCart, getCartValueTotal, OrderItemsMap } from 'services/Cart';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import styles from './OrderCheckout.module.css';


const CartSummaryItem = ({itemId, itemCount}) => {
    const item = OrderItemsMap[itemId];
    return (
        <Row className={styles['cart-summary-item']}>
            <Col xs={6} className={styles['cart-summary-item-name']}>
                <span>{item.name}</span>
            </Col>
            <Col xs={3}>
                <span>x{itemCount}</span>
            </Col>
            <Col xs={3} className={styles['cart-summary-item-price']}>
                <span>{(itemCount * item.price).toFixed(2)}</span>
            </Col>
        </Row>
    );
};

const CartSummary = () => {
    const cart = useSelector(getCart);
    const cartValueTotal = useSelector(getCartValueTotal);
    const cartValueTotalStr = cartValueTotal.toFixed(2);

    const date = new Date();
    const dateStr = date.toLocaleDateString();
    const dateTimeStr = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    return (
        <div className={styles['cart-summary']}>
        <p>Restauracja Modry Młyn</p>
        <p>ul. Mickiewicza 19A</p>
        <p>84-230 Rumia</p>
            <div className={styles['cart-summary-row']}>
                <span>NIP: 5860058616</span>
                <span>{dateStr}</span>
            </div>
        <p>## FISKALNY ##</p>
        <hr className={styles['cart-summary-hr']}/>
        <Col>
            {Object.keys(cart).map(itemId => (
                <CartSummaryItem
                    key={itemId}
                    itemId={itemId}
                    itemCount={cart[itemId]}
                />
            ))}
        
            <hr className={styles['cart-summary-hr']}/>
            <div className={`${styles['cart-summary-row']} ${styles['cart-summary-sum']}`}>
                <span>SUMA:</span>
                <span>PLN {cartValueTotalStr}</span>
            </div>
        
            <hr className={styles['cart-summary-hr']}/>
            <div className={`${styles['cart-summary-row']} ${styles['cart-summary-pay']}`}>
                <span>DO ZAPŁATY:</span>
                <span>{cartValueTotalStr}</span>
            </div>
            <p>ROZLICZENIE PŁATNOŚCI</p>
            <div className={styles['cart-summary-row']}>
                <span>Przy odbiorze:</span>
                <span>{cartValueTotalStr}</span>
            </div>

            <hr className={styles['cart-summary-hr']}/>
            <p>## NIEFISKALNY ##</p>
            <div className={styles['cart-summary-row']}>
                <span>001205 #716</span>
                <span>{dateStr} {dateTimeStr}</span>
            </div>
            <div className={styles['cart-summary-row']}>
                <span>Nr transakcji: 001</span>
                <span>www.modrymlyn.pl</span>
            </div>
        </Col>
        </div>
    );
};

const OrderCheckout = () => (
    <Provider store={store}>
        <Container>
        <TextWithBackground>
            <h3>
                📆 Garmaż Modrego Młyna 🍽
            </h3>
        </TextWithBackground>
        <TextWithBackground>
            <h4>
                Zamówienie 🧾
            </h4>
            <CartSummary/>
        </TextWithBackground>
    </Container>
    </Provider>
);

export default OrderCheckout;