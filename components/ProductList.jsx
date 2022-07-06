import React from 'react'
import styles from '../styles/ProductList.module.css'
import ProductCard from './ProductCard'

const ProductList = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Лучшая пицца в городе</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus aliquet ante, non ullamcorper leo bibendum sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae condimentum massa, id finibus odio. In molestie, velit nec posuere semper, est diam molestie turpis, in facilisis nisi augue at quam.</p>
        <div className={styles.wrapper}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    </div>
  )
}

export default ProductList