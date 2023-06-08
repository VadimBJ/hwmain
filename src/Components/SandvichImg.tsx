import React, { useEffect, useState } from 'react';
import styles from './SandvichImg.module.css';
import bread from '../img/bread.png';
import cheese from '../img/cheese.png';
import salad from '../img/salad.png';
import sausage from '../img/sausage.png';
/* eslint-disable react/no-array-index-key */

type MyProps = {
  ingredient:string[]
};
export default function SandvichImg({ ingredient }:MyProps):JSX.Element {
  const [links, setLinks] = useState<string[]>([]);
  function takeLink(word:string):void {
    let link:string = '';
    switch (word) {
      case 'Хлеб':
        link = bread;
        break;
      case 'Сыр':
        link = cheese;
        break;
      case 'Колбаса':
        link = sausage;
        break;
      case 'Зелень':
        link = salad;
        break;
      default:
        return;
    }
    setLinks((prevLinks) => [...prevLinks, link]);
  }

  useEffect(() => {
    setLinks([]);
    ingredient.map((ingr) => (
      takeLink(ingr)
    ));
  }, [ingredient.length]);

  return (
    <div className={styles.sandwichImg}>
        {links.map((link, index) => (
         <img
           key={index}
           src={link}
           alt={`Изображение ${index}`}
           className={styles.ingr}
           style={{
            zIndex: index,
        }}
         />
         ))}
    </div>
  );
}
