const initialState ={
    favorite :[]
}

function reducer(state = initialState,action){
    if(action.type === 'favorite/add'){
        return {...state,
            favorite: state.favorite.concat(action.payload)
        }
    }
    return state;
}

export default reducer