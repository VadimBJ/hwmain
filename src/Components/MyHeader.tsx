import React, { useState } from 'react';
import {
  BrowserRouter as Router, Routes, Route, NavLink
} from 'react-router-dom';
import styles from './MyHeader.module.css';
import Sandwich from './sandwich';
import Main from '../main';
import MyModal from './MyModal';
import MyProducts from './MyProducts';

export default function MyHeader(): JSX.Element {
  const [modalActive, setModalActive] = useState(false);
  return (
    <Router>
    <div className={styles.header}>
      <NavLink className={styles.navLink} to="/hwmain">Main</NavLink>
      <NavLink className={styles.navLink} to="/sandwich">Sandwich</NavLink>
      <button type="button" className={styles.navLink} onClick={() => setModalActive(true)}>Fetch</button>
    </div>
    <hr className={styles.line} />
    {modalActive && <MyModal setActive={setModalActive} component={<MyProducts />} />}
    <Routes>
      <Route path="/hwmain" element={<Main />} />
      <Route path="/sandwich" element={<Sandwich />} />
    </Routes>
    </Router>
  );
}
