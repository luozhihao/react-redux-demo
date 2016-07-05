import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { increase, decrease } from '../actions/count'

class Home extends Component {
    render() {
        const { number, increase, decrease } = this.props

        console.log(this.props)

        return (
            <div>
                <p>Some state changes: <span className="badge">{number}</span></p>
                <br />
                <button type="button" className="btn btn-default" onClick={() => increase(1)}>Increase</button>
                { ' ' }
                <button type="button" className="btn btn-default" onClick={() => decrease(1)}>Decrease</button>
                { ' ' }
                <button type="button" className="btn btn-default" onClick={() => browserHistory.push('/foo')}>Go to /foo</button>
            </div>
        )
    }
}

/*const Home = ({ number, increase, decrease }) => {
    return (
      <div>
          Some state changes: 
          {number}
          <button onClick={() => increase(1)}>Increase</button>
          <button onClick={() => decrease(1)}>Decrease</button>
      </div>
    )
}*/

const getNumber = state => {
    return {
        number: state.count.number
    }
}

export default connect(
    getNumber,
    { increase, decrease }
)(Home)