import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './Reducers';
import {sagas} from './Sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ as typeof compose) || compose;

const store = createStore(reducers, /* preloadedState, */ composeEnhancers(applyMiddleware(sagaMiddleware)));

sagas.forEach(sagaMiddleware.run);

export default store;
