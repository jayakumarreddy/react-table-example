import axios from "axios";

export const getDataActionTypes ={
    getDataToStoreRequested : 'getDataToStoreRequested',
    getDataToStoreRejected : 'getDataToStoreRejected',
    getDataToStoreFulfilled : 'getDataToStoreFulfilled'
};

export function getData(){
    console.log("inside action get dAta");
    return (dispatch)=>{
        dispatch(getDataToStoreRequestedAction());
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
         console.log("data is", response.data);
         dispatch(getDataToStoreFulfilledAction(response.data));
        })
        .catch(()=>{
         dispatch(getDataToStoreRejectedAction());
        })
    }
}
function getDataToStoreRequestedAction(){
    console.log('requested')
    return{
        type:getDataActionTypes.getDataToStoreRequested,
    }
}

function getDataToStoreFulfilledAction(data){
    return{
        type:getDataActionTypes.getDataToStoreFulfilled,
        data
    }
}
function getDataToStoreRejectedAction(){
    return{
        type:getDataActionTypes.getDataToStoreRejected
    }
}