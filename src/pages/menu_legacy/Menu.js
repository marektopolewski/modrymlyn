import { useNavigate, useParams } from "react-router-dom";
import useWindowDimensions from 'hooks/windowsize';

import Container from 'components/Container';

import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import styles from './Menu.module.css';

import logo2 from "assets/mlyn_logo2.jpg";

const LanguageConfig = {
    en: {
        button: {
            lgLabel: "Zmień język 🇵🇱",
            smLabel: "🇵🇱",
            pathParam: "pl"
        },
        imgPrefix: "ang",
    },
    pl: {
        button: {
            lgLabel: "Change language 🇬🇧",
            smLabel: "🇬🇧",
            pathParam: "en"
        },
        imgPrefix: "pol",
    }
}

const Menu = () => {
    const navigate = useNavigate();
    const { langVersion } = useParams();
    const lang = langVersion === "en" ? "en" : "pl";
    const imgPrefix = LanguageConfig[lang].imgPrefix;

    const { width } = useWindowDimensions();

    return (
        <Container className={styles.menu}>
            <div className={styles["lang-button"]}>
                <Button variant="outline-secondary" onClick={() => navigate(`/menu/${LanguageConfig[lang].button.pathParam}`)}>
                    {width > 500 ? LanguageConfig[lang].button.lgLabel : LanguageConfig[lang].button.smLabel}
                </Button>
            </div>
            <div className={styles["menu-logo"]}>
                <Image src={logo2} />
            </div>
            <div className={styles["menu-imgs"]}>
                {[...Array(7).keys()].map(idx => (
                    <div>
                        <Image
                            key={idx}
                            src={require(`assets/menu-${imgPrefix}/menu-modry-mlin-${imgPrefix}_Page_${idx + 2}.jpg`)}
                        />
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default Menu;