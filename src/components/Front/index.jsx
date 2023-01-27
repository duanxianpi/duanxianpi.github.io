import React, { Component } from 'react'
import {Col, Row, ConfigProvider} from 'antd'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import style from "./index.module.css"
import Edge_Cut_Button from './Button'

export default class Front extends Component {

  state = {isMounted: false}

  componentDidMount(){
    this.timeout = setTimeout(() => this.setState({isMounted: true}), 1000);
  }

  componentWillUnmount(){
    clearTimeout(this.timeout)
  }

  

  render() {
    const {isMounted} = this.state

    let header1 = <h1 style={{fontSize: "20px", margin: "0px 0px 30px 4px"}}>Hi, my name is</h1>
    let header2 = <h1 style={{fontSize:"72px", fontWeight: "bold",color:"#353A42", margin: "0"}}>Peter Duan</h1>
    let header3 = <h1 style={{fontSize:"72px", fontWeight: "bold",color:"#00112B", marginTop: "5px"}}>Exploring, Learning, Progressing</h1>
    let description = <ConfigProvider
                        theme={{
                            token: {
                                fontFamily: "Titillium Web,-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
                            },
                        }}
                        >
                          <Row>
                            <Col span={16}>
                              <p style={{paddingTop:"10px"}}>
                                Lorem ipsum dolor sit amet, assum graecis percipit cum ei, quo at erant efficiendi. 
                                Eos fugit nihil ponderum ut. Per et alia everti suavitate, choro percipit liberavisse ea eum. 
                                Ad malis altera accusamus mei, eum et delicata instructior, libris iudicabit ne cum.
                              </p>
                            </Col>
                          </Row>
                        </ConfigProvider>
    let button = <Edge_Cut_Button></Edge_Cut_Button>
          
    let items = [header1,header2,header3,description]

    return (
    <div className={style.container}>
      <TransitionGroup component={null}>
        <div style={{textAlign: "left"}}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key = {i} in = {true} classNames={{
                                                      enter: style['fadeup-enter'],
                                                      enterActive: style['fadeup-enter-active']
                                                    }} timeout={2000}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </div>
          {isMounted && 
            <CSSTransition in = {true} classNames={{
                                                      enter: style['fadeup-enter'],
                                                      enterActive: style['fadeup-enter-active']
                                                    }} timeout={2000}>
                <div style={{ transitionDelay: `500ms` }}>{button}</div>
            </CSSTransition>}
      </TransitionGroup>

    </div>
    )
  }
}
