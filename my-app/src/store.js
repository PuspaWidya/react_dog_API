import {createStore} from 'redux'


const initialState ={
    Numbere : 0,
    favorite :[]
}

function reducer(state = initialState,action){
    // console.log(action.type)
    // console.log(action.payload,'<<<<<<<<<')
    if(action.type === 'counter/add'){
        return {...state, counter: action.payload}
    }else if(action.type === 'favorite/add'){
        // return {...state, favorite: [...state.favorite ,action.payload]}
        return {...state,favorite: action.payload}
    }
    return state;
}

const store = createStore(reducer)

export default store 