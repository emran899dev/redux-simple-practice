import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActioins";


const initialState = {
    cart: [],
    product: []
}

const cartReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                cart: [...state.cart, action.id]
            };

        case REMOVE_FROM_CART:
            const id = action.id;
            const remainingCart = state.cart.filter(item => item !== id);
            return { cart: remainingCart }
        default:
            return state;
    }
}

export default cartReducers;