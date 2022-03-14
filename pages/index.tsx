import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import getConfig from 'next/config'

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <pre>
        {process.env.API_KEY || process.env.NEXT_PUBLIC_API_KEY}
        Server runtime: {serverRuntimeConfig.API_KEY}
      </pre>
    </div>
  )
}

export default Home
