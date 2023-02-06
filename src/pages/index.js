import Head from 'next/head';
import styles from '../styles/pages/index.module.css';
import {
  Landing,
  Summary,
  Why,
  Couturiers,
  Proposition,
  Avis,
  Faq,
  Footer,
} from '@/components/home_page/home_page';

export default function Home() {
  return (
    <>
      <Head>
        <title>atailor</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <link
          rel='icon'
          href='/images/favicon.png'
        />
      </Head>
      <main className={styles.mainContainer}>
        <Landing />
        <Summary />
        <Why />
        <Couturiers />
        <Proposition />
        <Avis />
        <Faq />
        <Footer />
      </main>
    </>
  );
}
