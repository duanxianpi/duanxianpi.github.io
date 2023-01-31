import React, { Component } from 'react'

import style from './index.module.css'
import { FiChevronRight } from "react-icons/fi";

export default class EdgeCutButton extends Component {
  render() {
    return (
      <div>
        <a className={style.btn} target="_blank" rel="noreferrer" href='http://localhost:3000'>
            <FiChevronRight color='white' size={24} className = {style.icon}/>
            <div className={style.text}>Check out my resume</div>
        </a>
      </div>
    )
  }
}
