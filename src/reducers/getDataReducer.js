import { getDataActionTypes } from '../actions/getData';


const defaultState = {
  data: [],
  dataRequested: false,
  dataFulfilled: false,
  dataError: false
}

function getDataReducer(state=defaultState,action){
    console.log("inside reducer");
    switch(action.type){
        case getDataActionTypes.getDataToStoreFulfilled :
           return {...state,data: action.data,dataFulfilled:true,dataRequested:false}       
        case getDataActionTypes.getDataToStoreRequested :
           return {...state,dataRequested:true}
        case getDataActionTypes.getDataToStoreRejected :
           return {...state,dataError:true,dataRequested:false}
        default :
          return state;
        
    }
}

export default getDataReducer;