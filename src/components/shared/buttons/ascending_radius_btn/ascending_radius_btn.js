import styles from './ascending_radius_btn.module.css';

export default function AscendingRadiusBtn({ className, children }) {
  return (
    <button className={`${styles.button} ${className}`}>
      <p>{children}</p>
      <div className={styles.radius}></div>
    </button>
  );
}
