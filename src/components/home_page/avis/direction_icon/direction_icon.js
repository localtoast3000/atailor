import styles from './direction_icon.module.css';

export default function DirectionIcon({ rotation = 0 }) {
  return (
    <div className={styles.iconFrame}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='25'
        height='41'
        viewBox='0 0 25 41'
        className={styles.icon}
        transform={`rotate(${rotation}, 0, 0)`}>
        <path d='M1.43928 3.87065C0.660324 3.14293 0.659345 1.9081 1.43715 1.17915V1.17915C2.14514 0.51562 3.24635 0.51469 3.95547 1.17703L23.4352 19.3717C24.2816 20.1623 24.2816 21.5043 23.4352 22.2949L3.94921 40.4955C3.24312 41.155 2.14704 41.1555 1.44037 40.4966V40.4966C0.661377 39.7703 0.660547 38.5361 1.43857 37.8088L18.0331 22.2948C18.8788 21.5042 18.8786 20.1628 18.0325 19.3724L1.43928 3.87065Z' />
      </svg>
    </div>
  );
}
