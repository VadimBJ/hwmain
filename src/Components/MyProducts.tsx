import React, { useEffect, useState } from 'react';
import styles from './MyProducts.module.css';

export default function MyProducts():JSX.Element {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData():Promise<any> {
      const resp = await fetch('https://fakestoreapi.com/products?limit=10');
      const arr = await resp.json();
      setProducts(arr);
    }
    getData();
  }, []);

  type MyProduct = {
    id: number;
    title: string;
    category: string;
    description:string;
    price: number;
    rating: { rate: number, count: number };
    image: string;
  };

  return (
    <div className={styles.productContainer}>
      {products.map(({
        id, title, category, description, price, rating, image
      }:MyProduct) => (
        <div key={id} className={styles.product}>
          <p className={styles.category}>{category}</p>
          <div className={styles.title}>
            <img className={styles.image} src={image} alt="postimg" />
            <div className={styles.titleConteiner}>
              <h3 className={styles.titleText}>{title}</h3>
              <div className={styles.ratingPrice}>
              <p className={styles.price}>{price}$</p>
              <p className={styles.rating}>Rating<br />{rating.rate} ({rating.count})</p>
              </div>
            </div>
          </div>
          <p>{description}</p>
        </div>
      ))}
    </div>
  );
}
