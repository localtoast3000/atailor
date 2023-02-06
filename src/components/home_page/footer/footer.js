import styles from './footer.module.css';
import { BasicBtn } from '@/components/shared/buttons/buttons';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.rearLayer}>
        <Image
          className={styles.backgroundLogo}
          src='/images/logo footer.png'
          width='600'
          height='200'
          alt='footer logo'
        />
      </div>
      <div className={styles.sections}>
        <div className={styles.firstSection}>
          <h5>Lorem ipsum newsletter.</h5>
          <div className={styles.emailInputWrapper}>
            <input
              className={styles.emailInput}
              placeholder='Email'
              type='text'
            />
            <BasicBtn className={styles.inputBtn}>JE M'INSCRIS</BasicBtn>
          </div>
          <p className={styles.copyRight}>
            ATAILOR © All rights reserved. Termes & Conditions
          </p>
        </div>
        <div className={styles.secondSection}>
          {Array(3)
            .fill('')
            .map((_, i) => (
              <div
                className={styles.footerLinks}
                key={i}>
                <h6>Atailor</h6>
                <ul>
                  <li>
                    <Link
                      className={styles.footerLink}
                      href=''>
                      Menu 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={styles.footerLink}
                      href=''>
                      Menu 2
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={styles.footerLink}
                      href=''>
                      Menu 3
                    </Link>
                  </li>
                </ul>
              </div>
            ))}
        </div>
        <div className={styles.thirdSection}>
          <div className={styles.mediaBtns}>
            <BasicBtn className={styles.mediaBtn}>
              <Image
                className={styles.mediaImage}
                src='/images/fb.png'
                width='100'
                height='100'
                alt='facebook'
              />
            </BasicBtn>
            <BasicBtn className={styles.mediaBtn}>
              <Image
                className={styles.mediaImage}
                src='/images/insta.png'
                width='100'
                height='100'
                alt='instagram'
              />
            </BasicBtn>
            <BasicBtn className={styles.mediaBtn}>
              <Image
                className={styles.mediaImage}
                src='/images/pinterest.png'
                width='100'
                height='100'
                alt='pinterest'
              />
            </BasicBtn>
            <BasicBtn className={styles.mediaBtn}>
              <Image
                className={styles.mediaImage}
                src='/images/mail.png'
                width='100'
                height='100'
                alt='mail'
              />
            </BasicBtn>
          </div>
        </div>
      </div>
    </footer>
  );
}
