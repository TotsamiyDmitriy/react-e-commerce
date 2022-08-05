import React from 'react';
import classes from './Catalog.module.css';

const Catalog = () => {
  return (
    <div className={classes.container}>
      <section className={classes.catalog}>
        <h2>Каталог товаров</h2>
        <div className={classes.catalog__wrapper}>
          <div className={classes.card}>
            <img src="./img/catalog/1.png" alt="" />
            <h3>Кровать TATRAN</h3>
            <p>Основание из полированной нержавеющей стали, придает оригинальный парящий эффект.</p>
            <span className={classes.price}>12 000 грн.</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Catalog;
