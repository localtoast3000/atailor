import Image from 'next/image';
import styles from './icon_description.module.css';

export default function IconDescription({ src, description, imageClassName, className }) {
  return (
    <div className={`${styles.iconDescriptionWrapper} ${className}`}>
      <Image
        src={src}
        width='60'
        height='50'
        alt='icon'
        className={imageClassName}
      />
      <p>{description}</p>
    </div>
  );
}
