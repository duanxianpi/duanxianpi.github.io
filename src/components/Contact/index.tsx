import React, { Component } from 'react'
import { Col, Row, Space, Typography } from 'antd'
import { GithubFilled, InstagramFilled, LinkedinFilled, MailFilled } from '@ant-design/icons'

const { Title, Text } = Typography

export default class Contact extends Component {
  render() {
    return (
      <div style={{width:"100%"}}>
            <Title style={{textAlign:"center"}} level={2}>Contact Me</Title>
            <Row justify='space-evenly'style={{fontSize:"48px"}}>
                <Col span={4}>
                    <a target="_blank" rel="noreferrer" href="https://github.com/duanxianpi" >
                        <GithubFilled style={{width:"100%",color:'black'}}/>
                    </a>
                </Col>
                <Col span={4}>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/xianpi-duan-a728b622a/">
                        <LinkedinFilled style={{width:"100%",color:"#0077B5"}}/>
                    </a>
                </Col>
                <Col span={4}>
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/xixian.duan/">
                        <InstagramFilled style={{width:"100%",color:"black"}}/>
                    </a>
                </Col>
                <Col span={4}>
                    <a target="_blank" rel="noreferrer" href="mailto://duanxianpi@gmail.com">
                        <MailFilled style={{width:"100%",color:"#770000"}}/>
                    </a>
                </Col>
            </Row>
            <p style={{textAlign:"center", fontSize:"16px",paddingTop:"20px"}}>Peter Duan © 2022</p>          
      </div>
    )
  }
}
