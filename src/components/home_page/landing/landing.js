import Link from 'next/link';
import Image from 'next/image';
import TopBanner from './top_banner/top_banner';
import Logo from '@/components/shared/logo/logo';
import {
  BasicBtn,
  RoundBtn,
  AscendingRadiusBtn,
} from '@/components/shared/buttons/buttons';
import styles from './landing.module.css';

export default function Landing() {
  return (
    <section className={styles.landingContainer}>
      <TopBanner />
      <div class={styles.imageLayer}>
        <div className={styles.topRow}>
          <div className={styles.btnLinkGroup}>
            <BasicBtn className={styles.yellowBtn}>CRÉER MON VÊTEMENT</BasicBtn>
            <Link
              className={styles.topRowLink}
              href=''>
              POURQUOI ?
            </Link>
            <Link
              className={styles.topRowLink}
              href=''>
              NOTRE HISTOIRE
            </Link>
          </div>
          <Logo className={styles.topRowLogo} />
          <RoundBtn className={`${styles.yellowBtn} ${styles.topRowProfileBtn}`}>
            <Image
              src='/images/profil.png'
              width='18'
              height='18'
            />
          </RoundBtn>
        </div>
        <header className={styles.headerContainer}>
          <h1>La mode sur-mesure, équitable et accessible.</h1>
          <p className={styles.subHeader}>
            Lorem ipsum dolor sit amet. Ut sint cumque eum laborum vitae At voluptatem
            quos qui exercitationem.
          </p>
          <AscendingRadiusBtn className={styles.yellowBtn}>
            JE DÉCOUVRE LES COUTURIERS
          </AscendingRadiusBtn>
        </header>
        <BasicBtn className={styles.chatBtn}>
          <Image
            src='/images/chat.png'
            width='25'
            height='25'
          />
        </BasicBtn>
      </div>
    </section>
  );
}
