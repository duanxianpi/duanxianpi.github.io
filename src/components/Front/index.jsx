import React, { Component } from 'react'

import style from "./index.module.css"
import Particle from './Particle'

export default class Front extends Component {
  render() {
    return (
      <div>
        <Particle/>
        <div style={{paddingBottom: "2000px"}}>
          12334
        </div>
      </div>
    )
  }
}
