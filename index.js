import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import finalCreateStore from './src/store/configureStore'
import DevTools from './src/containers/DevTools'
import reducer from './src/reducers'
import routes from './src/routes'

import './assets/css/bootstrap.min.css'

const store = finalCreateStore(reducer)

const history = syncHistoryWithStore(browserHistory, store)

render(
    <Provider store={store}>
        <div>
            <Router history={history} routes={routes} />
            <DevTools />
        </div>
    </Provider>,
    document.getElementById('mount')
)