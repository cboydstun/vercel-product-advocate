import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function PageFour() {
  return (
    <div>
      <Head>
        <title>Question Four</title>
        <meta name="description" content="Fourth Question" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <h1 className={styles.title}>
          Question Four
        </h1>
        <p className={styles.description}>Practice Email</p>
      </main>
      <footer className={styles.footer}>
        <Link href='/pageFive'>Next Question</Link>
      </footer>
    </div>
  )
}
