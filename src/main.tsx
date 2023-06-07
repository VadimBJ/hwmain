import React from 'react';
import bground from './img/bgMain.jpg';
import styles from './main.module.css';

export default function main():JSX.Element {
  return (
    <div className={styles.mainBody}>
      <img src={bground} alt="bgroud" className={styles.mainImg} />
      <p className={styles.mainText}>MAIN PAGE</p>
      <p className={styles.secondText}>... made for my home work presentation</p>
    </div>
  );
}
