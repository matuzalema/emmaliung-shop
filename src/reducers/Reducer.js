import { combineReducers } from "redux";
import ProductsReducer from "./reducers-products";
import cartReducer from "./cartReducer";

const reducer = combineReducers({
  products: ProductsReducer,
  cartContent: cartReducer
});

export default reducer;
