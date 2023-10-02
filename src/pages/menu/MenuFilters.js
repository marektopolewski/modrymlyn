import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import TextWithBackground from 'components/TextWithBackground';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import styles from './Menu.module.css';


const MenuButton = ({active, opt, callback}) => {
    const { t } = useTranslation('menu');
    return (
        <Button
            variant='light'
            onClick={() => callback(opt)}
            active={active}
        >
            {t(`${opt}-filter`)}
        </Button>
    );
};

const MenuFilters = ({ active, callback }) => {
    const { t, i18n } = useTranslation('menu');
    const changeLanguage = useCallback(() => {
        i18n.changeLanguage(i18n.language === 'pl' ? 'en' : 'pl');
    }, [i18n]);
    return (
        <TextWithBackground className={[styles['filter-container']]}>
            <Row>
                <Col><MenuButton active={active === 'hot'} opt='hot' callback={callback}/></Col>
                <Col><MenuButton active={active === 'fish'} opt='fish' callback={callback}/></Col>
                <Col><MenuButton active={active === 'vege'} opt='vege' callback={callback}/></Col>
                <Col sm='auto'><div className={styles['h-divider']}/></Col>
                <Col>
                    <Button
                        variant='outline-dark'
                        onClick={() => changeLanguage()}
                    >
                        {t('lang-button')}
                    </Button>
                </Col>
            </Row>
        </TextWithBackground>
    );
};

export default MenuFilters;
