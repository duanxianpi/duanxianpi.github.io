import { Col, Row, Space} from 'antd'
import React, { Component } from 'react'

import sketch from "../../assets/Sketch BW.png"
import banner1 from "../../assets/Hi There.png"
import banner2 from "../../assets/I'm Peter Duan.png"

export default class Front extends Component {
  render() {
    return (
      <div>
        <Row>
            <Col span={9}>
                <img src={sketch} width="100%" alt="front img" />
            </Col>
            <Col span={14}>
                <Space
                    direction="vertical"
                    size="middle"
                    style={{
                    display: 'flex',
                    }}
                >
                    <Row>
                        <Col span={14}>
                            <img src={banner1} width="100%" alt="banner1"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <img src={banner2} width="100%" alt="banner2"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            </p>

                            <p>
                                It has survived not only five centuries, but also the leap into electronic typesetting, 
                                remaining essentially unchanged. 
                            </p>

                            <p>
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </Col>
                    </Row>
                </Space>
            </Col>
        </Row>
      </div>
    )
  }
}
