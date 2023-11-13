import { useTranslation } from 'react-i18next';
import useWindowDimensions from 'hooks/windowsize';

import TextWithBackground from 'components/TextWithBackground';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import styles from './Menu.module.css';


const FitlerDefs = [
    {
        name: 'hot',
        emoji: '🔥',
    },
    {
        name: 'fish',
        emoji: '🐟',
    },
    {
        name: 'vege',
        emoji: '🌱',
    },
];


const MenuButton = ({active, opt, emoji, callback}) => {
    const { width } = useWindowDimensions();
    const { t } = useTranslation('menu');
    const filterText = t(`${opt}-filter`);
    return (
        <Button
            variant='light'
            onClick={() => callback(opt)}
            active={active}
        >
            {width > 500 ? `${filterText} ${emoji}` : emoji}
        </Button>
    );
};

const MenuFilters = ({ active, callback }) => (
    <TextWithBackground className={[styles['filter-container']]}>
        <Row>
            {
                FitlerDefs.map((filter, idx) => (
                    <Col key={idx}>
                        <MenuButton
                            active={active === filter.name}
                            opt={filter.name}
                            emoji={filter.emoji}
                            callback={callback}
                        />
                    </Col>
                ))
            }                
        </Row>
    </TextWithBackground>
);

export default MenuFilters;
