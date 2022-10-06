import { Col, Row, Space, Typography } from 'antd'
import React, { Component } from 'react'

import sketch from "../../assets/Sketch BW.png"
import banner1 from "../../assets/Hi There.png"
import banner2 from "../../assets/I'm Peter Duan.png"
import style from "./index.module.css"

const { Title, Text } = Typography

export default class Front extends Component {
  render() {
    return (
      <div className={style.container}>
        <Row align="middle">
            <Col span={14}>
                <Space direction="vertical" size="middle">
                    <Title>Hi there 👋, I'am Peter Duan</Title>
                    <Text>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    </Text>

                    <Text>
                        It has survived not only five centuries, but also the leap into electronic typesetting, 
                        remaining essentially unchanged. 
                    </Text>

                    <Text>
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Text>
                </Space>
            </Col>
            {/* <Col span={9}>
                <img src={sketch} width="100%" style={{userSelect:"none"}} onDragStart={(e)=>e.preventDefault()} alt="front img" />
            </Col> */}
        </Row>
      </div>
    )
  }
}
