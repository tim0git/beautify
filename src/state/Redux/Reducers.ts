import {combineReducers} from 'redux';
import {authentication} from '../Auth.state';

const appReducer = combineReducers({authentication});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
