import Image from 'next/image';
import { AscendingRadiusBtn } from '@/components/shared/buttons/buttons';
import styles from './why.module.css';

export default function Why() {
  return (
    <section className={styles.whyContainer}>
      <Image
        src='/images/pourquoi.png'
        width='300'
        height='400'
        alt='worker'
        className={styles.image}
      />
      <div className={styles.whyText}>
        <h3 className={styles.header}>Pourquoi choisir Atailor ?</h3>
        <div className={styles.description}>
          <p>
            Dans de nombreux pays, on ne compte pas sur les chaînes de vêtements pour
            s’habiller. On contacte simplement un couturier et on lui demande de créer nos
            vêtements.
          </p>
          <p>
            En commandant directement auprès de couturiers on évite de nombreux coûts
            intermédiaires, on bénéficie du meilleur rapport qualité prix, on respecte le
            bien-être des ouvriers, chaque vêtement est unique et produit à la demande et
            nos vêtements sont sur-mesure.
          </p>
          <p>Alors, vous tentez l’expérience ?</p>
        </div>
        <AscendingRadiusBtn className={styles.btn}>
          JE DÉCOUVRE LES COUTURIERS
        </AscendingRadiusBtn>
      </div>
    </section>
  );
}
