
import LazyImage from 'components/LazyImage';

import CateringBox from 'assets/catering/catering_box.jpg';
import styles from './TempOrderDescription.module.css';

const TelLink = () => (
    <a href="tel:+48733314441">
        <span className={styles["service-tel"]}>
            <b>(+48) 733 314 441</b>
        </span>
    </a>
);


const TempOrderDescription = () => (
    <>
    <LazyImage
        className={styles["catering-image"]}
        src={CateringBox}
        text={"Przykładowe zamówienie cateringowe"}
    />
    <br/>
    <br/>
    <p>
        Skorzystaj z naszej oferty cateringowej!
        <br/>
        Złóż zamówienie telefonicznie: <TelLink/>
    </p>
    <p><i>Wkrótce zamówisz online!</i></p>
    </>
);

export default TempOrderDescription;
