import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActioins";


const initialState = {
    cart: [],
    products: [{name: 'Lenove', id : 1},
    {name: 'Hp', id : 2},
    {name: 'Dell', id : 3},
    {name: 'Tochiba', id : 4}]
}

const cartReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            // console.log(action);
            const newId = action.id;
            const newItem = {
                productId: action.id,
                name: action.name,
                cartId: state.cart.length + 1
            }
            const newCart = [ ...state.cart, newItem ]
            return {...state, cart:newCart};

        case REMOVE_FROM_CART:
            const cartId = action.cartId;
            const remainingCart = state.cart.filter(item => item.cartId !== cartId);
            return {...state, cart: remainingCart }
        default:
            return state;
    }
}

export default cartReducers;