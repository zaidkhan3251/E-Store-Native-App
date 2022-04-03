import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';    
import CartReducer from './Reducers/CartReducer'; 


const Reducers=combineReducers({CartReducer});
const store = createStore(Reducers,applyMiddleware(thunk));
export default store;