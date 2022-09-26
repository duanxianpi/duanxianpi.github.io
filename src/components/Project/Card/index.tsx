import { Col, Row, Space, Typography, Tag} from 'antd'
import React, { Component } from 'react'
import { LinkOutlined } from '@ant-design/icons';

import "./index.css"

const {Title,Text} = Typography 

interface IProps {
    title : string,
    cover : string,
    tags : string [],
    describe : string,
    features : string [],
    link : string
}

export default class Card extends Component<IProps,{}> {
  
  constructor(props:IProps){
    super(props)
  }

  public render() {
    return (
      <div className='card'>
        <Row gutter={20} justify="center">
            <Col span={24}>
                <Row justify='space-evenly' align='middle'>
                    <Col span={10}>
                        <img className="cover" src={this.props.cover} width="100%" alt="cover"/>
                    </Col>
                    <Col span={10}>
                        <Space direction="vertical">
                            <a target="_blank" rel="noreferrer" href={this.props.link}>
                              <Title level={3} underline={true}>{this.props.title}<LinkOutlined style={{paddingLeft:"10px"}} /></Title>
                            </a>
                            <Space>
                                {this.props.tags.map((tag)=>{return <Tag className='tag'>{tag}</Tag>})}
                            </Space>
                            <Text>{this.props.describe}</Text>
                            <Title level={4}>Key Feathers</Title>
                            <ul>
                                {this.props.features.map((f)=>{return <li>{f}</li>})}
                            </ul>
                        </Space>
                    </Col>
                </Row>
            </Col>
            
        </Row>
      </div>
    )
  }
}
