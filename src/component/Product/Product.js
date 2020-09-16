import React from 'react';

const Product = (props) => {
    const {addToCart,products} = props;
    return (
        <div  style={{border:'1px solid tomato'}}>
            <h4>{products.name}</h4>
            <button onClick={() => addToCart(products.id, products.name)}>add to cart</button>
        </div>
    );
};

export default Product;