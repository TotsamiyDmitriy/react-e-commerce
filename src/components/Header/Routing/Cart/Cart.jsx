import React from 'react';
import classes from './Cart.module.css';
import Navbar from '../../../Navbar/Navbar';

const Cart = () => {
  return (
    <div className={classes.wrapper_header}>
      <div className={classes.container}>
        <header>
          <Navbar />
          <div className={classes.description}>
            <h1>Корзина</h1>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Cart;
