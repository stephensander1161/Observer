import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';
import { Link } from 'react-router-dom';

function HeroSection() {
	return (
		<div className="hero-container">
			<h1>In 2021</h1>
			<p>What are you afraid of?</p>
			<div className="hero-btns">
				<Link to="/trailers">
					<Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
						WATCH TRAILER <i className="far fa-play-circle" />
					</Button>
				</Link>
			</div>
			    <img className="pic" src="/images/still-26.jpg" />

		</div>
	);
}

export default HeroSection;
