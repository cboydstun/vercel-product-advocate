import Head from 'next/head'
import Link from 'next/link'
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
        <h1 className={styles.title}>
          Question Four
        </h1>
        <p className={styles.description}>Practice Email</p>
        <div className={styles.grid}>
          <div className={styles.card}>
            <p className={styles.description}>Do I need Enterprise?</p>
            <p>Hi Joe,</p>
            <br />
            <p>Thanks for reaching out! It's great to hear that you have a new site launching soon and even better to hear that you're
              considering using the best technology available - Next.js to build and Vercel to host! You can find a link to more information
              about our enterprise features here:
              <a href="https://vercel.com/enterprise"> Vercel Enterprise</a>.</p>
            <br />
            <p>We would love to help you make the right decision! Would you have some time to discuss your upcoming project requirements and how we can help?
              Please click the link below to schedule a call and I hope to hear from you soon!
            </p>
            <br />
            <p>Thanks,</p>
            <p>Chris</p>
            <p><a href='www.schedulesometime.com'>Click Here to Schedule</a></p>
          </div>
          <div className={styles.card}>
            <p className={styles.description}>Enterprise or Pro?</p>
            <p>Good morning Melissa,</p>
            <br />
            <p>It's so nice to meet you and wonderful to hear that you're looking to re-platform your site with the best React-based framework and hosting available from Vercel!</p>
            <p>We would love to help you evaluate your needs as soon as you have an opportunity! Please go ahead check out some of the features of Vercel Enterprise<a href="https://vercel.com/enterprise"> at this link</a>.</p>
            <br />
            <p>When would be the best time for us to meet to discuss your particular needs? I know you've got an important Q3 deadline to meet!</p>
            <br />
            <p>Please click the link below to schedule a call and I hope to hear from you soon!</p>


            <br />
            <p>Thanks,</p>
            <p>Chris</p>
            <p><a href='www.schedulesometime.com'>Click Here to Schedule</a></p>
          </div>
        </div>

      </main>
      <footer className={styles.footer}>
        <Link href='/pageFive'>Next Question</Link>
      </footer>
    </div>
  )
}
