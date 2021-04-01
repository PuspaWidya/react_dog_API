const initialState ={
    dogs:[],
    favorite :[],
    allDog:[],
    detailDog:[],
    imgDog:[]
}

function reducer(state = initialState,action){
    if(action.type === 'dog/add'){
        return {...state, dogs: action.payload}
    }else if(action.type === 'favorite/add'){
        return {...state,
            favorite: state.favorite.concat(action.payload)
        }
    }else if(action.type === 'dog/allShow'){
      return  {...state, allDog: action.payload}
    }else if(action.type === 'dogDetail/detailDog'){
        return  {...state, allDog: action.payload}
    }else if(action.type === 'dogDetail/imgDog'){
        return  {...state, allDog: action.payload}
    }
    return state;
}

export default reducer