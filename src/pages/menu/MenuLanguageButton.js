import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import Button from 'react-bootstrap/Button';

import styles from './Menu.module.css';

const MenuLanguageButton = () => {
    const { t, i18n } = useTranslation('menu');
    const changeLanguage = useCallback(() => {
        i18n.changeLanguage(i18n.language === 'pl' ? 'en' : 'pl');
    }, [i18n]);
    return (
        <div className={styles['lang-button']}>
            <Button
                variant='light'
                onClick={() => changeLanguage()}
            >
                {t('lang-button-desc')}  {t('lang-button')}
            </Button>
        </div>
    );
};

export default MenuLanguageButton;
