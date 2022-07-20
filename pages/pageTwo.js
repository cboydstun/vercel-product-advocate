import Head from 'next/head'
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
            <p className={styles.description}>What are you looking to learn or do more of?</p>
            <p>Acquire a real expertise with a certain technology so that I can empower others to make awesome web experiences.</p>
          </div>
          <div className={styles.card}>
            <p className={styles.description}>Whats left the biggest positive impression on you?</p>
            <p>I got into full stack web development to be an internet entrepeneur. While reading about traction and venture capital and all the other topics I came across a Quora opinion piece.
            <br />
            It explained that founders can be distrusting and jaded people who are convinced that only they can solve a certain problem.
            <br />
            The article continued that any person capable, intelligent, and driven enough to learn the skills required to successfully launch a company has a much more comfortable career working for someone else.
            <br />
            That is the situation I have found myself in and I am loving it! 
            </p>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <Link href='/pageThree'>Next Question</Link>
      </footer>
    </div>
  )
}
