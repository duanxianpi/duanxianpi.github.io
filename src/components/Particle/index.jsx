import React, { Component } from 'react'

import Visual from "./particle.js"
import style from "./index.module.css"

export default class Particle extends Component {

  canvasRef = React.createRef()

  componentDidMount(){
    new Visual(this.canvasRef.current);
  }

  render() {
    return (
      <div>
        <canvas ref={this.canvasRef} className={style.canvas}/>
      </div>
    )
  }
}
