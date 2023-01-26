import React, { Component } from 'react'

import style from './index.module.css'

export default class Tag extends Component {
  render() {
    const {tag} = this.props;
    return (
      <div className={style.tag}>
        <div>{tag}</div>
      </div>
    )
  }
}
