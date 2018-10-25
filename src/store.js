import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const store = createStore(rootReducer,applyMiddleware(thunk));

console.log('Store',store.getState())

store.subscribe(()=>{
    console.log('Store Changed',store.getState())
})


export default store;