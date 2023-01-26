import React, { Component } from 'react'


import Card from './Card'
import style from './index.module.css'
import data from "./data"

export default class Projects extends Component {
  render() {
    return (
      <div id = "Projects" className={style.sec_container}>
        <h1>Some Projects I have done</h1>
        <div className={style.cards}>
          {data.map((p)=>{
            return <Card {...p}/>
          })}
        </div>
      </div>
    )
  }
}
