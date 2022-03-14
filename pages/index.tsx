import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import getConfig from 'next/config'

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>Some changes</h1>
      <pre>
        {process.env.NEXT_PUBLIC_API_KEY}
      </pre>
    </div>
  )
}

export default Home
