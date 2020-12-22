import {combineReducers} from 'redux';
import {authentication} from '../Auth.state';
import {user} from '../User.state';

const appReducer = combineReducers({authentication, user});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
