import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <footer>
          <div className={classes.logo}>Интерьер.</div>
          <nav>
            <div className={classes.column}>
              <h3>Меню</h3>
              <ul className={classes.navigation__footer}>
                <li>Главная</li>
                <li>Каталог</li>
                <li>Корзина</li>
              </ul>
            </div>
          </nav>
          <nav>
            <div className={classes.column}>
              <h3>Контакты</h3>
              <ul>
                <li>+38 098 800 80 80 </li>
                <li>help@interier.com</li>
                <li>
                  <ul>
                    <li>
                      <img src="./img/footer/instagram.svg" alt="" />
                    </li>
                    <li>
                      <img src="./img/footer/twitter.svg" alt="" />
                    </li>
                    <li>
                      <img src="./img/footer/facebook.svg" alt="" />
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
          <div className={classes.email}>
            <span>Получайте наши новости и обновления</span>
            <input type="email" placeholder="Email Address" />
            <div className={classes.button__email}>
              <span>Подписаться</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
