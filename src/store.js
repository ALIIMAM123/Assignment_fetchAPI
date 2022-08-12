import {createStore, combineReducers, compose ,applyMiddleware} from "redux";
import rootReducers from "./TableRedux/Reducer"
import TableReducer from "./TableRedux/Reducer/TableReducer"
import thunk from "redux-thunk";


const middleware = applyMiddleware(thunk);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    rootReducer : rootReducers,
    table: TableReducer,

});

const store = createStore(reducers , composeEnhancers(middleware));

export default store;