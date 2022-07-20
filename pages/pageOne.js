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
            <p className={styles.description}>Me Like:</p>
            <ul>
              <li>Hop on a Zoom call to do a product demo</li>
              <li>Empathize with customers</li>
              <li>Recommend to customers the Vercel plan best suited for them</li>
              <li>Attend weekly enablement meetings to level up your product and sales knowledge</li>
            </ul>
          </div>
          <div className={styles.card}>
            <p className={styles.description}>Me Dont Like:</p>
            <ul>
              <li>Create queries to look at a prospect's typical Vercel usage</li>
              <li>Evaluate OSS sponsorship applications</li>
              <li>Research and organize notes to ensure Account Executives are prepared for calls</li>
              <li>Organize, Schedule and book meetings for Account Executives with prospects</li>
            </ul>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <Link href='/pageTwo'>Next Question</Link>
      </footer>
    </div>
  )
}
