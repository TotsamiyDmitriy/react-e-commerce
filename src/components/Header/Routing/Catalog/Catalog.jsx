import React from 'react';
import classes from './Catalog.module.css';
import Navbar from '../../../Navbar/Navbar';

const Catalog = () => {
  return (
    <div className={classes.wrapper_header}>
      <div className={classes.container}>
        <header>
          <Navbar />
          <div className={classes.description}>
            <h1>Каталог</h1>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Catalog;
