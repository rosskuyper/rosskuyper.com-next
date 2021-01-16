import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Intro} from '../sections/home/Intro/Intro'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ross Kuyper</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <div className={styles.main}>
        <Intro />
      </div>
    </>
  )
}