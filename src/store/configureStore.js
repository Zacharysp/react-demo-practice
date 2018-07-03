import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import expensesReducer from '../reducer/expenses';
import filterReducer from '../reducer/filters';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filterReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};
 