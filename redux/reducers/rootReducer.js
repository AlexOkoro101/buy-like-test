import requestReducer from './requestReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    vehicle: requestReducer
});

export default rootReducer;