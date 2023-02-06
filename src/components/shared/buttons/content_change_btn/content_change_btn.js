import styles from './content_change_btn.module.css';
import { useState, useEffect } from 'react';

export default function ContentChangeBtn({ className, firstContent, secondContent }) {
  const [content, setContent] = useState(firstContent);

  return (
    <button
      onMouseOver={() => setContent(secondContent)}
      onMouseLeave={() => setContent(firstContent)}
      className={`${styles.button} ${className}`}>
      <p>{content}</p>
      <div className={styles.radius}></div>
    </button>
  );
}
