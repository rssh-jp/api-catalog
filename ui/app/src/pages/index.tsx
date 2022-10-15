import { Grid } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import { Index } from '../components/pages'

const Home: NextPage = () => {
  return (
    <>
      <Index />
      <Grid></Grid>
    </>
  )
}

export default Home
