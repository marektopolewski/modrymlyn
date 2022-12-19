import styles from './TextWithBackground.module.css'

const TextWithBackground = ({ children, className="" }) => {
    const jointStyle = className ? [styles.wrapper, ...className].join(' ') : styles.wrapper;
    return (
        <div className={jointStyle}>
            {children}
        </div>
    )
};

export default TextWithBackground;
