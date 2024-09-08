import styles from './Button.module.css';

const Button = ({ children, ...props }) => {
    return <button type="button" className={styles.btn}>
        {children}
    </button>
}

export default Button;