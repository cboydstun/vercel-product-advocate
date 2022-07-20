import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function PageFour() {
  return (
    <div>
      <Head>
        <title>Question Five</title>
        <meta name="description" content="Fifth Question" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <h1 className={styles.title}>
          Question Five
        </h1>
        <p className={styles.description}>Personal Recommendation</p>
      </main>
      <footer className={styles.footer}>
        <Link href='/'>Home</Link>
      </footer>
    </div>
  )
}
