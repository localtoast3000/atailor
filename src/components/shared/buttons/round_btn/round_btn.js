import styles from './round_btn.module.css';

export default function RoundBtn({
  onClick = () => {},
  diameter = 50,
  className,
  children,
}) {
  return (
    <button
      onClick={onClick}
      style={{ width: diameter, height: diameter }}
      className={`${styles.button} ${className}`}>
      {children}
    </button>
  );
}
