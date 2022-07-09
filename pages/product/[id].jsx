import React,{useState} from 'react'
import styles from '../../styles/Product.module.css'
import Image from 'next/image'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../redux/cartSlice'

const Product = ({product}) => {
    let newprice = Number(product.price)
    const [size, setSize] = useState(0)
    const [quantity, setQuantity] = useState(1)
    const [prices, setPrices] = useState(newprice)
    const dispatch = useDispatch()
  
    const handleSize = (sizeIndex) => {
      const sprice = [newprice, newprice + 50, newprice + 100]
      setPrices(sprice[sizeIndex])
    };

    const handleClick = () => {
      dispatch(addProduct({...product, prices, quantity}))
    }

  return (
      <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.imgContainer}>
                <Image src={product.images[0].src} layout='fill' objectFit='contain' />
            </div>
          </div>
          <div className={styles.right}>
              <h1 className={styles.title}>{product.name}</h1>
              <span className={styles.price}>&#8381;{prices}</span>
              <p className={styles.desc}>{product.short_description}</p>
              <h3 className={styles.choose}>Выберите размер</h3>
              <div className={styles.sizes}>
                <div className={styles.size} onClick={() => handleSize(0)}>
                    <Image src='/img/size.png' layout='fill' alt='' />
                    <span className={styles.number}>Маленькая</span>
                </div>
                <div className={styles.size} onClick={() => handleSize(1)}>
                    <Image src='/img/size.png' layout='fill' alt='' />
                    <span className={styles.number}>Средняя</span>
                </div>
                <div className={styles.size} onClick={() => handleSize(2)}>
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
                <input onChange={(e)=>setQuantity(e.target.value)} type='number' defaultValue={1} className={styles.quantity} />
                <button className={styles.button} onClick={() => handleClick()}>В корзину</button>
              </div>
          </div>
      </div>
  )
}

export default Product

export const getServerSideProps = async ({params}) => {

  const res = await axios.get(`https://${process.env.API_URL}/api/products/${params.id}`)
  return {
    props: {
      product: res.data
    }
  }
}