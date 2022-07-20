import Head from 'next/head'
import Image from 'next/image'
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
        <h1>
          Question Four
        </h1>
        <p>Practice Email</p>
      </main>
      <footer>
        <a href='/pageFive'>Next Question</a>
      </footer>
    </div>
  )
}
