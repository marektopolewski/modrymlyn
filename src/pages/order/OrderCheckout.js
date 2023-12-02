import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useWindowDimensions from 'hooks/windowsize';

import Container from 'components/Container';
import TextWithBackground from 'components/TextWithBackground';

import { Provider, useSelector, useDispatch } from 'react-redux';
import store, { clearCart, getCartWithOrderData, getCartValueTotal, MIN_CART_VALUE } from 'services/Cart';

import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

import styles from './OrderCheckout.module.css';


const getDatePlusDays = (days) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date.toISOString().split('T')[0];
}

const CartSummaryItem = ({name, count, price}) => (
    <Row className={styles['cart-summary-item']}>
        <Col xs={6} className={styles['cart-summary-item-name']}>
            <span>{name}</span>
        </Col>
        <Col xs={3}>
            <span>x{count}</span>
        </Col>
        <Col xs={3} className={styles['cart-summary-item-price']}>
            <span>{(count * price).toFixed(2)}</span>
        </Col>
    </Row>
);

const CartSummary = () => {
    const cart = useSelector(getCartWithOrderData);
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

                    {cart.map(cartItem => (
                        <CartSummaryItem
                            key={cartItem.id}
                            name={cartItem.name}
                            count={cartItem.count}
                            price={cartItem.price}
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

const Explainer = () => {
    const onClick = () => {
        let text = "";
        text += "Zamówienia online muszą być złożone z min. 2 dniowym i maks. 3 tygodniowym wyprzedzeniem.";
        text += "\n\nJeśli dostępne terminy Ci nie odpowiadają, skontaktuj się z nami telefonicznie.";
        text += "\n\n(+48) 733 314 441";
        alert(text);
    };
    return (
        <InputGroup.Text
            className={styles['form-explainer']}
            onClick={onClick}
        >
            ?
        </InputGroup.Text>
    )
};

const CheckoutFormLabel = ({required, children, ...props}) => (
    <InputGroup.Text {...props} className={styles['form-label']}>
        {children}
        {required && <span>*</span>}
    </InputGroup.Text>
); 

const CheckoutForm = ({ withSummary }) => {
    const [formData, setFormData] = useState({});
    const onChange = useCallback(e => {
        setFormData(fd => ({ ...fd, [e.target.name]: e.target.value }))
    }, [setFormData]);

    const [needInvoice, setNeedInvoice] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector(getCartWithOrderData);
    const cartValueTotal = useSelector(getCartValueTotal);

    const onSubmit = useCallback(e => {
        e.preventDefault();
        if (cartValueTotal < MIN_CART_VALUE) {
            alert(`Minimalna kwota zamówienia wynosi ${MIN_CART_VALUE.toFixed(2)}zł.`)
            return;
        }
        const submitData = Object.fromEntries(new FormData(e.target).entries());
        if (!('nip' in submitData))
            submitData.nip = ''
        
        const emailData = {
            ...submitData,
            total: cartValueTotal,
            order: cart.map(item => ({
                name: item.name,
                count: item.count,
                value: (item.count * item.price).toFixed(2),
            })),
        }

        fetch(
            '/api/email/send.php',
            {
                body: JSON.stringify(emailData),
                cache: 'no-cache',
                headers: { 'content-type': 'application/json' },
                method: 'POST',
                referrer: 'no-referrer',
                mode: 'same-origin',
            }
        ).then(response => {
            if (response.ok)
                return response.json()
            else
                return Promise.reject(response)
        })
        .then(() => {
            navigate('/catering-success');
            e.target.reset();
            dispatch(clearCart());
        })
        .catch(error => {
            let errMsg = '';
            errMsg += 'Coś poszło nie tak :(\n';
            errMsg += 'Jeśli problem się powtarza, skontaktuj się z restauracją pod:\n';
            errMsg += '+48 733 314 441\n';
            errMsg += 'Przepraszamy za utrudnienia!\n';
            errMsg += '\n - - - - - - - - - - \n';
            errMsg += 'Error Code: ' + error.status + '\n';
            alert(errMsg);
        })
    }, [cart, cartValueTotal, navigate, dispatch]);

    const formRef = useRef();
    useEffect(() => {
        const onBeforeUnload = (e) => {
            e.preventDefault();
            e.returnValue = ''; // ask before leaving
        };
        if (Object.keys(formData).every(attr => !formData[attr]))
            window.removeEventListener('beforeunload', onBeforeUnload);
        else
            window.addEventListener('beforeunload', onBeforeUnload);
        return () => window.removeEventListener('beforeunload', onBeforeUnload);
    }, [formData]);

    return (
        <div className={styles['form-wrapper']}>
            <Form onSubmit={onSubmit} ref={formRef}>
        
                <h4>Termin 📆</h4>
                <InputGroup className={styles['form-input-group']}>
                    <CheckoutFormLabel id='date' required>
                        Termin odbioru
                    </CheckoutFormLabel>
                    <Form.Control
                        required
                        type='date'
                        name='date'
                        aria-label='Termin odbioru'
                        aria-describedby='date'
                        defaultValue={getDatePlusDays(2)}
                        min={getDatePlusDays(2)}
                        max={getDatePlusDays(3 * 7)}
                        onChange={onChange}
                    />
                    <Explainer/>
                </InputGroup>

                <br/>
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
                        onChange={onChange}
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
                        onChange={onChange}
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
                        onChange={onChange}
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
                                onChange={onChange}
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
                        onChange={onChange}
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
                    onClick={() => navigate('/catering')}
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