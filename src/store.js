import { createStore } from 'redux';
import userReducer from './store/reducer/reducer';
const store =createStore(userReducer);
export default store;