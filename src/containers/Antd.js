// 结合antd
import React, { Component } from 'react'
import { connect } from 'react-redux'

// 引入Antd组件及样式
import { Collapse } from 'antd'
import 'font-awesome/css/font-awesome.min.css'
const Panel = Collapse.Panel

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

class Antd extends Component {
    render() {
        return (
            <Collapse accordion>
                <Panel header={'This is panel header 1'} key="1">
                    <p>{text}</p>
                    </Panel>
                <Panel header={'This is panel header 2'} key="2">
                    <p>{text}</p>
                </Panel>
                <Panel header={'This is panel header 3'} key="3">
                    <p>{text}</p>
                </Panel>
            </Collapse>
        )
    }
}

export default connect()(Antd)