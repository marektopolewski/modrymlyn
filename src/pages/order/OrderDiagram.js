import styles from './OrderDiagram.module.css';

import { ReactComponent as CartSvg } from 'assets/icons/cart.svg';
import { ReactComponent as CheckoutSvg } from 'assets/icons/bagcheck.svg';
import { ReactComponent as EmailSvg } from 'assets/icons/mail.svg';
import { ReactComponent as PaySvg } from 'assets/icons/cash.svg';
import { ReactComponent as DoneSvg } from 'assets/icons/ok.svg';


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
    <div
        className={styles['order-diagram']}
        // onClick={() => {}}
    >
    <OrderDiagramStep
        number="1"
        text="Skompletuj zamówienie"
        icon={<CartSvg/>}
    />
    <OrderDiagramStep
        number="2"
        text="Wypełnij dane i zmów"
        icon={<CheckoutSvg/>}
    />
    <OrderDiagramStep
        number="3"
        text="Sprawdź swój email"
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
            text="Odbierz zamówienie"
            icon={<DoneSvg/>}
        />
    </div>
    </div>
);

export default OrderDiagram;
