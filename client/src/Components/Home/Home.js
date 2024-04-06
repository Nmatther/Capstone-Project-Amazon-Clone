import React from 'react';
import { useState, useEffect } from 'react';
import { fetchAllProducts } from '../../API';
import './Home.css';
import Product from '../Product/Product';
import Header from '../Header/Header';

function Home() {

  const [products, setProducts] = useState([]);
  const topRow = products.slice(0, 2) || []
  const middleRow = products.slice(2,5) || []
  const bottomRow = products.slice(5,6)

  useEffect(() => {
    async function fetchData() {
      const  products  = await fetchAllProducts();
      console.log(products);
      setProducts(products);
    }
    fetchData();
  }, [])

  return (
    <>
    <Header />
    <div className="home">
      
      <div className="home__container">
      <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

      <div className="home__row">
        {topRow.map(product => <Product product={product} />)}
      </div>

      <div className="home__row">
      {middleRow.map(product => <Product product={product} />)}
      </div>

      <div className="home__row">
      {bottomRow.map(product => <Product product={product} />)}
      </div>

      </div>
     
    </div>
  
</>)}

export default Home

