import React from 'react';
import './Contact.css';
import { Button } from '../../components/Button';
import  Footer  from '../../components/Footer'

function Contact() {
	return (
    <>
		<div className="page_bg">
			<div className="contact-container">
				<section className="contact-subscription">
					<form>
						<input type="text" name="name" placeholder="Your Name" className="contact-input" />
						<input type="email" name="email" placeholder="Your Email" className="contact-input" />

						<textarea
							cols="30"
							rows="5"
							type="text"
							name="email"
							placeholder="Your Message"
							className="contact-input"
						/>

						<Button buttonStyle="btn--outline">Send Email</Button>
					</form>
				</section>
			
			</div>
		</div>
    <Footer />
    
          </>
	);
}

export default Contact;
