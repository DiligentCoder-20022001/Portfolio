import React from 'react';
import './styles.css';
import Con from './contact.svg';
import Sid from './sid.jpg';
import Work from './Work';
import Education from './education';
import Home from './Home';
import { slideInLeft } from 'react-animations';
import { fadeIn } from 'react-animations';
import { slideInRight } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
 
const styles = {
  slideInLeft: {
    animation: 'x 2s',
    animationName: Radium.keyframes(slideInLeft, 'slideInLeft')
  }
}

const styles1 = {
    fadeIn: {
      animation: 'x 2s',
      animationName: Radium.keyframes(fadeIn, 'fadeIn')
    }
  }
  const styles2 = {
    slideInRight: {
      animation: 'x 2s',
      animationName: Radium.keyframes(slideInRight, 'slideInRight')
    }
  }
class Contact extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            status: "contact"
        }
    }
    home(e)
    {
        e.preventDefault();
        this.setState({status: "home"});
    }
    work(e)
    {
        e.preventDefault();
        this.setState({status: "work"});
    }
    education(e)
    {
        e.preventDefault();
        this.setState({status: "education"});
    }
    contact(e)
    {
        e.preventDefault();
        this.setState({status : "contact"});
    }
    checkStatus()
    {
        if(this.state.status === "contact")
        {
            return <StyleRoot><div>
                <div class = "container">
                <nav class="navbar navbar-light " style={{color:"#8884FF"}}>
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#" style={{color:"#BAF2D8", fontSize:"1.5rem"}}>{"{DiligentCoder}"}</a>
                        <button style={{background:"white"}} class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button> 
                        <div class="collapse navbar-collapse" id="navbarNav" style={{textAlign:"center"}}>
                        <ul class="navbar-nav" >
                            <li class="nav-item">
                            <a class="nav-link active"  href="#" style={{color:"#BAF2D8", fontSize:"1rem"}} onClick = {(e)=>{this.home(e)}}>About</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#" style={{color:"#BAF2D8", fontSize:"1rem"}} onClick = {(e)=>{this.work(e)}}>Projects and Experience</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#" style={{color:"#BAF2D8", fontSize:"1rem"}} onClick = {(e)=>{this.education(e)}}>Academics</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#" style={{color:"#BAF2D8", fontSize:"1rem"}} onClick = {(e)=>{this.contact(e)}}>Contact</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </nav>
                    <div style={{paddingTop:"5%"}}></div>
                    <div style={{textAlign:"center"}}>
                        <h1 class = "title1">Let's get in touch !</h1>
                    </div>
                    <div style={{paddingTop:"5%"}}></div>
                    <div class ="row">
                        <div class = "col-lg-6 col-md-12" style={{textAlign:"center"}}>
                            <div style={styles1.fadeIn}><img src = {Sid} class = "img2" style={{height:"300px", width:"300px",borderRadius:"50%"}}/></div>
                        </div>
                        <div class = "col-lg-6 col-md-12" style={{textAlign:"center"}}>
                            <div style={styles2.slideInRight}>
                            <h1 class = "title" style={{fontSize:"2rem"}}>Want to collaborate on projects or simply have a chat?</h1>
                            <h4>Here are some links to reach me out!</h4>
                            <button class = "button1"><a href = "https://github.com/DiligentCoder-20022001" target="_blank"><img src="https://img.icons8.com/fluent/48/000000/github.png"/></a></button>
                                <button class = "button1"><a href = "https://siddharthschandran44.medium.com/" target="_blank"><img src="https://img.icons8.com/ios-filled/48/000000/medium-logo.png"/></a></button>
                                <button class = "button1"><a href = "https://www.linkedin.com/in/siddharth-s-chandran-1b96311b9/" target="_blank"><img src="https://img.icons8.com/fluent/48/000000/linkedin.png"/></a></button>
                                <button class = "button1"><a href = "mailto:siddharthschandran45@gmail.com" target="_blank"><img src="https://img.icons8.com/color/48/000000/gmail.png"/></a></button>
                                <main class="form-signin">
                    <form action="https://formspree.io/f/xoqpebjj"
  method="POST">

                        <div class="form-floating">
                            <input type="email" name="_replyto" class="form-control" placeholder="name@example.com" />
                            <label style={{color:"black"}} >Email address</label>
                        </div>
                        <div style={{paddingTop:"2%"}}></div>
                        <div class="form-floating">
                            <textarea name="message" type="text" class="form-control" id="floatingInput" style={{height:"100px", resize:"none"}} />
                            <label  style={{color:"black"}}>Message</label>
                        </div>
                        <div style={{paddingTop:"2%"}}></div>
                        <button type="submit" class = "button2">Send</button>
                    </form>
                </main></div>
                        </div>
                    </div>
                    <div style={{paddingTop:"7%"}}></div>
                       
                </div>
                <div style={{bottom:"0px",textAlign:"center", fontSize:"1rem", background:"black", height:"2rem", position:"relative", width:"100%"}}>
        Created by Siddharth using <img src="https://img.icons8.com/color/25/000000/react-native.png"/>
      </div>
            </div></StyleRoot>
        }
        if(this.state.status === "work")
        {
            return <Work/>

        }
        if(this.state.status === "education")
        {
            return <Education/>
        }
        if(this.state.status === "home")
        {
            return <Home/>
        }
    }
    render()
    {
        return this.checkStatus();
    }
}
export default Contact;