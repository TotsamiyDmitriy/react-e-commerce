import React from 'react';
import classes from './Home.module.css';
import Navbar from '../../../Navbar/Navbar';

const Home = () => {
  return (
    <div className={classes.wrapper_header}>
      <div className={classes.container}>
        <header>
          <Navbar />
          <div className={classes.description}>
            <h1>
              Всё, чего
              <br /> заслуживает ваш дом
            </h1>
            <span>Наша мебель — ваше отражение</span>
            <a href="#">Перейти в каталог</a>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Home;
