import { AscendingRadiusColorTransBtnTw } from '@/components/shared/buttons/buttons';
import styles from './proposition.module.css';

export default function Proposition() {
  return (
    <section className={styles.propositionContainer}>
      <div className={styles.headerContainer}>
        <h2 className={styles.header}>Vous êtes un Couturier Professionnel ?</h2>
        <p className={styles.subHeader}>
          Rejoignez le mouvement et développez votre activité !
        </p>
        <AscendingRadiusColorTransBtnTw className={styles.btn}>
          JE CRÉER MON VÊTEMENT
        </AscendingRadiusColorTransBtnTw>
      </div>
    </section>
  );
}
