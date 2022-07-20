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
        <div className={styles.grid}>
          <div className={styles.card}>
            <p className={styles.description}>Mom and Pop</p>
            <p>Small businesses are usually so focused on their niche that they are more or less uneducated in technical topics like web development.
              In my experience, the first thing they ask for is an example and the second thing they ask for is the price of any website. That said, smaller "mom and pop" 
              businesses respond really well to pre-made templates and white label customizations. It allows them to choose their website with all the features already included and
              then limit their expenditure on web development services. Therefore, as an engineering manager, I'd be seeking a stack with a ton of community support and well developed
              example projects to work with.
            </p>
          </div>
          <div className={styles.card}>
            <p className={styles.description}>NFT</p>
            <p>
              I am not involved in NFTs, but after some research I think the killer feature would be the image optimization built into the Image component.
              Obviously improved performance, visual stability, faster page loads, and asset flexibility would all benefit a landing page that was designed around a 
              collection of images. 
            </p>
          </div>
          <div className={styles.card}>
            <p className={styles.description}>Large Cap Marketing</p>
            <p>
              Large enterprises typically enjoy scientific management and labor specialization to make their business more efficient. An orgnization like this would have UI and UX designs 
              that would need to replicated with precise detail and a lot of effort. They would probably also employ front end developers as well as a seperate cadre of back end developers.
              Next.js expedites development through it's opinionated architecture and provides a lot of the tools needed to build a robust application out of the box. 
              Technically, the most attractive offering might be server side rendering allowing faster load times on a very complicated web development project with many different types of elements
              being presented simultaneously. 
            </p>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <Link href='/'>Home</Link>
      </footer>
    </div>
  )
}
