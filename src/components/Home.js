import React from 'react';
import Hello from './Hello.svg';
import Web from './web.svg';
import './styles.css';
import Problem from './problem.svg';
import Work from './Work';
import Education from './education';
import Contact from './contact';
import { slideInLeft } from 'react-animations';
import { fadeIn } from 'react-animations';
import { slideInRight } from 'react-animations';
import Content from './content.svg';
import Radium, {StyleRoot} from 'radium';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
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
class Home extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            status: "home"
        };
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
        if(this.state.status === "home")
        {
            return <StyleRoot><div>
                <div class = "container" style={{height:"100vh"}}>
                <nav class="navbar navbar-light " style={{color:"#8884FF"}}>
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#" style={{color:"#BAF2D8", fontSize:"1.5rem"}}>{"{DiligentCoder}"}</a>
                        <button style={{background:"white"}} class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button> 
                        <div class="collapse navbar-collapse" id="navbarNav" style={{textAlign:"center"}}>
                        <ul class="navbar-nav" >
                            <li class="nav-item">
                            <a class="nav-link active"  href="1" style={{color:"#BAF2D8", fontSize:"1rem"}} onClick = {(e)=>{this.home(e)}}>About</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="2"  style={{color:"#BAF2D8", fontSize:"1rem"}} onClick = {(e)=>{this.work(e); }}>Projects and Experience</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#3" style={{color:"#BAF2D8", fontSize:"1rem"}} onClick = {(e)=>{this.education(e)}}>Academics</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#4" style={{color:"#BAF2D8", fontSize:"1rem"}} onClick = {(e)=>{this.contact(e)}}>Contact</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </nav>
                    <ScrollAnimation animateIn="fadeInUp">
                    <div class = "row">
                        <div class = "col-lg-6 col-md-12">
                            <div style={{paddingTop:"25%", textAlign:"center"}}>
                                <div>
                                <h1 class = "title" >Siddharth.S.Chandran</h1>
                                <h4>Everything looks IMPOSSIBLE unless done!</h4>
                                <button class = "button1"><a href = "https://github.com/DiligentCoder-20022001" target="_blank"><img src="https://img.icons8.com/fluent/48/000000/github.png"/></a></button>
                                <button class = "button1"><a href = "https://siddharthschandran44.medium.com/" target="_blank"><img src="https://img.icons8.com/ios-filled/48/000000/medium-logo.png"/></a></button>
                                <button class = "button1"><a href = "https://www.linkedin.com/in/siddharth-s-chandran-1b96311b9/" target="_blank"><img src="https://img.icons8.com/fluent/48/000000/linkedin.png"/></a></button>
                                <button class = "button1"><a href = "mailto:siddharthschandran45@gmail.com" target="_blank"><img src="https://img.icons8.com/color/48/000000/gmail.png"/></a></button>
                                <div style={{paddingTop:"2%"}}>
                                <button class = "button2" style={{background:"black"}}  onClick = {(e) => window.open("https://drive.google.com/file/d/1G9frmdZu7dlFNVN12uWsbeLe3ikgdOgd/view?usp=sharing")}>View my Resume!</button>
                                </div>
                                </div>
                            </div>
                            
                        </div>
                        <div class = "col-lg-6 col-md-12" style={{textAlign:"center"}}>
                        <div><img src = {Hello} class = "img1"/></div>
                        </div>
                    </div>
                    </ScrollAnimation>
                </div>
                
                <div class = "container">
                    <div style={{textAlign:"center"}}>
                        <h1 class = "title1">I am intrested in ?</h1>
                    </div>
                    <div style={{paddingTop:"5%"}}></div>
                    <div class = "row">
                    <div class = "col-lg-6 col-md-12">
                    <ScrollAnimation animateIn="slideInLeft"><div style={{textAlign:"center"}}><div style={styles.slideInLeft}>
                                <h1 class = "title1" style={{fontSize:"3rem"}}>Full stack development</h1>
                                <div>
                                    <img src="https://img.icons8.com/color/48/000000/mongodb.png"/>
                                    <img src="https://img.icons8.com/color/48/000000/javascript.png"/>
                                    <img src="https://img.icons8.com/color/48/000000/react-native.png"/>
                                    <img src="https://img.icons8.com/color/48/000000/firebase.png"/>
                                </div>
                                <ul style={{textAlign:"left"}}>
                                    <li>Full stack using MERN</li>
                                    <li>Building responsive design using React and Bootstrap</li>
                                    <li>Creating application backend using Node, Express</li>
                                    <li>Experience in backend using Firebase, Mongo, MySQL</li>
                                    <li>Experience in building mobile apps using React native</li>
                                </ul></div>
                            </div></ScrollAnimation>
                        </div>
                        <div class = "col-lg-6 col-md-12" style={{textAlign:"center"}}>
                        <ScrollAnimation animateIn="fadeIn"><div style={styles1.fadeIn}><img src = {Web} class = "img2"/></div></ScrollAnimation>
                        </div>
                        
                    </div>
                    <div style={{paddingTop:"5%"}}></div>
                    <div class = "row">
                    <div class = "col-lg-6 col-md-12" style={{textAlign:"center "}}>
                            
                    <ScrollAnimation animateIn="slideInLeft"><div >
                            <h1 class = "title1" style={{fontSize:"3rem"}}>Problem Solving</h1>
                            <img src="https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"/>
                            <img src="https://img.icons8.com/color/48/000000/GeeksforGeeks.png"/>
                            <img src="https://img.icons8.com/windows/48/26e07f/hackerrank.png"/>

                               <div style={{paddingTop:"2%"}}></div>
                                <ul style={{textAlign:"left"}}>
                                    <li>Global rank of 5000 in <a href="https://auth.geeksforgeeks.org/user/siddharth_s_chandran/practice/" target = "_blank" style={{color:"#66D7D1"}}>GFG</a></li>
                                    <li>5 star coder on <a href="https://www.hackerrank.com/Siddharth_20_02?hr_r=1" target = "_blank" style={{color:"#66D7D1"}}>HackerRank</a> for problem solving</li>
                                    <li>Highest rating of 3 stars on <a href="https://www.codechef.com/users/sid_20022001" target = "_blank" style={{color:"#66D7D1"}}>CodeChef</a></li>
                                    <li>Solved more than 100 questions on <a href="https://leetcode.com/Siddharth_S_Chandran/" target = "_blank" style={{color:"#66D7D1"}}>LeetCode</a></li>
                                    <li>Participated in more than 15 coding competitions</li>
                                </ul></div></ScrollAnimation>
                        </div>
                        <div class = "col-lg-6 col-md-12" style={{textAlign:"center"}}>
                        <div style={styles1.fadeIn}>
                        <ScrollAnimation animateIn="fadeIn"><img src = {Problem} class = "img2"/></ScrollAnimation>
                            </div> 
                        </div>
                        
                    </div>
                    <div style={{paddingTop:"5%"}}></div>
                    <div class = "row">
                    <div class = "col-lg-6 col-md-12">
                            <div style={{textAlign:"center"}}><ScrollAnimation animateIn="slideInLeft"><div style={styles.slideInLeft}>
                                <h1 class = "title1" style={{fontSize:"3rem"}}>Content writing</h1>
                                <div>
                                </div>
                                <ul style={{textAlign:"left"}}>
                                    <li>I love to write blogs on various topics such as space-time facts, technical stuff, etc</li>
                                    <li>Check out my <a a href="https://siddharthschandran44.medium.com/" target = "_blank" style={{color:"#66D7D1"}}>blogs</a></li>
                                    
                                </ul></div></ScrollAnimation>
                            </div>
                        </div>
                        <div class = "col-lg-6 col-md-12" style={{textAlign:"center"}}>
                        <div><ScrollAnimation animateIn="fadeIn"><img src = {Content} class = "img2"/></ScrollAnimation></div>
                        </div>
                        
                    </div>
                    <div style={{paddingTop:"5%"}}></div>
                </div>
                
                <div style={{bottom:"0px",textAlign:"center", fontSize:"1rem", background:"black", height:"2rem", position:"relative", width:"100%"}}>
        Created by Siddharth using <img src="https://img.icons8.com/color/25/000000/react-native.png"/>
      </div>
            </div>
            </StyleRoot>
        }
        if(this.state.status === "work")
        {
            return <Work/>

        }
        if(this.state.status === "education")
        {
            return <Education/>
        }
        if(this.state.status === "contact")
        {
            return <Contact/>
        }
    }
    render()
    {
        return this.checkStatus();
    }
}
export default Home;