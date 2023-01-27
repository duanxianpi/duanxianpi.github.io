import React, { Component } from 'react'

import style from './index.module.css'
import sr from '../../utils/sr'
import { srConfig } from '../../config'

export default class About extends Component {

  AboutContainer = React.createRef()
  
  componentDidMount = () =>{
    sr.reveal(this.AboutContainer.current, srConfig());
  }

  render() {

    return (
      <div id = "About" ref = {this.AboutContainer} className={style.sec_container}>
        <h1>About Me</h1>
        <div className={style.contents}>
            <div>
                <p>
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                </p>
                <p>
                    consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea 
                </p>
                <p>
                    voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                </p>
            </div>
            <img src='https://upload.wikimedia.org/wikipedia/commons/5/5f/Grey.PNG' style={{height:"300px"}}></img>
        </div>
      </div>
    )
  }
}