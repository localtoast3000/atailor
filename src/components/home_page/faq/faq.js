import styles from './faq.module.css';
import QaCard from './qa_card/qa_card';
import { ContentChangeBtn } from '@/components/shared/buttons/buttons';

export default function Faq() {
  return (
    <section className={styles.faqContainer}>
      <h3 className={styles.header}>FAQ</h3>
      <div className={styles.qaCardsContainer}>
        <QaCard
          question='Sur quel base se fait le choix du couturier ?'
          answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        />
        <QaCard
          className={styles.qaCard}
          question='Comment transférer mes mesures au couturier ?'
          answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        />
        <QaCard
          className={styles.qaCard}
          question='Quand dois-je accepter une offre ?'
          answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        />
      </div>
      <div className={styles.suivezContainer}>
        <h4 className={styles.suivezHeader}>Suivez nous sur les réseaux.</h4>
        <ContentChangeBtn
          className={styles.resizeBtn}
          firstContent={'NOUS SUIVRE'}
          secondContent={'JE DÉCOUVRE LES COUTURIERS'}
        />
      </div>
    </section>
  );
}
