const initialState ={
    detailDog:[],
    imgDog:[]
}

function reducer(state = initialState,action){
    // console.log(action.payload,'<<<<<<<<<')
    if(action.type === 'dogDetail/detailDog'){
        return  {...state, detailDog: action.payload}
    }else if(action.type === 'dogDetail/imgDog'){
        return  {...state, imgDog: action.payload}
    }
    return state;
}

export default reducer