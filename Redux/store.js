import { createStore, combineReducer, applyMiddleWare } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

const reducers = combineReducer({
  // cartReducer
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleWare(thunkMiddleware))
);

export default store;
