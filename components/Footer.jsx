import React from 'react'
import styles from '../styles/Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { BsWhatsapp, BsTelegram } from "react-icons/bs";
import { FaVk } from "react-icons/fa";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item} style={{flexDirection: 'column'}}>
        <div className={styles.imgWrapper}>
        <Image src='/img/logo.png' alt='logo' width='160px' height='69px' objectFit='contain'></Image>
        </div>
      <p className={styles.desc}>Магазин Пицца шоп 2022</p>
      <div className={styles.link}>
      <Link href={'/'}>Политика конфиденциальности</Link>
      </div>
      </div>
      <div className={styles.item}>
        <div className={styles.listWrapper}>
          <ul className={styles.list}>
            <li className={styles.listItem}>Меню</li>
            <li className={styles.listItem}>О доставке</li>
            <li className={styles.listItem}>Акции</li>
            <li className={styles.listItem}>Адреса магазинов</li>
          </ul>
        </div>
        <div className={styles.listWrapper}>
          <ul className={styles.list}>
            <li className={styles.listItem}>О компании</li>
            <li className={styles.listItem}>Франшиза</li>
            <li className={styles.listItem}>Аренда помещений</li>
            <li className={styles.listItem}>Новым поставщикам</li>
          </ul>
        </div>
        <div className={styles.listWrapper}>
          <ul className={styles.list}>
            <li className={styles.listItem}>Пицца</li>
            <li className={styles.listItem}>Роллы</li>
            <li className={styles.listItem}>Сеты</li>
            <li className={styles.listItem}>Суши</li>
          </ul>
        </div>
      </div>
      <div className={styles.icons}>
        <div>
        <BsWhatsapp />
        </div>
        <div>
        <BsTelegram />
        </div>
        <div>
        <FaVk />
        </div>
      </div>
    </div>
  )
}

export default Footer