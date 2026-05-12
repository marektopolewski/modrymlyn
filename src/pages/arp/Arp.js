import Container from 'react-bootstrap/Container';

import LazyImage from 'components/LazyImage';

import arp from "assets/arp_large.jpg";
import arp2 from "assets/arp2_large.jpg";
import arp3 from "assets/arp3_large.jpg";

import styles from "./Arp.module.css"

const Arp = () => (
    <Container>

        <div className={styles.description}>
            <p>
                <strong>Nasza firma realizuje przedsięwzięcie:</strong>
            </p>
            <p>
                <strong>Tytuł projektu:</strong> Dywersyfikacja działalności VIVA Sylwia Topolewska
                prowadzonej w regionie 1 w województwie pomorskim poprzez wprowadzenie nowych usług,
                wdrożenie zielonej i cyfrowej transformacji oraz przeszkolenie pracowników sposobem
                na uodpornienie na przyszłe kryzysy i poszerzenie grona klientów.
            </p>
            <p>W ramach projektu wprowadzone zostaną nowe usługi:</p>
            <ol>
                <li>
                    <strong>Wynajem całorocznego domku letniskowego</strong> – usługa będzie polegała
                    na możliwości krótkoterminowego wynajęcia w pełni wyposażonego domku letniskowego
                    w miejscowości Zbychowo na Kaszubach.
                </li>
                <li>
                    <strong>Warsztaty kulinarne z degustacją</strong> – usługa nowa polegała będzie
                    na prowadzeniu przez Wnioskodawcę lub jego pracowników warsztatów kulinarnych
                    np. z lepienia regionalnych pierogów. Po wykonaniu przedmiotu warsztatu będzie
                    on na miejscu poddawany obróbce termicznej i gotowy do degustacji. Warsztaty
                    będą również mogły być świadczone online.
                </li>
                <li>
                    <strong>Sprzedaż w nowym stoisku sprzedażowym w ogródku restauracyjnym</strong>
                    {' '}– usługa sprzedaży na świeżym powietrzu, produktów, które dotychczas nie były
                    w ofercie Wnioskodawcy tj. np. shakes, smoothies, wyroby z grilla, kawa na wynos,
                    koktajle bezalkoholowe.
                </li>
            </ol>
        </div>
        <div className={styles.hashtags}>
            <span>#FunduszeEuropejskie</span>
            <span>#NextGenerationEU</span>
        </div>
        <div className={styles.header}>
            <div className={styles['image-wrap']}>
                <LazyImage src={arp3} className={styles.image}/>
            </div>
            <div className={styles['image-wrap']}>
                <LazyImage src={arp} className={styles.image}/>
            </div>
            <div className={styles['image-wrap']}>
                <LazyImage src={arp2} className={styles.image}/>
            </div>
        </div>
        
    </Container>
);

export default Arp;
