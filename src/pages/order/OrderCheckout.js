import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useWindowDimensions from 'hooks/windowsize';

import Container from 'components/Container';
import TextWithBackground from 'components/TextWithBackground';

import { Provider, useSelector, useDispatch } from 'react-redux';
import store, { clearCart, getCart, getCartValueTotal, OrderItemsMap, MIN_CART_VALUE } from 'services/Cart';

import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
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
    const dateTimeStr = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return (
        <div className={styles['cart-summary-outer']}>
            <h4>
                Twoje zamówienie 🧾
            </h4>
            <div className={styles['cart-summary']}>
                    <Col>
                    <br/>
                    <p>Restauracja Modry Młyn</p>
                    <p>ul. Mickiewicza 19A</p>
                    <p>84-230 Rumia</p>
                        <div className={styles['cart-summary-row']}>
                            <span>NIP: 5860058616</span>
                            <span>{dateStr}</span>
                        </div>
                    <p>## FISKALNY ##</p>
                    <hr className={styles['cart-summary-hr']}/>

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
                        <span>Nr. sys.: 011</span>
                        <span>www.modrymlyn.pl</span>
                    </div>
                    <br/><br/>
                </Col>
            </div>
        </div>
    );
};

const CheckoutFormLabel = ({required, children, ...props}) => (
    <InputGroup.Text {...props} className={styles['form-label']}>
        {children}
        {required && <span>*</span>}
    </InputGroup.Text>
); 

const CheckoutForm = ({ withSummary }) => {
    const [needInvoice, setNeedInvoice] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cartValueTotal = useSelector(getCartValueTotal);

    const onSubmit = useCallback(e => {
        e.preventDefault();
        if (cartValueTotal < MIN_CART_VALUE) {
            alert(`Minimalna kwota zamówienia wynosi ${MIN_CART_VALUE.toFixed(2)}zł.`)
            return;
        }
        const data = Object.fromEntries(new FormData(e.target).entries());
        if (!('nip' in data))
            data.nip = ''
        alert(
            `email: ${data.email}
            \nname: ${data.name}
            \ntelephone: ${data.telephone}
            \nnip: ${data.nip}
            \nnotes: ${data.notes}`
        )
        e.target.reset();
        dispatch(clearCart());
        navigate('/order');
    }, [cartValueTotal, navigate, dispatch]);
    return (
        <div className={styles['form-wrapper']}>
            <Form onSubmit={onSubmit}>
        
                <h4>Dane kontaktowe ☎️</h4>
                <InputGroup className={styles['form-input-group']}>
                    <CheckoutFormLabel id='name' required>
                        Imię i nazwisko
                    </CheckoutFormLabel>
                    <Form.Control
                        required
                        type='text'
                        placeholder='Jan Kowalski'
                        name='name'
                        aria-label='Imię i nazwisko'
                        aria-describedby='name'
                    />
                </InputGroup>

                <InputGroup className={styles['form-input-group']}>
                    <CheckoutFormLabel id='telephone' required>
                        Telefon
                    </CheckoutFormLabel>
                    <Form.Control
                        required
                        type='tel'
                        placeholder='512 345 678'
                        name='telephone'
                        aria-label='Telefon'
                        aria-describedby='telephone'
                    />
                </InputGroup>

                <InputGroup className={styles['form-input-group']}>
                    <CheckoutFormLabel id='email' required>
                        Adres email
                    </CheckoutFormLabel>
                    <Form.Control
                        required
                        type='email'
                        placeholder='jan.kowalski@mail.com'
                        name='email'
                        aria-label='Email'
                        aria-describedby='email'
                    />
                </InputGroup>
        
                <br/>
                <h5>Informacje dodatkowe ❓</h5>

                <div className={styles['form-input-invoice']}>
                    <Form.Check
                        className={styles['form-input-invoice-check']}
                        type="switch"
                        id="custom-switch"
                        label="Faktura?"
                        checked={needInvoice}
                        onChange={() => setNeedInvoice(needInvoice => !needInvoice)}
                    />        
                    { needInvoice &&
                        <InputGroup>
                            <CheckoutFormLabel id='nip' required>
                                NIP
                            </CheckoutFormLabel>
                            <Form.Control
                                required
                                type='text'
                                minLength='10'
                                maxLength='10'
                                placeholder='1234567890'
                                name='nip'
                                aria-label='Numer NIP'
                                aria-describedby='nip'
                            />
                        </InputGroup>
                    }
                </div>

                <InputGroup className={styles['form-input-group']}>
                    <CheckoutFormLabel id='notes'>
                        Uwagi
                    </CheckoutFormLabel>
                    <Form.Control
                        type='text'
                        as='textarea'
                        rows='3'
                        maxLength='250'
                        placeholder='np.: "Poproszę omlety bez jajek"'
                        name='notes'
                        aria-label='Uwagi'
                        aria-describedby='notes'
                    />
                </InputGroup>

                {withSummary && 
                    <>
                    <br/>
                    <CartSummary/>
                    </>
                }

                <br/>
                <Button type='submit' size='lg'>Potwierdź zamówienie</Button>
                {cartValueTotal < MIN_CART_VALUE &&
                    <p className={styles['form-min-cart-value']}>
                        Minimalna kwota zamówienia wynosi: {MIN_CART_VALUE.toFixed()}zł
                    </p>
                }
                <Button
                    className={styles['checkout-go-back-button']}
                    variant='secondary'
                    size='sm'
                    onClick={() => navigate('/order')}
                >
                    Powrót
                </Button>
            </Form>
        </div>
    );
};

const OrderCheckout = () => {
    const { width } = useWindowDimensions();
    const inlineSummary = width < 800;
    useEffect(() => {
        const onBeforeUnload = (e) => {
            e.preventDefault();
            e.returnValue = ''; // ask before leaving
        };
        window.addEventListener('beforeunload', onBeforeUnload);
    }, []);

    return (
        <Provider store={store}>
            <Container>
            <TextWithBackground>
                <div className={styles['checkout-wrapper']}>
                    <CheckoutForm withSummary={inlineSummary}/>
                    {!inlineSummary && <CartSummary/>}
                </div>
            </TextWithBackground>
        </Container>
        </Provider>
    );
};

export default OrderCheckout;