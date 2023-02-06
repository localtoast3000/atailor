import Image from 'next/image';
import styles from './icon_description.module.css';

export default function IconDescription({ src, description, imageClassName }) {
  return (
    <div className={styles.iconDescriptionWrapper}>
      <Image
        src={src}
        width='60'
        height='50'
        className={imageClassName}
      />
      <p>{description}</p>
    </div>
  );
}
