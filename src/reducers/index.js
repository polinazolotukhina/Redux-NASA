import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import marsReducer from './marsReducer';

const rootReducer = combineReducers({
    routing: routerReducer,
    mars : marsReducer
});

export default rootReducer;
