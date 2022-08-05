import React from 'react';
import Header from '../components/Header/Routing/Home/Home';
import Categories from '../components/Categories/Categories';
import Catalog from '../components/Catalog/Catalog';

const Home = () => {
  return (
    <div>
      <Header />

      <Categories />
      <Catalog />
    </div>
  );
};

export default Home;
