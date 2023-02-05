import styles from './top_banner.module.css';

export default function TopBanner({ height }) {
  return (
    <div
      className={styles.container}
      style={{ height }}>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  );
}
