import React from 'react';
import ContactItem from "../components/contactItem";
import email from "../img/email.png"
import phone from "../img/phone.png"
import location from "../img/location.png"
import Title from '../components/title'




function ContactPage() {
    return(
        <div className="contact-page">
           <div className="titlec"><Title title={'Contact Me'} span={'Contact Page'}/></div>

        <div className="ContactPage">
            <div className="map-sect">
<iframe title="title" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55606.68641315362!2d36.87331968023609!3d-0.407500443399856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1828677a4955ff13%3A0x7ae4dae9615396a6!2sDedan%20Kimathi%20University%20Of%20Technology!5e1!3m2!1sen!2ske!4v1629784973260!5m2!1sen!2ske"  allowFullScreen="" loading="lazy"></iframe>            </div>
            <div className="contact-sect">
                <ContactItem  icon={phone} text1={'+254742734120'} text2={'+254785649470'} title="Phone" link="tel:0742734120"/>
                <ContactItem  icon={email} text1={'jontejonhn@gmail.com'} text2={'nkjohn.co.ke'} title="Email" link="mailto:jontejonhn@gmail.com"/>
                <ContactItem  icon={location} text1={'Dedan Kimathi University'} text2={'Nyeri'} title="Location" link="https://www.google.com/maps"/>

            </div>
        </div>
        </div>
    )
    
}
export default ContactPage;