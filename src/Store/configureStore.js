import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../Reducers';

const Store = compose(
  applyMiddleware(thunkMiddleware),
)(createStore);

export default () => Store(rootReducer);