import { Container as BSContainer } from 'react-bootstrap';

import styles from './Container.module.css'

const Container = ({ className, children }) => {
    const jointStyle = `${styles.wrapper} ${className}`;
    return (
        <BSContainer className={jointStyle}>
            {children}
        </BSContainer>
    );
};

export default Container;
