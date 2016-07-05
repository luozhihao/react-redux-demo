import React, { Component } from 'react'

export default class Bar extends Component {
    render() {
        console.log(this.props)
        
        return <div>And I am Bar!</div>
    }
}
