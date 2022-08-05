import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={classes.Navbar}>
      <div className={classes.logo}>
        <NavLink to="../">Интерьер.</NavLink>
      </div>
      <div className={classes.search__block}>
        <input type="search" placeholder="Поиск" />
      </div>
      <ul className={classes.list__nav}>
        <li className={classes.item__nav}>
          <NavLink to="/catalog">Каталог</NavLink>
        </li>
        <li className={classes.item__nav}>
          <NavLink to="/cart">Корзина</NavLink>
        </li>
      </ul>
      <div className={classes.nav__mobile}>
        <div className={classes.wrapper__img}>
          <NavLink to="/">
            <img src="./img/icon/1.svg" alt="" />
          </NavLink>
        </div>
        <div className={classes.wrapper__img}>
          <NavLink to="/catalog">
            <img src="./img/icon/3.svg" alt="" />
          </NavLink>
        </div>
        <div className={classes.wrapper__img}>
          <NavLink to="/cart">
            <img src="./img/icon/2.svg" alt="" />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
