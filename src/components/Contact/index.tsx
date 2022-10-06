import React, { Component } from 'react'
import { Col, Row, Space, Typography } from 'antd'
import Icon, { GithubFilled, InstagramFilled, LinkedinFilled, MailFilled } from '@ant-design/icons'

import {ReactComponent as mail} from "../../assets/mail.svg";
import {ReactComponent as ins} from "../../assets/ins.svg";
import {ReactComponent as github} from "../../assets/github.svg";
import {ReactComponent as linkedin} from "../../assets/linkedin.svg";

import style from "./index.module.css"

const { Title, Text } = Typography

export default class Contact extends Component {
  render() {
    return (
      <div className={style.container}>
            <Title level={2}>Contact Me</Title>
            <Row justify='space-evenly'style={{fontSize:"48px"}} align="middle">
                <Col span={4}>
                    <a target="_blank" rel="noreferrer" href="https://github.com/duanxianpi" >
                        <Icon component={github} />
                    </a>
                </Col>
                <Col span={4}>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/xianpi-duan-a728b622a/">
                        <Icon component={linkedin} />  
                    </a>
                </Col>
                <Col span={4}>
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/xixian.duan/">
                        <Icon component={ins} />
                    </a>
                </Col>
                <Col span={4}>
                    <a target="_blank" rel="noreferrer" href="mailto://duanxianpi@gmail.com">
                        <Icon component={mail} />
                    </a>
                </Col>
            </Row>
            <p style={{textAlign:"center", fontSize:"16px",paddingTop:"20px"}}>Peter Duan © 2022</p>          
      </div>
    )
  }
}
