import React, { useState } from 'react';
import {
  BrowserRouter as Router, Routes, Route, NavLink
} from 'react-router-dom';
import styles from './MyHeader.module.css';
import Sandwich from './sandwich';
import Main from '../main';
import MyModal from './MyModal';
import MyProducts from './MyProducts';
import Users from './Users';
import UserPage from './UserPage';
import MainPage from './mainPage/mainPage';

export default function MyHeader(): JSX.Element {
  const [modalActive, setModalActive] = useState(false);
  return (
    <Router>
    <div className={styles.header}>
      <NavLink className={styles.navLink} to="/hwmain">Main</NavLink>
      <NavLink className={styles.navLink} to="/sandwich">Sandwich</NavLink>
      <button type="button" className={styles.navLink} onClick={() => setModalActive(true)}>Fetch</button>
      <NavLink className={styles.navLink} to="/users">Users</NavLink>
    </div>
    <hr className={styles.line} />
    {modalActive && <MyModal setActive={setModalActive} component={<MyProducts />} />}
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/sandwich" element={<Sandwich />} />
      <Route path="/hwmain" element={<MainPage />} />
      <Route path="/users" element={<Users />}>
        <Route path=":userId" element={<UserPage />} />
      </Route>
    </Routes>
    </Router>
  );
}
