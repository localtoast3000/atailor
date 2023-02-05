import styles from './round_btn.module.css';

export default function RoundBtn({ diameter = 50, className, children }) {
  return (
    <button
      style={{ width: diameter, height: diameter }}
      className={`${styles.button} ${className}`}>
      {children}
    </button>
  );
}
