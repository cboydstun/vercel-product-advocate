import Head from 'next/head'
import Image from 'next/image'
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
        <h1>
          Question Three
        </h1>
        <p>Using Next.js</p>
      </main>
      <footer>
        <a href='/pageFour'>Next Question</a>
      </footer>
    </div>
  )
}
