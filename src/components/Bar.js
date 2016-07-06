import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getData } from '../actions/count'

class Bar extends Component {
    render() {
        const { lists, getData } = this.props

        console.log(this.props)
        
        return (
            <div>
                <div>And I am Bar!</div>
                <button type="button" className="btn btn-default" onClick={() => getData()}>加载数据</button>
                <div>
                    { lists }
                </div>
            </div>
        )
    }
}

const getList = state => {
    return {
        lists: state.count.data
    }
}

export default connect(
    getList, 
    { getData }
)(Bar)
