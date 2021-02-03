import {combineReducers} from 'redux';
import {authentication} from '../Auth.state';
import {onboarding} from '../Onboarding.state';

const appReducer = combineReducers({authentication, onboarding});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
