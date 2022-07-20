import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <h1 className={styles.title}>
          Welcome to my homework assignment
        </h1>
        <p>by Chris Boydstun</p>
      </main>
      <footer className={styles.footer}>
        <Link href="/pageOne">Click here for the first question</Link>
      </footer>
    </div>
  )
}
