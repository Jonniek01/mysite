import './App.css';
import './App.scss';
import Navbar from "./components/Navbar.js";
import HomePage from './pages/HomePage';
import { Switch,Route } from "react-router-dom";
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/projectsPage';
import BlogsPage from './pages/blogsPage';
import ContactPage from './pages/contact';
import { useState } from 'react';



function App() {
  const[navToggle,setNavTogle]=useState(false)

  const navClick=()=>{
    setNavTogle(!navToggle);
  }
  return (
    <div className="App">
      <div className={`sidebar ${navToggle ? "nav-toggle" :""}`} >
        <Navbar/>
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>

      </div>
      <div className="main-content">
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <HomePage/>

            </Route>
            <Route path="/about" exact>
              <AboutPage/>

            </Route>
            <Route path="/projectsPage" exact>
            <ProjectsPage/>

            </Route>
            <Route path="/blogsPage" exact>
              <BlogsPage/>

            </Route>
            <Route path="/contacts" exact>
              <ContactPage/>

            </Route>



          </Switch>

        </div>
      </div>
      

     
    </div>
  );
}

export default App;
