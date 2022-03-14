import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <pre>
        {process.env.API_KEY || 'NOT_FOUND'}
      </pre>
    </div>
  )
}

export default Home
