import React from 'react';
function SkillsSection({skill,progress,width}){
    return(
        <div className="skillsSection">
            <div className="skills-container">
                <div className="skill-title">{skill}</div>
                <div className="skill-bar">
                    <p className="skill-text">{progress} </p>

                        <div className="skill-progress">
                        <div className="progress">
                            <div className="inner-progress" style={{width:width}} >

                            </div>
                        </div>

                            
                        </div>
                </div>

            </div>
        </div>
    )
}
export default SkillsSection;