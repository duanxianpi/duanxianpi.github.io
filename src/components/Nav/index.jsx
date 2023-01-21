import {Row, Col, ConfigProvider} from 'antd'
import React, { Component } from 'react'

import logo from "../../assets/logo.svg";
import style from "./index.module.css"

export default class Nav extends Component{
    
  state = {lastVal:0,hState:"top"}

  componentDidMount(){
    window.onscroll = this.checkHState;
  }

  componentWillUnmount(){
    window.onscroll = () => {};
  }



  checkHState = ()=>{
    let y = window.scrollY;

    const {lastVal} = this.state

    if (y > lastVal) {
        this.setState({hState:"down"});
    }
    if (y < lastVal) {
        this.setState({hState:"up"});
    }
    if (y === 0) {
        this.setState({hState:"top"});
    }

    this.setState({lastVal:y});
}

  render() {
    const {hState} = this.state
    return (
        // Need a space between two class name
      <div className={`${style.header} ${style[hState]}`}>
        <ConfigProvider
            theme={{
                token: {
                    fontFamily: "Titillium Web,-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
                },
            }}
        >
            <Row align="middle" gutter={40} className={style.row}>
                <Col span={2}>
                    <a target="_self" rel="noreferrer" href='http://localhost:3000' className={style.logo}>
                        <img src={logo} width='36px' style={{userSelect:"none"}} onDragStart={(e)=>e.preventDefault()} alt="logo" ></img>
                        <div>P.D</div>
                    </a>
                </Col>
                <Col span={14}/>
                <Col span={8}>
                    <div className={style.nav}>
                        <a href="#About" className={style.navA}>About</a>
                        <a href="#Projects" className={style.navA}>Projects</a>
                        <a href="#Experience" className={style.navA}>Experience</a>
                        <a href="#Contacts" className={style.navA}>Contacts</a>
                    </div>
                </Col>
            </Row>
        </ConfigProvider>
      </div>
    )
  }
}
