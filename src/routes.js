// 路由组件
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { App, Home, Foo, Bar } from './containers'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="index" component={Home}/>
        <Route path="foo" component={Foo}/>
        <Route path="bar" component={Bar}/>
    </Route>
)