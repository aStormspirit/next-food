import React from 'react'
import styles from '../styles/Cart.module.css'
import Image from 'next/image'
import {useDispatch, useSelector } from 'react-redux'


const Cart = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tbody>
          <tr className={styles.trTitle}>
            <th>Товар</th>
            <th>Название</th>
            <th>Дополнительно</th>
            <th>Цена</th>
            <th>Колличество</th>
            <th>Итого</th>
          </tr>
          {cart.products.map((product) => (
          <tr className={styles.tr} key={product.id}>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  src={product.images[0].src}
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </div>
            </td>
            <td>
              <span className={styles.name}>{product.name}</span>
            </td>
            <td>
              <span className={styles.extras}>
                {product.short_description}
              </span>
            </td>
            <td>
              <span className={styles.price}>&#8381;{product.prices}</span>
            </td>
            <td>
              <span className={styles.quantity}>{product.quantity}</span>
            </td>
            <td>
              <span className={styles.total}>&#8381;{product.prices * product.quantity}</span>
            </td>
          </tr>
          ))}
          </tbody>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Итоговая цена</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Итого:</b>&#8381;{cart.total}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Скидка:</b>&#8381;0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Всего:</b>&#8381;{cart.total}
          </div>
          <button className={styles.button}>Заказать сейчас!</button>
        </div>
      </div>
    </div>
  )
}

export default Cart