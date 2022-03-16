import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import getConfig from 'next/config'
import { SELF_URL } from '../constants'

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>Some changes {SELF_URL}</h1>
      <pre>
        NEXT_PUBLIC_API_KEY: {process.env.NEXT_PUBLIC_API_KEY}
      </pre>
      <h3>{process.env.CONTEXT}</h3>
      <h3>{process.env.AUTH0_BASE_URL}</h3>
      <h3>another? {process.env.ANOTHER}</h3>
    </div>
  )
}

export default Home
