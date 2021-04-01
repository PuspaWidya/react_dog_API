const initialState ={
    counter: 0,
    favorite :[]
}

function reducer(state = initialState,action){
    // console.log(action.payload,'<<<<<<<<<')
    if(action.type === 'counter/add'){
        return {...state, counter: action.payload}
    }else if(action.type === 'favorite/add'){
        return {...state,
            favorite: state.favorite.concat(action.payload)
        }
    }
    return state;
}

export default reducer