import React from 'react';
import Title from '../components/title'
import Menuitems from '../components/menuitems'
import projects from '../components/allprojects';
import { useState } from 'react';





function ProjectsPage() {
    const [menuItems]=useState(projects);

    return(
        <div className="projectsPage">
             <div className="p-title">
              <Title  title={'My Projects'} span={'Projects Page'}/>
              </div>

              <div className="projects-data">
                  <Menuitems menuItem={menuItems} />

                   
              </div>

            

        </div>
    )
    
}
export default ProjectsPage;

