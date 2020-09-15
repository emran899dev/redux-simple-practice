import React from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const products = [
        {name: 'Lenove', id : 1},
        {name: 'Hp', id : 2},
        {name: 'Dell', id : 3},
        {name: 'Tochiba', id : 4}
    ]
    return (
        <div>
            <h1>This is shop component</h1>
            {
                products.map(pt => <Product products={pt}></Product>)
            }
        </div>
    );
};

export default Shop;