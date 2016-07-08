// 合并reducers
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import update from './count'

export default combineReducers({
    update,
    routing: routerReducer
})