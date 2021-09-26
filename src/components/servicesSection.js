import React from 'react';
function ServicesSection({image,title,servicetext}){
    return(
    <div className="ServicesSection">
        <div className="service">
            <div className="service-content">
            <img id="servimg" src={image} alt=""/>
            <h5 className="s-title">{title}</h5>
            <p className="service-text">
          {servicetext}
            </p>
            </div>

        </div>
        

    </div>
    )
}
export default ServicesSection;
