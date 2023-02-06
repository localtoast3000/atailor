import styles from './qa_card.module.css';
import { RoundBtn } from '@/components/shared/buttons/buttons';
import { use, useEffect, useState } from 'react';

export default function QaCard({ className, question, answer }) {
  const [revealAnswer, setRevealAnswer] = useState(false);

  return (
    <div className={`${styles.cardContainer} ${className}`}>
      <div className={styles.questionWrapper}>
        <p className={styles.question}>{question}</p>
        <RoundBtn
          diameter={30}
          onClick={() => setRevealAnswer((val) => !val)}
          className={styles.btn}>
          {revealAnswer ? (
            <p style={{ transform: 'translateY(-1px)' }}>-</p>
          ) : (
            <p style={{ transform: 'translateY(1px)' }}>+</p>
          )}
        </RoundBtn>
      </div>
      <div
        className={styles.answer}
        style={{
          height: revealAnswer ? 'auto' : 0,
          marginTop: revealAnswer ? 20 : 0,
          transition: 'all 0.2s ease-in',
        }}>
        <p
          style={{
            display: revealAnswer ? 'block' : 'none',
            opacity: 1,
          }}>
          {answer}
        </p>
      </div>
    </div>
  );
}
