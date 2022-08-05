import React from 'react';
import classes from './Categories.module.css';

const Categories = () => {
  return (
    <div className={classes.container}>
      <section className={classes.categories}>
        <h2>Мебель для ...</h2>
        <div className={classes.wrapper_catalog}>
          <div className={classes.row}>
            <div className={classes.catalog__card}>
              <div className={classes.position}>
                <img src="/img/categories/relaxation.png" alt="" />
                <span>Отдыха</span>
              </div>
            </div>
            <div className={classes.catalog__card}>
              <div className={classes.position}>
                <img src="/img/categories/work.png" alt="" />
                <span>Работы</span>
              </div>
            </div>
          </div>
          <div className={classes.row}>
            <div className={classes.catalog__card}>
              <div className={classes.position}>
                <img src="/img/categories/kitchen.png" alt="" />
                <span>Кухни</span>
              </div>
            </div>
            <div className={classes.catalog__card}>
              <div className={classes.position}>
                <img src="/img/categories/childroom.png" alt="" />
                <span>Детской</span>
              </div>
            </div>
            <div className={classes.catalog__card}>
              <div className={classes.position}>
                <img src="/img/categories/bathroom.png" alt="" />
                <span>Ванной</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categories;
