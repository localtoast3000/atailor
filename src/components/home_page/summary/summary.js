import IconDescription from './icon_description/icon_description';
import styles from './summary.module.css';

export default function Summary() {
  return (
    <section className={styles.summaryContainer}>
      <h3 className={styles.header}>La mode sur-mesure, équitable et accessible.</h3>
      <div className={styles.iconDescriptionContainer}>
        <IconDescription
          className={styles.image}
          src='/images/approuve.png'
          description='Couturiers approuvés'
        />
        <IconDescription
          className={styles.image}
          src='/images/mesure.png'
          description='Prise de mesures guidée'
        />
        <IconDescription
          className={styles.image}
          src='/images/livraison.png'
          description='Livraison express'
          imageClassName={styles.livrasionImage}
        />
        <IconDescription
          className={styles.image}
          src='/images/retouche.png'
          description='Assurance retouche'
        />
        <IconDescription
          className={styles.image}
          src='/images/dispo.png'
          description='Disponibilité 24/24h 7/7j'
          imageClassName={styles.dispoImage}
        />
      </div>
    </section>
  );
}
