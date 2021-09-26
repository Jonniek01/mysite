import React from 'react';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
function HomePage() {
    return <div className="HomePage">
        <header className="hero">
            <h1 className="hero-text">
                Hello, I am  
                <span> Ndigirigi John.</span>
                <p className="h-sub-text">
                   This is my Portfolio Site. I am a computer science Student, web developer and an entrepreneur.
                </p>
                <div className="icons">
                    <Link className="icon-holder">
                    <FontAwesomeIcon icon={faFacebook} className="icon fb"/>

                    </Link >
                    <Link className="icon-holder">
                    <FontAwesomeIcon icon={faGithub} className="icon gh"/>

                    </Link>
                    <Link className="icon-holder">
                    <FontAwesomeIcon icon={faYoutube} className="icon yt"/>

                    </Link>


                </div>

            </h1>

        </header>
        
    </div>
}
export default HomePage;