import React from 'react';
import { useStateValue } from '../../StateProvider';
import "./Product.css";

function Product({product}) {
  const { id, title, image, price, rating } = product;
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  
  return (
    <div className='product'>
        <div className="div product__info">
            <p>{product.title}</p>
            <p className='product__price'>
                <small>$</small>
                <strong>{product.price}</strong>
            </p>
            <div className="product__rating">
                {Array(product.rating).fill().map((_, i) => (
                <p>⭐️</p>
                ))}  
            </div>
        </div>

        <img src={product.image} alt="" />

        <button onClick={ addToBasket }>Add to Basket</button>
    </div>
  )
};

export default Product