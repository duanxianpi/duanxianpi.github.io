import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group';

import Visual from "./particle.js"
import style from "./index.module.css"

export default class Particle extends Component {

  canvasRef = React.createRef()
  state = {isMounted: false}

  componentDidMount(){

    this.timeout = setTimeout(() => {
      this.setState({isMounted: true}, () => {new Visual(this.canvasRef.current); });
    }, 0);
    
  }

  componentWillUnmount(){
    clearTimeout(this.timeout)
  }

  render() {
    const {isMounted} = this.state
    return (
      <div>
        <canvas ref={this.canvasRef} className={style.canvas}/>
      </div>
    )
  }
}
