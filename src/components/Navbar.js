import React from 'react';
import brainchip from '../img/pp.jpeg'
import {NavLink} from 'react-router-dom'

function Navbar(){
    return(
        <div className="Navbar">
            <nav className='nav'>
            <div className="profile">
                <img className="img" src={brainchip} alt=""/>
            </div>

                <ul className='nav-items'>
                    <li className='nav-item'>
                        <NavLink to="/" exact activeClassName='active'>
                            Home

                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/about" exact activeClassName='active'>
                            About

                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/projectsPage" exact activeClassName='active'>
                        projects

                        </NavLink>
                    </li>

                    <li className='nav-item'>
                        <NavLink to="/blogsPage" exact activeClassName='active'>
                            Blogs

                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/contacts" exact activeClassName='active'>
                            Contacts

                        </NavLink>
                    </li>

                </ul>
                <footer className='footer'>
                <p>@2021 NK John </p>
            </footer>

            </nav>
        </div>
    )
}
export default Navbar;