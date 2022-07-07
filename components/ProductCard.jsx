import React from 'react'
import styles from '../styles/ProductCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

const ProductCard = ({pizza}) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${pizza.id}`}>
        <Image src={pizza.images[0].src} alt='product' width='500' height='500' />
        </Link>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>&#8381;{pizza.price}</span>
        <p className={styles.desc}>
        {pizza.short_description}
        </p>
    </div>
  )
}

export default ProductCard