import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function PageThree() {
  return (
    <div>
      <Head>
        <title>Question Three</title>
        <meta name="description" content="Third Question" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <h1 className={styles.title}>
          Question Three
        </h1>
        <p className={styles.description}>Using Next.js</p>
        <p>Temporary Redirect - BRB SOON!</p>
      </main>
      <footer className={styles.footer}>
        <Link href='/pageFour'>Next Question</Link>
      </footer>
    </div>
  )
}
