import Head from 'next/head'
import Image from 'next/image'
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
        <h1>
          Question Five
        </h1>
        <p>Personal Recommendation</p>
      </main>
      <footer>
        <a href='/'>Home</a>
      </footer>
    </div>
  )
}
