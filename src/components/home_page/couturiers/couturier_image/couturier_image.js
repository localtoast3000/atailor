import Image from 'next/image';
import styles from './couturier_image.module.css';

export default function CouturiersImage({ className, src }) {
  return (
    <Image
      src={src}
      width='350'
      height='350'
      alt='person'
      className={`${styles.couturiersImage} ${className}`}
    />
  );
}
