import React from 'react';
import Title from '../components/title'
import ImageSection from '../components/ImageSection.js'
import SkillsSection from '../components/skillsSection'
import ServicesSection from '../components/servicesSection'
import design from '../img/s1.png'



function AboutPage() {
    return(
        <div className="AboutPage">
            <Title title={'About Me'} span={'About Me'}/>
            <ImageSection/>
            <Title title={'My skills'} span={'My skills'}/>
            <div className="skils-container">
            <SkillsSection skill={'JavaScript'} progress={'78%'} width={'78%'}/>
            <SkillsSection skill={'React JS'} progress={'56%'} width={'56%'}/>
            <SkillsSection skill={'HTML 5'} progress={'96%'} width={'96%'}/>
            <SkillsSection skill={'CSS-3'} progress={'86%'} width={'86%'}/>
            <SkillsSection skill={'Sass'} progress={'84%'} width={'84%'}/>
            <SkillsSection skill={'Git'} progress={'72%'} width={'72%'}/>
            <SkillsSection skill={'Python'} progress={'42%'} width={'42%'}/>
            <SkillsSection skill={'Node Js'} progress={'41%'} width={'41%'}/>
            <SkillsSection skill={'C'} progress={'32%'} width={'32%'}/>
            <SkillsSection skill={'Web Design'} progress={'50%'} width={'50%'}/>



            </div>
            <Title title={'Services'} span={'Services'}/>

            <div className="services-container">
                <ServicesSection image={design} title="Web Development" servicetext="  We create user friendly,responsive, cross-platform and scalable modern websites which leave your bussiness outstanding and most competitive" />

<ServicesSection image={design} title="Machine Learning" servicetext=" We use machine learning algorithms to understand customers behaviour, deliver personalized content and information and also speed up discovery." />
                <ServicesSection image={design} title="Artificial Intelligence" servicetext=" We transform your website by incorporating AI.We are able to automate tasks and improve user experience with chatbots, web design, marketing strategy etc." />

                


            </div>

        </div>
    )
    
}
export default AboutPage;