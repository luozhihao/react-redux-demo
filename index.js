import React from 'react'  // 引入React
import { render } from 'react-dom' // 引入render方法
import { Provider } from 'react-redux' // 利用Provider可以使我们的 store 能为下面的组件所用
import { Router, browserHistory } from 'react-router' // Browser history 是由 React Router 创建浏览器应用推荐的 history
import { syncHistoryWithStore } from 'react-router-redux' // 利用react-router-redux提供的syncHistoryWithStore我们可以结合store同步导航事件

import finalCreateStore from './src/store/configureStore'  //引入store配置
import DevTools from './src/containers/DevTools'  // 引入Redux调试工具DevTools
import reducer from './src/reducers'  // 引入reducers集合
import routes from './src/routes'   // 引入路由配置

import './assets/css/bootstrap.min.css'  // 引入样式文件

// 给增强后的store传入reducer
const store = finalCreateStore(reducer)

// 创建一个增强版的history来结合store同步导航事件
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