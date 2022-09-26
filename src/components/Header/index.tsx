import {Row, Col, Divider, Space} from 'antd'
import React, { Component } from 'react'

import logo from '../../logo.svg';
import './index.css'


export default class Header extends Component{
  render() {
    return (
      <div className="container">
        <Row gutter={10} wrap={false} className="header" align="middle">
            <Col span={1} offset={0}>
              <a target="_self" rel="noreferrer" href='http://localhost:3000'>
                <img src={logo} width='50px' style={{userSelect:"none"}} onDragStart={(e)=>e.preventDefault()} alt="logo" ></img>
              </a>              
            </Col>
            <Col span={23} offset={0}>
            <Row wrap={false} justify="end" align="middle">
              <Space size={30}>
                Home
                <Divider type="vertical" />
                Projects
                <Divider type="vertical" />
                Contact Me
              </Space>
            </Row>
            </Col>
        </Row>
      </div>
    )
  }
}
