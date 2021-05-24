import './styles.css';
import React from 'react';
import Work1 from './askai.jpg';
import Home from './Home';
import Education from './education';
import Contact from './contact';
import { slideInLeft } from 'react-animations';
import { fadeIn } from 'react-animations';
import { slideInRight } from 'react-animations';
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
class Work extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            status: "work"
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
    checkStatus() {
        if (this.state.status === "work") {
            return <StyleRoot><div>
                <div class="container">
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
                    <div style={{ paddingTop: "5%" }}></div>
                    <div style={{ textAlign: "center" }}>
                        <h1 class="title1">Experience</h1>
                    </div>
                    <div style={{ paddingTop: "5%" }}></div>
                    <div class="row">
                        <div class="col-lg-6 col-md-12" style={{ textAlign: "center" }}>
                           <div style={styles.slideInLeft}> <img src={Work1} style={{ width: "200px", height: "200px", borderRadius: "50%" }} /></div>
                        </div>
                        <div class="col-lg-6 col-md-12" style={{ textAlign: "center" }}>
                            <div style={styles2.slideInRight}><h1 class="title" style={{fontSize:"2.5rem"}}>AskAI softech</h1>
                            <h4 style={{ fontWeight: "bolder" }}>-Web developer Intern</h4>
                            <p>(Dec 2020 - Mar 2021)</p>
                            <p style={{ fontSize: "1rem" }}>Developed a fully functional payment portal for the product ATTENDiO (an AI based attendance system). Worked with React.JS, Cloud firestore and API's such as RazorPay</p>
                            <button class="button2" style={{background:"black"}} onClick = {(e) => window.open("https://attendio-pricing-67c45.web.app/")}>Check out my work !</button>
                            </div>
                        </div>
                    </div>
                    <div style={{ paddingTop: "5%" }}></div>
                    <div style={{ textAlign: "center" }}>
                        <h1 class="title1">Selected Projects</h1>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 col-md-12" style={styles1.fadeIn}>
                        <ScrollAnimation animateIn="fadeIn"><div>
                                <div style={{ paddingTop: "2%" }}></div>
                                <div class="card1 card-1">
                                    <h3 style={{ color: "black" }}>NotesKeeper</h3>
                                    <p style={{ color: "black" }}>A notes taking app which helps in writting down notes and saving them with the help of typing or speech to text translation.</p>
                                    <div style={{ color: "black" }}>
                                        Made with React, Firebase and Speech to text API<br/>
                                        <div style={{paddingTop:"1%"}}>
                                            <button class = "button2" style={{width:"100px", background:"black"}} onClick = {(e) => window.open("https://github.com/DiligentCoder-20022001/NotesKeeper")}>Github</button>{"  "}
                                            <button class = "button2" style={{width:"100px"}} onClick = {(e) => window.open("https://blogcentre-a0b92.web.app/")}>Project</button>
                                        </div>
                                    </div>
                                </div>
                            </div></ScrollAnimation>
                        </div>
                        <div class="col-lg-6 col-md-12" style={styles1.fadeIn}>
                        <ScrollAnimation animateIn="fadeIn"><div>
                                <div style={{ paddingTop: "2%" }}></div>
                                <div class="card1 card-1">
                                    <h3 style={{ color: "black" }}>AlcoholicsAnonymous</h3>
                                    <p style={{ color: "black" }}>A site to reduce the addiction of the user towards alcohol product with the help of some questionarre and guides them towards leading a disciplined life</p>
                                    <div style={{ color: "black" }}>
                                        Made with React, Firebase and ChartJS
                                        <div style={{paddingTop:"1%"}}>
                                            <button class = "button2" style={{width:"100px", background:"black"}} onClick = {(e) => window.open("https://github.com/DiligentCoder-20022001/AlcoholicsAnonymous")}>Github</button>{"  "}
                                            <button class = "button2" style={{width:"100px"}} onClick = {(e) => window.open("https://alcoholicsanonymous-ad7cf.web.app/")}>Project</button>
                                        </div>
                                    </div>
                                </div>
                            </div></ScrollAnimation>
                        </div>
                    </div>
                    <div style={{paddingTop:"2%"}}></div>
                    <div class="row">
                        <div class="col-lg-6 col-md-12" style={styles1.fadeIn}>
                        <ScrollAnimation animateIn="fadeIn"><div>
                                <div style={{ paddingTop: "2%" }}></div>
                                <div class="card1 card-1">
                                    <h3 style={{ color: "black" }}>GeekBuzz</h3>
                                    <p style={{ color: "black" }}>A quiz app with admin and user side to help improve the quizzing community by increasing the competition level among the students</p>
                                    <div style={{ color: "black" }}>
                                        Made with Bootstrap, PHP and MySQL
                                        <div style={{paddingTop:"1%"}}>
                                            <button class = "button2" style={{width:"100px", background:"black"}} onClick = {(e) => window.open("https://github.com/DiligentCoder-20022001/GeekBuzz")}>Github</button>{"  "}
                                            
                                        </div>
                                    </div>
                                </div>
                            </div></ScrollAnimation>
                        </div>
                        <div class="col-lg-6 col-md-12" style={styles1.fadeIn}>
                        <ScrollAnimation animateIn="fadeIn"><div>
                                <div style={{ paddingTop: "2%" }}></div>
                                <div class="card1 card-1">
                                    <h3 style={{ color: "black" }}>Smart Shop</h3>
                                    <p style={{ color: "black" }}>An e-commerce application. Implemented in React.JS, firestore, charts.js and RazorPay API</p>
                                    <div style={{ color: "black" }}>
                                        Made with React.JS
                                        <div style={{paddingTop:"1%"}}>
                                            <button class = "button2" style={{width:"100px", background:"black"}} onClick = {(e) => window.open("https://github.com/DiligentCoder-20022001/SmartShop")}>Github</button>{"  "}
                                            <button class = "button2" style={{width:"100px"}} onClick = {(e) => window.open("https://smartshop-f2b19.web.app/")}>Project</button>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div></ScrollAnimation>
                        </div>
                        <div style={{paddingTop:"5%"}}></div>
                        <div style={{textAlign:"center"}}>
                        <button class = "button2" style={{background:"black"}} onClick = {(e) => window.open("https://github.com/DiligentCoder-20022001")}>View more !</button>
                        </div>
                    </div>
                    
                    <div style={{paddingTop:"5%"}}></div>
                </div>
            </div>
            <div style={{bottom:"0px",textAlign:"center", fontSize:"1rem", background:"black", height:"2rem", position:"relative", width:"100%"}}>
        Created by Siddharth using <img src="https://img.icons8.com/color/25/000000/react-native.png"/>
      </div>
            </StyleRoot>
        }
        if(this.state.status === "home")
        {
            return <Home/>

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
    render() {
        return this.checkStatus();
    }
}
export default Work;