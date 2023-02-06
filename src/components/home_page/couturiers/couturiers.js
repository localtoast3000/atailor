import { AscendingRadiusColorTransBtnBg } from '@/components/shared/buttons/buttons';
import ArrowIcon from './arrow_icon/arrow_icon';
import styles from './couturiers.module.css';
import CouturiersImage from './couturier_image/couturier_image';

export default function Couturiers() {
  return (
    <section className={styles.couturiersContainer}>
      <div className={styles.headerContainer}>
        <h3 className={styles.header}>Découvrez nos couturiers</h3>
        <p className={styles.subHeader}>et discutez avec eux.</p>
        <AscendingRadiusColorTransBtnBg className={styles.btn}>
          JE CRÉER MON VÊTEMENT
        </AscendingRadiusColorTransBtnBg>
      </div>
      <div className={styles.couturiersImagesContainer}>
        <div className={styles.scrollDiv}>
          <CouturiersImage src='/images/couturier2.png' />
          <CouturiersImage src='/images/couturier3.png' />
          <CouturiersImage src='/images/couturier1.png' />
          <CouturiersImage src='/images/couturier2.png' />
          <CouturiersImage src='/images/couturier3.png' />
        </div>
        <div className={styles.scrollSign}>
          <ArrowIcon />
          <p className={styles.scrollText}>SCROLL</p>
        </div>
      </div>
    </section>
  );
}
