import React from 'react';
import { Button } from './Button';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<div className="footer-container">
			<section className="footer-subscription">
				<p className="footer-subscription-heading">Meet your doom in 2021</p>
				<p className="footer-subscription-text">You are being watched.</p>
				<div className="input-areas">
					<form>
						<input type="email" name="email" placeholder="Your Email" className="footer-input" />
						<Button buttonStyle="btn--outline">Subscribe</Button>
					</form>
				</div>
			</section>
			<div className="footer-links">
				<div className="footer-link-wrapper">
					<div className="footer-link-items" />
				</div>
			</div>
			<section className="social-media">
				<div className="social-media-wrap">
					<div className="footer-logo">
						<Link to="/" className="social-logo">
							OBSERVER <i className="far fa-eye" />
						</Link>
					</div>
					<small className="website-rights">OBSERVER © 2021 Website Created by Stephen Sander</small>
					<div className="social-icons">
						<Link className="social-icon-link facebook" to="/" target="_blank" aria-label="Facebook">
							<i className="fab fa-facebook-f" />
						</Link>
						<Link className="social-icon-link Instagram" to="/" target="_blank" aria-label="Instagram">
							<i className="fab fa-instagram" />
						</Link>
						<Link className="social-icon-link twitter" to="/" target="_blank" aria-label="Twitter">
							<i className="fab fa-twitter" />
						</Link>
						<Link className="social-icon-link linked" to="/" target="_blank" aria-label="LinkedIn">
							<i className="fab fa-linkedin" />
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Footer;
