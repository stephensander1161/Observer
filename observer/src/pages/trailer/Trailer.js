import React from 'react';
import './Trailer.css';
import Footer from '../../components/Footer'

function Trailer() {
	return (
    <>
		<div className="trailer-container">
			<video controls autoPlay loop muted>
				<source src="videos/video-1.mp4" type="video/mp4" />
			</video>
			<h1>Trailer Coming Soon</h1>
			<p>Release 2021</p>
			<div className="trailer-btns" />
		</div>
    <Footer />
    </>

	);
}

export default Trailer;
