import React, { Component } from 'react';
import '../../App.css'
import HeroSection from '../../components/HeroSection'
import Footer from '../../components/Footer'
import './Home.css';
function Home() {
	return (
    <>
    <HeroSection />
    <img className="pic" src="/images/still-26.jpg" />
    <Footer />
    		

    </>
  )
  }

export default Home
