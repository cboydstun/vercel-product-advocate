import Head from 'next/head'
import Image from 'next/image'
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
        <h1>
          Question Two
        </h1>
        <p>Reflections on Past</p>
      </main>
      <footer>
        <a href='/pageThree'>Next Question</a>
      </footer>
    </div>
  )
}
