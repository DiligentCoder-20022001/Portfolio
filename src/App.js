import Home from './components/Home';
import './App.css';
import Work from './components/Work';
import Education from './components/education';
import Contact from './components/contact';
import Nav from './components/nav';
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">
      {/*<h1>OM GAN GANAPATHAYE NAMO NAMAH</h1>*/}
      <div class = "container">
        <Nav/>
        
      </div>
      <Route path = "/" exact component = {Home}/>
        <Route path = "/works" exact component = {Work}/>
        <Route path = "/academics" exact component = {Education}/>
        <Route path = "/contact" exact component = {Contact}/>
    </div>
    </Router>
  );
}

export default App;
