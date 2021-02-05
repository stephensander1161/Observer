import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';

function HeroSection() {
	return (
		<div className="hero-container">
			<video controls autoPlay loop muted>
				<source src="videos/video-1.mp4" type="video/mp4" />
			</video>
			<h1>2021</h1>
			<p>What are you afraid of?</p>
			<div className="hero-btns">
				<Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
					Get Started
				</Button>
				<Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
					WATCH TRAILER <i className="far fa-play-circle" />
				</Button>
			</div>
		</div>
	);
}

export default HeroSection;
