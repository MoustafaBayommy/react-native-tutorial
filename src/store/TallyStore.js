import { combineReducers,applyMiddleware } from 'redux';
import { createStore } from 'redux';

import countReducer from './reducers/countReducer';



const reducer=combineReducers({
countReducer
})


const timerMiddleware = store => next => action => {
    if (action.type === 'INCREMENT') {
      action.interval = setInterval(() => store.dispatch({ type: 'INCREMENT' }), 5000);
    }
    next(action);
  };
  
// export default createStore(reducer,applyMiddleware(timerMiddleware));

export default createStore(reducer);

