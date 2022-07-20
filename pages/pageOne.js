import Head from 'next/head'
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
        <h1>
          Question One
        </h1>
        <p>My Work Preferences</p>
      </main>
      <footer>
        <a href='/pageTwo'>Next Question</a>
      </footer>
    </div>
  )
}
