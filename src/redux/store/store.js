import cartReducers from "../reduceers/cartReducers";

const { createStore } = require("redux");

export const store = createStore(cartReducers);