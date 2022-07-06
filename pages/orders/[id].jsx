import Image from 'next/image'
import React from 'react'
import styles from '../../styles/Order.module.css'


const Order = () => {
    const status = 0;
  
    const statusClass = (index) => {
      if (index - status < 1) return styles.done;
      if (index - status === 1) return styles.inProgress;
      if (index - status > 1) return styles.undone;
    };
    return (
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.row}>
            <table className={styles.table}>
            <tbody>
              <tr className={styles.trTitle}>
                <th>Номер заказа</th>
                <th>Получатель</th>
                <th>Адрес</th>
                <th>Итого</th>
              </tr>
              <tr className={styles.tr}>
                <td>
                  <span className={styles.id}>129837819237</span>
                </td>
                <td>
                  <span className={styles.name}>John Doe</span>
                </td>
                <td>
                  <span className={styles.address}>Elton st. 212-33 LA</span>
                </td>
                <td>
                  <span className={styles.total}>$79.80</span>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
          <div className={styles.row}>
            <div className={statusClass(0)}>
              <Image src="/img/paid.png" width={30} height={30} alt="" />
              <span>Оплата</span>
              <div className={styles.checkedIcon}>
                <Image
                  className={styles.checkedIcon}
                  src="/img/checked.png"
                  width={20}
                  height={20}
                  alt=""
                />
              </div>
            </div>
            <div className={statusClass(1)}>
              <Image src="/img/bake.png" width={30} height={30} alt="" />
              <span>Подготовка</span>
              <div className={styles.checkedIcon}>
                <Image
                  className={styles.checkedIcon}
                  src="/img/checked.png"
                  width={20}
                  height={20}
                  alt=""
                />
              </div>
            </div>
            <div className={statusClass(2)}>
              <Image src="/img/bike.png" width={30} height={30} alt="" />
              <span>В пути</span>
              <div className={styles.checkedIcon}>
                <Image
                  className={styles.checkedIcon}
                  src="/img/checked.png"
                  width={20}
                  height={20}
                  alt=""
                />
              </div>
            </div>
            <div className={statusClass(3)}>
              <Image src="/img/delivered.png" width={30} height={30} alt="" />
              <span>Доставленно</span>
              <div className={styles.checkedIcon}>
                <Image
                  className={styles.checkedIcon}
                  src="/img/checked.png"
                  width={20}
                  height={20}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.wrapper}>
            <h2 className={styles.title}>Итоговая сумма</h2>
            <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>Итого:</b>$79.60
            </div>
            <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>Скидка:</b>$0.00
            </div>
            <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>Всего:</b>$79.60
            </div>
            <button disabled className={styles.button}>
              Оплатить
            </button>
          </div>
        </div>
      </div>
    );
  };

export default Order