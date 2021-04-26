import React from 'react';
import './styles.css';
import Clg from './vit.jpg';
import School from './devi.jpg';
import Work from './Work';
import Home from './Home';
import Contact from './contact';
import { slideInLeft } from 'react-animations';
import { rollIn } from 'react-animations';
import { slideInRight } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
 
const styles = {
  slideInLeft: {
    animation: 'x 2s',
    animationName: Radium.keyframes(slideInLeft, 'slideInLeft')
  }
}

const styles1 = {
    rollIn: {
      animation: 'x 2s',
      animationName: Radium.keyframes(rollIn, 'rollIn')
    }
  }
  const styles2 = {
    slideInRight: {
      animation: 'x 2s',
      animationName: Radium.keyframes(slideInRight, 'slideInRight')
    }
  }
class Education extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            status: "education"
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
        if(this.state.status === "education")
        {
            return <StyleRoot><div>
                <div class = "container">
                <nav class="navbar navbar-light " style={{color:"#8884FF"}}>
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#" style={{color:"#BAF2D8", fontSize:"1.5rem"}}>{"{DiligentCoder}"}</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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
                    <h1 class = "title1">Education</h1>
                    </div>
                    <div style={{paddingTop:"5%"}}></div>
                    <div class = "row">
                        <div class = "col-lg-6 col-sm-12" style={{textAlign:"center"}}>
                            <div style={styles1.rollIn}><img src = {Clg} style={{height:"150px", width:"150px",borderRadius:"50%"}}/></div>
                        </div>
                        <div class = "col-lg-6 col-sm-12" style={styles2.slideInRight}>
                            <div style={{textAlign:"center"}}>
                            <h1 class = "title" style={{fontSize:"2rem"}}>VIT University, Chennai</h1>
                            <p>(2018 - 2022)</p>
                            </div>
                            <ul>
                                <li>CGPA : 8.46</li>
                                <li>Pursued courses like Operating system, DBMS, Data analytics, etc.</li>
                            </ul>
                        </div>
                    </div>
                    <div style={{paddingTop:"5%"}}></div>
                    <div class = "row">
                    <div class = "col-lg-6 col-sm-12" style={{textAlign:"center"}}>
                        <div style={styles1.rollIn}><img src = {School} style={{height:"150px", width:"150px",borderRadius:"50%"}}/></div>
                        </div>
                        <div class = "col-lg-6 col-sm-12" style={styles2.slideInRight}>
                        <div style={{textAlign:"center"}}>
                            <h1 class = "title" style={{fontSize:"2rem"}}>Devi Academy</h1>
                            <p>(2014 - 2018)</p>
                            </div>
                            <ul>
                                <li>Percentage: 89.2% (12th standard)</li>
                                <li>CGPA score: 9.6 (10th standard)</li>
                            </ul>
                            
                        </div>
                        
                    </div><div style={{paddingTop:"5%"}}></div>   
                    
                </div>
                
                <div style={{bottom:"0px",textAlign:"center", fontSize:"1.5rem", background:"black", height:"3rem", position:"relative", width:"100%"}}>
        Created by Siddharth using <img src="https://img.icons8.com/color/48/000000/react-native.png"/>
      </div>
            </div></StyleRoot>
        }
        if(this.state.status === "work")
        {
            return <Work/>

        }
        if(this.state.status === "home")
        {
            return <Home/>
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
export default Education;