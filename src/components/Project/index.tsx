import { Col, Row, Space, Typography } from 'antd'
import React, { Component } from 'react'

import Card from "./Card"
import data from "./data.json"

const { Title, Text } = Typography

export default class Project extends Component {
  render() {
    return (
      <div>
        <Space direction="vertical" style={{ display: 'flex' }} size="large" >
            <Title level={2} style={{textAlign:"center"}}>Some Projects I have done</Title>
            {data.map((p)=>{
              return <Card title={p.title} tags={p.tags} describe={p.describe} features={p.features} cover={p.cover} link={p.link}/>
            })}
        </Space>
      </div>
    )
  }
}
