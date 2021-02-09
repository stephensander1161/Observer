import React, { useState, } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import { Button } from '../../components/Button';
import  Footer  from '../../components/Footer'


function Contact() {
	const [messageData, setMessageData] = useState({ name: '', email: '', message: '', subject: '', disabled: false, emailSent: null});


 function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_krhsxmg', 'template_izipfw9', e.target, 'user_AcjqpwbLJL2GOQ6YpqZ9g')
      .then((result) => {
          console.log(result.text);
		  alert('Message Sent!')
      }, (error) => {
          console.log(error.text);
      });


	  setMessageData({
		  name: '',
		  email: '',
		  subject: '',
		  message: '',

	  })



  } 



	return (
    <>
		<div className="page_bg">
			<div className="contact-container">
				<section className="contact-subscription">
					<form onSubmit={sendEmail}>
						<input value={messageData.name} type="text" name="name" placeholder="Your Name" className="contact-input" onChange={(e) => setMessageData({ ...messageData, name: e.target.value })} />
						<input value={messageData.email} type="email" name="email" placeholder="Your Email" className="contact-input" onChange={(e) => setMessageData({ ...messageData, email: e.target.value })} />
						<input value={messageData.subject} type="text" name="subject" placeholder="Subject" className="contact-input" onChange={(e) => setMessageData({ ...messageData, subject: e.target.value })} />

						<textarea
						value={messageData.message}
							cols="30"
							rows="5"
							type="text"
							name="message"
							placeholder="Your Message"
							className="contact-input"
							onChange={(e) => setMessageData({ ...messageData, message: e.target.value })}
						/>

						<Button buttonStyle="btn--outline">Send Email</Button>
						{messageData.emailSent === true && <p>Email Sent</p>}
						{messageData.emailSent === false && <p>Email Not Sent</p>}

					</form>
				</section>
			
			</div>
		</div>
    <Footer />
    
          </>
	);
}

export default Contact;
