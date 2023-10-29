import React, { Component } from 'react'

import style from './index.module.css'
import sr from '../../utils/sr'
import { srConfig } from '../../config'
import photo from '../../assets/IMG_0256.jpg'

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
                Hello! My name is Peter Duan and I am a computer science student 
                in my third year at McMaster University. I am actively seeking a 
                co-op opportunity for the winter & summer of 2024.
              </p>
              <p>
                My passion for programming has its roots in my early experiences 
                with Minecraft PE edition, where I first discovered the thrill 
                of bringing my own ideas to life through programming.
              </p>
              <p> 
                This early interest sparked a lifelong love of coding, and I have 
                been dedicated to expanding my knowledge and skills ever since. 
                As I continued to learn new programming languages and techniques on my own, 
                it became clear that computer science was the perfect field for me, and I made the 
                decision to pursue it as my major in university. I am eager to continue growing as 
                a programmer and excited for the opportunities that my co-op search will bring.
              </p>
              {/* <p>
                In my leisure time, I enjoy playing the guitar. Even if I'm poor at it, doing this 
                is still a enjoyable way to unwind. Additionally, I am an avid reader and believe 
                that reading is one of the most impactful ways to gain insight into the world around us. 
                Whether I am diving into a novel or a biography, reading always sparks my curiosity and 
                fuels my desire to continue learning and progressing.
              </p> */}
              <p>Recently, I have been working with the following technologies:</p>
              <ul style={{display: "grid", listStyleType: "square", gridTemplateColumns:"repeat(2, minmax(140px, 300px))"}}>
                <li>React</li>
                <li>Node.js</li>
                <li>Google Cloud Platform</li>
                <li>Python</li>
                <li>Machine Learning</li>
              </ul>
            </div>
            <img className={style.img} src={photo} style={{height:"400px"}}></img>
        </div>
      </div>
    )
  }
}

