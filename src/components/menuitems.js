import React from 'react';

function Menuitems({menuItem}){
    return(
        <div className="projects">
            {
                menuItem.map((item)=>{
                    return(<div className="project" key={item.id}>
                        <div className="image-data">
                            <img src={item.image} alt=""/>

                            <ul className="hover-item">
                                <li>
                                    <a href={item.link1}>{item.icon1}</a>
                                    <a href={item.link2}>{item.icon2}</a>

                                </li>
                            </ul>
                        </div>
                        <a href={item.link1}><h5>{item.title}</h5></a>

                        <p className="project-text">{item.text}</p>


                    </div>
                    )
                }

                )
            }

        </div>
    )

}
export default Menuitems;