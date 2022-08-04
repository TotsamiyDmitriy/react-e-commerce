import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="wrapper_header">
        <div className="container">
          <header>
            <nav>
              <div className="logo">Интерьер.</div>
              <div className="search__block">
                <input type="search" placeholder="Поиск" />
              </div>
              <ul>
                <li>Каталог</li>
                <li>Корзина</li>
              </ul>
            </nav>
            <div className="description">
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

      <div className="container">
        <section className="categories">
          <h2>Мебель для ...</h2>
          <div className="wrapper_catalog">
            <div className="row row-top">
              <div className="catalog__card">
                <div className="position">
                  <img src="/img/categories/relaxation.png" alt="" />
                  <span>Отдыха</span>
                </div>
              </div>
              <div className="catalog__card">
                <div className="position">
                  <img src="/img/categories/work.png" alt="" />
                  <span>Работы</span>
                </div>
              </div>
            </div>
            <div className="row row-bottom">
              <div className="catalog__card">
                <div className="position">
                  <img src="/img/categories/kitchen.png" alt="" />
                  <span>Кухни</span>
                </div>
              </div>
              <div className="catalog__card ">
                <div className="position">
                  <img src="/img/categories/childroom.png" alt="" />
                  <span>Детской</span>
                </div>
              </div>
              <div className="catalog__card ">
                <div className="position">
                  <img src="/img/categories/bathroom.png" alt="" />
                  <span>Ванной</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="container">
        <section className="catalog">
          <h2>Каталог товаров</h2>
          <div className="catalog__wrapper">
            <div className="card">
              <img src="./img/catalog/1.png" alt="" />
              <h3>Кровать TATRAN</h3>
              <p>
                Основание из полированной нержавеющей стали, придает оригинальный парящий эффект.
              </p>
              <span className="price">120 000 руб.</span>
            </div>
            <div className="card">
              <img src="./img/catalog/1.png" alt="" />
              <h3>Кровать TATRAN</h3>
              <p>
                Основание из полированной нержавеющей стали, придает оригинальный парящий эффект.
              </p>
              <span className="price">120 000 руб.</span>
            </div>
            <div className="card">
              <img src="./img/catalog/1.png" alt="" />
              <h3>Кровать TATRAN</h3>
              <p>
                Основание из полированной нержавеющей стали, придает оригинальный парящий эффект.
              </p>
              <span className="price">120 000 руб.</span>
            </div>
            <div className="card">
              <img src="./img/catalog/1.png" alt="" />
              <h3>Кровать TATRAN</h3>
              <p>
                Основание из полированной нержавеющей стали, придает оригинальный парящий эффект.
              </p>
              <span className="price">120 000 руб.</span>
            </div>
            <div className="card">
              <img src="./img/catalog/1.png" alt="" />
              <h3>Кровать TATRAN</h3>
              <p>
                Основание из полированной нержавеющей стали, придает оригинальный парящий эффект.
              </p>
              <span className="price">120 000 руб.</span>
            </div>
          </div>
        </section>
      </div>
      <div className="background">
        <div className="container">
          <footer>
            <div className="logo">Интерьер.</div>
            <nav>
              <div className="column">
                <h3>Меню</h3>
                <ul>
                  <li>Главная</li>
                  <li>Каталог</li>
                  <li>Корзина</li>
                </ul>
              </div>
            </nav>
            <nav>
              <div className="column">
                <h3>Контакты</h3>
                <ul>
                  <li>+7 908 800 80 80 </li>
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
            <div className="email">
              <span>Получайте наши новости и обновления</span>
              <input type="email" placeholder="Email Address" />
              <div className="button__email">
                <span>Подписаться</span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
