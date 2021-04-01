const initialState ={
    dogs:[],
    allDog:[],
}

function reducer(state = initialState,action){
    // console.log(action.payload,'<<<<<<<<<')
    if(action.type === 'dog/add'){
        return {...state, dogs: action.payload}
    }else if(action.type === 'dog/allShow'){
      return  {...state, allDog: action.payload}
    }
    return state;
}

export default reducer