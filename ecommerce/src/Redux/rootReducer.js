import { combineReducers } from "redux";

import userReducer from "./User/user.reducer";
import productsReducer from "./Product.js/product.reducer";

export default combineReducers({
    user:userReducer,
    productsData:productsReducer   
})