import Head from 'next/head'
import Image from 'next/image'
import ProductList from '../components/ProductList'
import Slider from '../components/Slider'
import styles from '../styles/Home.module.css'
import axios from 'axios'

export default function Home({productsList}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza </title>
        <meta name="description" content="Pizza shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider />
      <ProductList productsList={productsList} />
    </div>
  )
}

export const getServerSideProps = async () => {

  const res = await axios.get(`http://localhost:3000/api/products`)
  return {
    props: {
      productsList: res.data
    }
  }
}