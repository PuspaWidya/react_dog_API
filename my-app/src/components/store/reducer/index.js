import {combineReducers} from 'redux'
import dogReducer from './dog'
import favoriteReducer from './favorite'
import dogDetail from './dogDetail'

const reducer = combineReducers({
    dog : dogReducer,
    favorite : favoriteReducer,
    dogDetail: dogDetail
})

export default reducer