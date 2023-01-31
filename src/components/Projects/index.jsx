import React, { Component } from 'react'


import Card from './Card'
import style from './index.module.css'
import data from "./data"
import sr from '../../utils/sr'
import { srConfig } from '../../config'

export default class Projects extends Component {

  constructor(props){
    super(props)
    this.refList = []
    data.map((_) => {
      this.refList.push(React.createRef())
      return null;
    })
    this.sectionTitle = React.createRef()
  }
  

  componentDidMount = () =>{
    sr.reveal(this.sectionTitle.current, srConfig());
    
    this.refList.map((ref) => {
      sr.reveal(ref.current, srConfig());
      return null;
    })
  }

  render() {
    return (
      <div id = "Projects"  className={style.sec_container}>
        <h1 ref = {this.sectionTitle}>Some Projects I have done</h1>
        <div className={style.cards}>
          {data.map((p,i)=>{
            return <div key = {i} ref = {this.refList[i]}><Card {...p}/></div>
          })}
        </div>
      </div>
    )
  }
}
