import React from 'react';
import about from '../img/John3.jpg'
function ImageSection(){
    return(
        <div className="imageSection">
            <div className="img">
                <img src={about} alt=""></img>
            </div>
            <div className='about-info'>
                <h4>My name<span> Ndigirigi John</span></h4>
                <p className='about-text'>
                 I develop websites. My main interests  are technology and music. I also like sports and movies.

    
                </p>
                <div className='about-details'>

                    <div className='left-section'>
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Email</p>

                    </div>
                    <div className='right-section'>
                        <p>: Ndigirigi John</p>
                        <p>: 19</p>
                        <p>: Kenyan</p>
                        <p>: Swahili, French, English.</p>
                        <p>: Jontejonhn@gmail.com</p>

                    </div>
            </div>
            <button  className="btn" ><a href="../img/pp.jpeg" download>DOWNLOAD CV</a></button>
         

            </div>

        </div>
    )
} 
 
export default ImageSection;