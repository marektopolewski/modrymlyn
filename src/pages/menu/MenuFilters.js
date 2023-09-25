import TextWithBackground from 'components/TextWithBackground';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import styles from './Menu.module.css';


const MenuFilterOptions = {
    hot: "Polacane 🔥",
    fish: "Ryba 🐟",
    vege: "Wege 🌱",
};

const MenuButton = ({active, opt, callback, variant}) => (
    <Button 
        variant='light'
        onClick={() => callback(opt)}
        active={active}
    >
        {MenuFilterOptions[opt]}
    </Button>
);

const MenuFilters = ({ active, callback }) => (
    <TextWithBackground className={[styles['filter-container']]}>
        <Row>
            <Col><MenuButton active={active === 'hot'} opt='hot' callback={callback}/></Col>
            <Col><MenuButton active={active === 'fish'} opt='fish' callback={callback}/></Col>
            <Col><MenuButton active={active === 'vege'} opt='vege' callback={callback}/></Col>
            <Col sm='auto'><div className={styles['h-divider']}/></Col>
            <Col>
                <Button
                    variant='outline-dark'
                    onClick={() => console.log("change lang here")}
                >
                    English 🇬🇧
                </Button>
            </Col>
        </Row>
    </TextWithBackground>
);

export default MenuFilters;
