import { useCallback, useReducer, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useWindowDimensions from 'hooks/windowsize';

import MenuFilters from './MenuFilters';
import MenuItemModal from './MenuItemModal';
import MenuLanguageButton from './MenuLanguageButton';

import Container from 'components/Container';
import LazyImage from 'components/LazyImage'
import TextWithBackground from 'components/TextWithBackground';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import MenuData from './menu-data.json'
import styles from './Menu.module.css';


const getAttrWithFallback = (data, attr, isEng) => {
    const attrEng = `${attr}_eng`;
    if (isEng && attrEng in data)
        return data[attrEng];
    return data[attr];
};

const MenuItemImage = ({ data, imageCallback }) => (
    <LazyImage
        className={styles['dish-img']}
        text={data.text}
        src={require(`assets/menu/${data.img}_s.jpeg`)}
        onClick={() => imageCallback(data)}
    />
)

const MenuItemVegeLabel = () => {
    const { t } = useTranslation('menu');
    return <span className={styles['vege']}>{t('dish-vege')}</span>;
}

const MenuItemSm = ({name, desc, item, imageCallback}) => (
    <Row className={styles['dish-container']}>
        <Col>
            <Row>
                <p className={styles['dish-name']}>{name} {item.vege && <MenuItemVegeLabel/>}</p>
            </Row>
            <Row>
                <p className={styles['dish-desc']}>{desc}</p>
            </Row>
        </Col>
        <Col sm='auto'>
            <Row>
                {item.img && <MenuItemImage data={item} imageCallback={imageCallback}/>}
            </Row>
            <Row>
                <Col className={styles['dish-price-wrapper']}>
                    <span className={styles['dish-price']}>{item.price}</span> zł
                </Col>
            </Row>
        </Col>
    </Row>
);

const MenuItemLg = ({name, desc, item, imageCallback}) => { console.log(); return (
    <Row className={styles['dish-container']}>
        <Col>
            {item.img && <MenuItemImage data={item} imageCallback={imageCallback}/>}
        </Col>
        <Col>
            <Row>
                <p className={styles['dish-name']}>{name}</p>
            </Row>
            <Row>
                <p className={styles['dish-desc']}>{desc}</p>
            </Row>
        </Col>
        <Col>
            <span className={styles['dish-price']}>{item.price}</span> zł
            {item.vege && <p><MenuItemVegeLabel/></p>}
        </Col>
    </Row>
);}

const MenuItem = ({ item, isEng, imageCallback }) => {
    const { width } = useWindowDimensions();
    const dishName = getAttrWithFallback(item, 'name', isEng);
    const dishDesc = getAttrWithFallback(item, 'desc', isEng);
    if (width < 650)
        return (
            <MenuItemSm
                name={dishName}
                desc={dishDesc}
                item={item}
                imageCallback={imageCallback}
            />
        );
    return (
        <MenuItemLg
            name={dishName}
            desc={dishDesc}
            item={item}
            imageCallback={imageCallback}
        />
    );
};

const MenuSection = ({ data, imageCallback }) => {
    const { i18n } = useTranslation('menu');
    const isEng = i18n.language === 'en';
    const sectionHeader = getAttrWithFallback(data, 'header', isEng);

    if (!data.items || data.items.length === 0)
        return <></>;

    return (
        <Container>
            <hr className={styles['v-divider']}/>
            <p className={styles['section-header']}>{sectionHeader}</p>
            {
                data.items.map((item, idx) => (
                    <MenuItem
                        key={idx}
                        item={item}
                        isEng={isEng}
                        imageCallback={imageCallback}
                    />
                ))
            }
        </Container>
    );
};

const menuDataReducer = (state, action) => {
    if (!action || action === state.filter)
        return {
            filter: undefined,
            data: MenuData
        };

    return {
        filter: action,
        data: MenuData.map(section => ({
            ...section,
            items: section.items.filter(it => it[action])
        })),
    };
};

const Menu = () => {
    const [modalData, setModalData] = useState(undefined);
    const showModalCallback = useCallback(data => setModalData(data), []);
    const hideModalCallback = useCallback(() => setModalData(undefined), []);

    const [menuState, dispatch] = useReducer(menuDataReducer, { filter: undefined, data: MenuData });
    const filterCallback = useCallback(filter => {
        dispatch(filter);
    }, []);

    return (
        <>
        <MenuItemModal data={modalData} onHide={hideModalCallback}/>
        <Container>
            <MenuLanguageButton/>
            <TextWithBackground>
            <MenuFilters active={menuState.filter} callback={filterCallback}/>
            {
                menuState.data.map((section, idx) => (
                    <MenuSection
                        key={idx}
                        data={section}
                        imageCallback={showModalCallback}
                    />
                ))
            }
            </TextWithBackground>
        </Container>
        </>
    );
};

export default Menu;
