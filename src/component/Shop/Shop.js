import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActioins';
import Product from '../Product/Product';

const Shop = (props) => {
    console.log(props)
    const {products,addToCart} = props;
    return (
        <div>
            <h1>This is shop component</h1>
            {
                products.map(pt => <Product products={pt} key={pt.id} addToCart={addToCart}></Product>)
            }
        </div>
    );
};

const mapStateToProps  = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = {
    addToCart: addToCart
}

// connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(Shop)

export default connect( mapStateToProps, mapDispatchToProps)(Shop);