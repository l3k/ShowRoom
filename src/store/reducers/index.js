import filter from './filter'
import cart from './cart'
import favorite from './favorite'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    filter,
    cart,
    favorite
})

export default rootReducer