import Image from 'next/image';
import IconDescription from './icon_description/icon_description';
import styles from './summary.module.css';

export default function Summary() {
  return (
    <section className={styles.summaryContainer}>
      <h2 className={styles.header}>La mode sur-mesure, équitable et accessible.</h2>
      <div className={styles.iconDescriptionContainer}>
        <IconDescription
          src='/images/approuve.png'
          description='Couturiers approuvés'
        />
        <IconDescription
          src='/images/mesure.png'
          description='Prise de mesures guidée'
        />
        <IconDescription
          src='/images/livraison.png'
          description='Livraison express'
          imageClassName={styles.livrasionImage}
        />
        <IconDescription
          src='/images/retouche.png'
          description='Assurance retouche'
        />
        <IconDescription
          src='/images/dispo.png'
          description='Disponibilité 24/24h 7/7j'
          imageClassName={styles.dispoImage}
        />
      </div>
    </section>
  );
}
