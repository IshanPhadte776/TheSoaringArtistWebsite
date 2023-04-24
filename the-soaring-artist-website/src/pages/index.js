import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'


export default function Home() {
  return (
    <>
      <Head>
        <title> The Soaring Artist</title>
      </Head>
      <main className={styles.main}>

      <Header> </Header>

      <Footer> </Footer>

      </main>
    </>
  )
}
