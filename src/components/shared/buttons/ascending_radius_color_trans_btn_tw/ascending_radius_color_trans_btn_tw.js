import styles from './ascending_radius_color_trans_btn_tw.module.css';

export default function AscendingRadiusColorTransBtnTw({ className, children }) {
  return (
    <button className={`${styles.button} ${className}`}>
      <p>{children}</p>
      <div className={styles.radius}></div>
    </button>
  );
}
