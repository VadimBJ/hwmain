import React from 'react';
import styles from './MyModal.module.css';
import MyProducts from './MyProducts';

type MyProps = {
  setActive: (args:boolean) => void;
};

export default function MyModal({ setActive }:MyProps):JSX.Element {
  return (
    <div className={styles.modal} role="button" tabIndex={0} onClick={() => setActive(false)}>
      <div className={styles.modalContent} role="button" tabIndex={0} onClick={(e) => e.stopPropagation()}>
        <MyProducts />
      </div>
    </div>
  );
}
