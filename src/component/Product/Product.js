import React from 'react';

const Product = (props) => {
    const {name, id} = props.products;
    return (
        <div  style={{border:'1px solid tomato'}}>
            <h4>{name}</h4>
            <button>add to cart</button>
        </div>
    );
};

export default Product;