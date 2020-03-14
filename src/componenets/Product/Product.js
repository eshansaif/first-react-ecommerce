import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCartArrowDown } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    console.log(props);
    const {img, name, seller, stock, price} = props.product;
    return (
        <div className="product">
            <div className="product-image">
                <img src={props.product.img} alt=""/>
            </div>
            <div className="product-details">
                 <h4 className="product-name">{props.product.name}</h4>
                 
                <p><small>By: {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock - Order soon</small></p>

                <button className="product-button" onClick={() => props.handleAddProduct(props.product)}> <FontAwesomeIcon icon={faCartArrowDown} /> add to cart</button>
            </div>
            
        </div>
    );
};

export default Product;