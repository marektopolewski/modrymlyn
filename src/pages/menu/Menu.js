import { useCallback, useReducer, useState } from 'react';

import MenuFilters from './MenuFilters';

import Container from 'components/Container';
import LazyImage from 'components/LazyImage'
import TextWithBackground from 'components/TextWithBackground';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';

import styles from './Menu.module.css';

import MenuData from './menu-data.json'


const MenuItemImage = ({ data, imageCallback }) => (
    <LazyImage
        className={styles['dish-img']}
        text={data.text}
        src={require(`assets/menu/${data.img}_s.jpeg`)}
        onClick={() => imageCallback(data)}
    />
)

const MenuItem = ({ item, imageCallback }) => (
    <Row className={styles['dish-container']}>
        <Col>
            {item.img && <MenuItemImage data={item} imageCallback={imageCallback}/>}
        </Col>
        <Col>
            <Row>
                <p className={styles['dish-name']}>{item.name}</p>
            </Row>
            <Row>
                <p className={styles['dish-desc']}>{item.desc}</p>
            </Row>
        </Col>
        <Col>
            <Col><p className={styles['dish-price']}>{item.price}</p></Col>
            {item.vege && <Col><p className={styles['vege']}>Wege</p></Col>}
        </Col>
    </Row>
);

const MenuSection = ({ data, imageCallback }) => {
    if (!data.items || data.items.length === 0)
        return <></>;
    return (
        <Container>
            <hr className={styles['v-divider']}/>
            <p className={styles['section-header']}>{data.header}</p>
            {
                data.items.map((item, idx) => (
                    <MenuItem
                        key={idx}
                        item={item}
                        imageCallback={imageCallback}
                    />
                ))
            }
        </Container>
    );
};

const MenuModal = ({ data, onHide }) => (
    <Modal
        className={styles['modal-container']}
        size='lg'
        centered
        show={data !== undefined}
        onHide={onHide}
    >
        <Modal.Header closeButton>
            <Col>
                <Row>
                    <Modal.Title>
                        {data?.name}
                        {data?.vege && <span className={styles['vege']}> Wege</span>}
                    </Modal.Title>
                </Row>
                <Row>
                    <span>{data?.desc}</span>
                </Row>
            </Col>
        </Modal.Header>
        <Modal.Body>
            <Container className={styles['modal-body']}>
                <LazyImage
                    className={styles['modal-img']}
                    text={data?.name}
                    src={data && require(`assets/menu/${data.img}.jpeg`)}
                />
            </Container>
        </Modal.Body>
    </Modal>
);

const menuDataReducer = (state, action) => {
    if (!action)
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
        <MenuModal data={modalData} onHide={hideModalCallback}/>
        <Container>
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
