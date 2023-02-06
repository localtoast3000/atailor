import styles from './avis.module.css';
import { RoundBtn } from '@/components/shared/buttons/buttons';
import DirectionIcon from './direction_icon/direction_icon';

export default function Avis() {
  return (
    <section className={styles.avisContainer}>
      <div className={styles.rearLayer}>
        <h3>AVIS</h3>
      </div>
      <div className={styles.frontLayer}>
        <div className={styles.avisText}>
          <p className={styles.quoteMark}>"</p>
          <p className={styles.quote}>
            Je cherchais le meilleur rapport qualité/prix possible pour un costume. Et je
            l'ai trouvé !
          </p>
          <div className={styles.info}>
            <p>Benjamin, 31 ans</p>
            <p>Eure (27)</p>
          </div>
        </div>
        <div className={styles.directionBtnsWrapper}>
          <RoundBtn className={styles.directionBtn}>
            <DirectionIcon rotation={180} />
          </RoundBtn>
          <RoundBtn className={styles.directionBtn}>
            <DirectionIcon />
          </RoundBtn>
        </div>
      </div>
    </section>
  );
}
