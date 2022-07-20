import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function PageTwo() {
  return (
    <div>
      <Head>
        <title>Question Two</title>
        <meta name="description" content="Second Question" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <h1 className={styles.title}>
          Question Two
        </h1>
        <p className={styles.description}>Reflections on Past</p>
        <div className={styles.grid}>
          <div className={styles.card}>
            <p className={styles.description}>Next Role</p>
            <p>What are you looking to learn or do more of?</p>
          </div>
          <div className={styles.card}>
            <p className={styles.description}>Past Impression</p>
            <p>What's left the biggest positive impression on you? </p>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <Link href='/pageThree'>Next Question</Link>
      </footer>
    </div>
  )
}
