import React, { Component } from 'react'
import { FaInstagram, FaLinkedin, FaRegEnvelope, FaGithub} from "react-icons/fa";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import style from './index.module.css';
import sr from '../../utils/sr'
import { srConfig ,srCallback} from '../../config'

export default class Contacts extends Component {
  
  state = {isMounted: false}
  
  sectionTitle = React.createRef()
  contactsRef = React.createRef()
  
  componentDidMount = () =>{
      sr.reveal(this.sectionTitle.current, srConfig());
      sr.reveal(this.contactsRef.current, srCallback(this.revealCallback));
      
    }
    
  revealCallback = (el) => {
    this.timeout = setTimeout(() => this.setState({isMounted: true}), 500);
  }

  componentWillUnmount(){
    clearTimeout(this.timeout)
  }
  
  render() {
    let github = <a className={style.iconsLink} target="_blank" rel="noreferrer" href="https://github.com/duanxianpi">
                    <FaGithub className={style.icons}/>
                 </a>
    
    let linkedin = <a className={style.iconsLink} target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/xianpi-duan-a728b622a/">
                        <FaLinkedin className={style.icons}/>
                   </a>

    let mail = <a className={style.iconsLink} rel="noreferrer" href="mailto://duanxianpi@gmail.com">
                    <FaRegEnvelope className={style.icons}/>
               </a>

    let ins = <a className={style.iconsLink} target="_blank" rel="noreferrer" href="https://www.instagram.com/xixian.duan/">
                    <FaInstagram className={style.icons}/>
              </a>

    const {isMounted} = this.state

    let contactList = [github,linkedin,mail,ins]

    return (
        <div id = "Contacts"  className={style.sec_container}>
            <h1 ref = {this.sectionTitle}>Let's Get In Touch</h1>
            <div className={style.contacts} ref = {this.contactsRef}>
                <TransitionGroup component={null}>
                    {isMounted &&
                        contactList.map((item, i) => (
                            <CSSTransition key={i} classNames={{
                                enter: style['fadedown-enter'],
                                enterActive: style['fadedown-enter-active']
                              }}  timeout={2000}>
                                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
                            </CSSTransition>
                        ))
                      }
                </TransitionGroup>
            </div>
            <div style={{paddingBottom: "10px"}}>Xianpi Duan © 2023</div>
        </div>
    )
  }
}
