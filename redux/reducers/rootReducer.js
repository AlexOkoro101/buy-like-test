import requestReducer from './requestReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    user: requestReducer
});

export default rootReducer;