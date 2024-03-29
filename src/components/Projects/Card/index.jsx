import React, { Component } from 'react'
import { HiExternalLink } from "react-icons/hi";

import style from './index.module.css'
import Tag from './Tag'

export default class Card extends Component {
  render() {

    const {number,title,cover,tags,describe,features,link} = this.props

    return (
      <div className={`${style.card_container} ${((number % 2 ) === 1) ? '' : style.reverse}` }>
        <img className={style.img} src={cover}></img>
        <div className={style.details}>
          <a target="_blank" rel="noreferrer" href={link} className={style.LinkA}>
            <div style={{display:"flex",gap:"2px"}}>
              <h2 style={{margin:'0px'}}>{title}</h2>
              <HiExternalLink size={24} transform="translate(0, 0.75)"/>
            </div>
          </a>
          <div className={style.tags}>
            {tags.map((item,index)=>{
					    return <Tag key={index} tag={item}></Tag>
            })}
          </div>
          <div style={{fontSize:"var(--fz-md)"}}>
            {describe}
          </div>
          <div className={style.kf}>
            <h3 style={{margin:'0px 0px 10px 0px'}}>Key Feathers</h3>
            <ul style={{listStyleType: "square",marginTop:"0px"}}>
              {features.map((item,index)=>{
                return <li style={{color: (item.highlight ? "#DA3400" : "black")}} key={index}>{item.detail}</li>
              })}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
