import {createStore, compose} from 'redux';
import reducers from './Reducers';

const composeEnhancers =
  (window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose) || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers());

export default store;
