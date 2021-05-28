import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../scss/EmailForm.scss'

export default function ContactUs() {
    const [name, setName] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [message, setMessage] = useState(""); 
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_88wfll3', 'template_00v648k', e.target, 'user_89m46EDtVRQ4lbAI9TRlA')
        .then((result) => {
            console.log("Email sent successfully!")
        }, (error) => {
            console.log(error.text);
        });
    }
    
    let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    return (
        <div id="emailForm">
            <br></br>
            <form className="contact-form" onSubmit={sendEmail}>
                <input type="hidden" name="contact_number"/>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label>Name</label>
                        <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)} name="from_name"/>
                        {
                            name.length < 2  && name.length > 0 ? 
                            <p style={{color:'red'}}>Name needs to be at least 1 character.</p>:
                            ''
                        }
                    </div>
                    <div class="form-group col-md-6">
                        <label>Email</label>
                        <input type="text" className="form-control" onChange={(e)=>setEmail(e.target.value)} name="from_email" placeholder="Where do you want me to reply to?"/>
                        {
                            regEmail.test((email)) || email.length <= 0 ?
                            "" :
                            <p style={{color:'red'}}>Email has to be valid</p>
                        }
                    </div>
                </div>
                <div class="form-group">
                    <label>Message</label>
                    <input type="text" className="form-control" onChange={(e)=>setMessage(e.target.value)} name="message"/>
                    {
                        message.length < 4  && message.length > 0 ? 
                        <p style={{color:'red'}}>Message needs to be at least 3 characters.</p>:
                        ''
                    }
                </div>
                <div id='buttonDiv'>
                    <button type="submit" className="btn btn-outline-warning btn-lg" value="Send">Send</button> 
                </div>
            </form>
        </div>
    );
}