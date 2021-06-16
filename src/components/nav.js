import React from 'react';
import './styles.css';
import { Link, BrowserRouter as Router } from 'react-router-dom';
class Nav extends React.Component{
    render()
    {
        return (
            <nav class="navbar navbar-light " style={{color:"#8884FF"}}>
                <div class="container-fluid">
                    <a class="navbar-brand" href="#" style={{color:"#BAF2D8", fontSize:"1.5rem"}}>{"{DiligentCoder}"}</a>
                    <button style={{background:"white"}} class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button> 
                    <div class="collapse navbar-collapse" id="navbarNav" style={{textAlign:"center"}}>
                    <ul class="navbar-nav" >
                        <li class="nav-item">
                        <Link to = '/' style = {{textDecoration:"none"}}><a class="nav-link active"  href="#" style={{color:"#BAF2D8", fontSize:"1rem"}} >About</a></Link>
                        </li>
                        <li class="nav-item">
                        <Link to = '/works' style = {{textDecoration:"none"}}><a class="nav-link" href="#" style={{color:"#BAF2D8", fontSize:"1rem"}} >Projects and Experience</a></Link>
                        </li>
                        <li class="nav-item">
                        <Link to = '/academics' style = {{textDecoration:"none"}}><a class="nav-link" href="#" style={{color:"#BAF2D8", fontSize:"1rem"}} >Academics</a></Link>
                        </li>
                        <li class="nav-item">
                        <Link to = '/contact' style = {{textDecoration:"none"}}><a class="nav-link" href="#" style={{color:"#BAF2D8", fontSize:"1rem"}} >Contact</a></Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
export default Nav;