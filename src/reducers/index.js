import { combineReducers } from 'redux';
import appReducer from './appReducer';
const rootReducer = (state, action) => {
    return combineReducers({
        appReducer
    })(state, action);
};

export default rootReducer;