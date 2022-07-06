import React,{useState} from 'react'
import styles from '../../styles/Product.module.css'
import Image from 'next/image'

const Product = () => {
    const [size, setSize] = useState(0)
    const Pizza = {
        id: 1,
        img: '/img/pizza.png',
        name: 'CAMPAGNOLA',
        price: [19.9,23.9, 27.9],
        desc: 'Ut rhoncus aliquet ante, non ullamcorper leo bibendum sed. Lorem ipsum dolor sit amet'
    }

  return (
      <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.imgContainer}>
                <Image src={Pizza.img} layout='fill' objectFit='contain' />
            </div>
          </div>
          <div className={styles.right}>
              <h1 className={styles.title}>{Pizza.name}</h1>
              <span className={styles.price}>${Pizza.price[size]}</span>
              <p className={styles.desc}>{Pizza.desc}</p>
              <h3 className={styles.choose}>Выберите размер</h3>
              <div className={styles.sizes}>
                <div className={styles.size} onClick={() => setSize(0)}>
                    <Image src='/img/size.png' layout='fill' alt='' />
                    <span className={styles.number}>Маленькая</span>
                </div>
                <div className={styles.size} onClick={() => setSize(1)}>
                    <Image src='/img/size.png' layout='fill' alt='' />
                    <span className={styles.number}>Средняя</span>
                </div>
                <div className={styles.size} onClick={() => setSize(2)}>
                    <Image src='/img/size.png' layout='fill' alt='' />
                    <span className={styles.number}>Большая</span>
                </div>
              </div>
              <h3 className={styles.choose}>Выберите дополнительные игредиенты</h3>
              <div className={styles.ingredients}>
                  <div className={styles.option}>
                    <input
                        type='checkbox'
                        id='double'
                        name='double'
                        className={styles.checkbox}
                        />
                    <label htmlFor='double'>двойная начинка</label>
                  </div>
                  <div className={styles.option}>
                    <input
                        type='checkbox'
                        id='grile'
                        name='grile'
                        className={styles.checkbox}
                        />
                    <label htmlFor='grile'>Острая</label>
                  </div>
                  <div className={styles.option}>
                    <input
                        type='checkbox'
                        id='excheese'
                        name='exchees'
                        className={styles.checkbox}
                        />
                    <label htmlFor='excheese'>Много сыра</label>
                  </div>
              </div>
              <div className={styles.add}>
                <input type='number' defaultValue={1} className={styles.quantity} />
                <button className={styles.button}>В корзину</button>
              </div>
          </div>
      </div>
  )
}

export default Product