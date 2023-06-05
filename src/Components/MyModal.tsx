import React from 'react';
import styles from './MyModal.module.css';
import MyProducts from './MyProducts';

type MyProps = {
  active: boolean;
  setActive: (args:boolean) => void;
};

export default function MyModal({ active, setActive }:MyProps):JSX.Element {
  return (
    <div className={styles.modal} onClick={() => setActive(false)}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <MyProducts />
      </div>
    </div>
  );
}
