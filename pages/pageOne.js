import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function PageOne() {
  return (
    <div>
      <Head>
        <title>Question One</title>
        <meta name="description" content="First Question" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Question One
        </h1>
        <p className={styles.description}>My Work Preferences</p>
        <div className={styles.grid}>
          <div className={styles.card}>
            <p className={styles.description}>Me Like</p>
            <ul>
              <li>item</li>
              <li>item</li>
              <li>item</li>
            </ul>
          </div>
          <div className={styles.card}>
            <p className={styles.description}>Me Dont Like</p>
            <ul>
              <li>item</li>
              <li>item</li>
              <li>item</li>
            </ul>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <Link href='/pLinkgeTwo'>Next Question</Link>
      </footer>
    </div>
  )
}
