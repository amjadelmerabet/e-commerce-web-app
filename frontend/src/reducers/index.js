import { combineReducers } from "redux";

import UsersReducer from './users';
import ProductsReducer from './products';

export default combineReducers({ UsersReducer, ProductsReducer })