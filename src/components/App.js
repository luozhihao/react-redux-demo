import React, { Component } from 'react'
import { Link } from 'react-router'

export default class App extends Component {
    render() {
        return(
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <span className="navbar-brand" href="#">
                                <Link to="/">Redux</Link>
                            </span>
                        </div>
                        <ul className="nav navbar-nav">
                            <li className="active">
                                <Link to="/">首页</Link>
                            </li>
                            <li>
                                <Link to="/foo">Foo</Link>
                            </li>
                            <li>
                                <Link to="/bar">Bar</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="panel panel-default">
                    <div className="panel-body">
                        { this.props.children }
                    </div>
                </div>
            </div>
        )
    }
}