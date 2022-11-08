import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Scene from "../components/scene";

export default function Home() {
  return (
    <>
      <Head>
        <title>Marc React Portfolio</title>
        <meta name="description" content="Marc React Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Scene />
      </main>
    </>
  )
}
