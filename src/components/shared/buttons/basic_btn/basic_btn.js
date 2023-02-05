import styles from './basic_btn.module.css';

export default function BasicBtn({ className, children }) {
  return <button className={`${styles.button} ${className}`}>{children}</button>;
}
