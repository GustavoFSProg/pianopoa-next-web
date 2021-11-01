import type { NextPage } from 'next'
import Image from 'next/image'
import Header from '../components/Header/Header'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
    </div>
  )
}

export default Home
