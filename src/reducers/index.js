import { combineReducers } from 'redux';
import getDataReducer from "./getDataReducer";;

const rootReducer = combineReducers({
    SampleData : getDataReducer
})

export default rootReducer;