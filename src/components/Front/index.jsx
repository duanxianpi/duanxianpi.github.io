import React, { Component } from 'react'

import style from "./index.module.css"
import Particle from './Particle'

export default class Front extends Component {
  render() {
    return (
      <div>
        <Particle/>
        <div className={style.container}>
          <div style={{textAlign: "left"}}>
            <h1 style={{fontSize: "20px", margin: "0px 0px 30px 4px"}}>Hi, my name is</h1>
            <h2 style={{fontSize:"72px", fontWeight: "bold",color:"#00112B", margin: "0"}}>Peter Duan</h2>
            <h3 style={{fontSize:"72px", fontWeight: "bold",color:"#004964", marginTop: "5px"}}>Exploring, Learning, Progressing</h3>
          </div>
        </div>
      </div>
    )
  }
}
