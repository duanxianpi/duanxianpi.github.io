import React, { Component } from 'react'
import {Col, Row, ConfigProvider} from 'antd'

import style from "./index.module.css"
import Particle from './Particle'
import Edge_Cut_Button from './Button'

export default class Front extends Component {
  render() {
    return (
      <div>
        <Particle/>
        <div className={style.container}>
          <div style={{textAlign: "left"}}>
            <h1 style={{fontSize: "20px", margin: "0px 0px 30px 4px"}}>Hi, my name is</h1>
            <h2 style={{fontSize:"72px", fontWeight: "bold",color:"#353A42", margin: "0"}}>Peter Duan</h2>
            <h3 style={{fontSize:"72px", fontWeight: "bold",color:"#00112B", marginTop: "5px"}}>Exploring, Learning, Progressing</h3>
            <ConfigProvider
            theme={{
                token: {
                    fontFamily: "Titillium Web,-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
                },
            }}
            >
              <Row>
                <Col span={16}>
                  <p style={{fontSize:"var(--fz-lg)"}}>
                    Lorem ipsum dolor sit amet, assum graecis percipit cum ei, quo at erant efficiendi. 
                    Eos fugit nihil ponderum ut. Per et alia everti suavitate, choro percipit liberavisse ea eum. 
                    Ad malis altera accusamus mei, eum et delicata instructior, libris iudicabit ne cum.
                  </p>
                </Col>
              </Row>
            </ConfigProvider>
            
       
          </div>
          <Edge_Cut_Button></Edge_Cut_Button>
        </div>
      </div>
    )
  }
}
