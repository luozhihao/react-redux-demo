// 组合中间件、DevTools
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import DevTools from '../containers/DevTools'

const loggerMiddleware = createLogger()

const middleware = [thunk, loggerMiddleware]

const finalCreateStore = compose(
    applyMiddleware(...middleware),
    DevTools.instrument(),
)(createStore)

export default finalCreateStore
