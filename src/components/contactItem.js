import React from 'react';

function contactItem({icon,text1,text2,title,link}) {
    return(
        <div className="contactItem">
            <div className="contact">
            <a href={link}><img src={icon} alt=""/></a>
                <div className="right-items">
                    <h6>{title}</h6>
                    <a href={link}><p>{text1}</p></a>
                    <a href={link}><p>{text2}</p></a>

                </div>

            </div>

        </div>
    )
    
}
export default contactItem;