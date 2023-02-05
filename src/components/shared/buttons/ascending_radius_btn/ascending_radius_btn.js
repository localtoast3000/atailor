import styles from './ascending_radius_btn.module.css';

export default function AscendingRadiusBtn({ children }) {
  return <button className={styles.button}>{children}</button>;
}
