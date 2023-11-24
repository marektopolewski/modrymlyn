import styles from './OrderDiagram.module.css';

import { ReactComponent as CartSvg } from 'assets/icons/cart.svg';
import { ReactComponent as CheckoutSvg } from 'assets/icons/bagcheck.svg';
import { ReactComponent as EmailSvg } from 'assets/icons/mail.svg';
import { ReactComponent as PaySvg } from 'assets/icons/cash.svg';
import { ReactComponent as DoneSvg } from 'assets/icons/ok.svg';

const getDatePlusDays = (days) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
}

const OrderDiagramStep = ({ number, text, icon }) => (
    <div className={styles['order-diagram-step']}>
        <span className={styles['order-diagram-number']}>
            {number}
        </span>
        <div className={styles['order-diagram-text']}>
            {text}
        </div>
        <div className={styles['order-diagram-icon']}>
            {icon}
        </div>
    </div>
);

const OrderDiagram = () => (
    <>
    <div
        className={styles['order-diagram']}
        // onClick={() => {}}
    >
        <OrderDiagramStep
            number="1"
            text="Wybierz dania"
            icon={<CartSvg/>}
        />
        <OrderDiagramStep
            number="2"
            text="Wypełnij dane"
            icon={<CheckoutSvg/>}
        />
        <OrderDiagramStep
            number="3"
            text="Sprawdź email"
            icon={<EmailSvg/>}
        />
        <div className={styles['order-diagram']}>
            <OrderDiagramStep
                number="4"
                text="Opłać"
                icon={<PaySvg/>}
            />
            <OrderDiagramStep
                number="5"
                text="Odbierz"
                icon={<DoneSvg/>}
            />
        </div>
    </div>
    <p className={styles['order-diagram-note']}>
        Preferowany termin odbioru możesz wybrać w godzinach pracy restauracji i
        najszybciej na <span>za 2 dni ({getDatePlusDays(2)}),</span> a
        najpóźniej <span>za 3 tygodnie ({getDatePlusDays(3 * 7)}).</span><br/>

        Jeśli dostępne terminy Ci nie odpowiadają, skontaktuj się z nami
        telefonicznie: <span>(+48) 733 314 441</span>
    </p>
    <p className={styles['order-diagram-note-extra']}>
        *po wysłaniu zamówienia restauracja potwierdzi ostateczny termin odbioru.
    </p>
    </>
);

export default OrderDiagram;
