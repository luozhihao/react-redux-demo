import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPostsIfNeeded, refreshData } from '../actions/count'

class Bar extends Component {
    componentDidMount() {
        const { refreshData } = this.props

        refreshData()
    }

    render() {
        const { lists, fetchPostsIfNeeded } = this.props
        
        return (
            <div>
                <button type="button" className="btn btn-default" onClick={() => fetchPostsIfNeeded()}>加载数据</button>
                <ul>
                    {lists.map((e, index) => 
                        <li key={index}><a href={e.url} target="_blank">{e.title}</a></li>
                    )}
                </ul>
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
    { fetchPostsIfNeeded, refreshData }
)(Bar)
