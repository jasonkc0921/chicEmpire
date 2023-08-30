import { useState } from 'react'
// import './App.css'
import { Navbar } from './components/Navbar'
import Hero_new from './components/Hero_new';
import Hero_test from './components/Hero_test';
import { Why } from './components/Why';
import { Return } from './components/Return';
// import { Diversification } from './components/Diversification';
// import { Diversification_new } from './components/Diversification_new';
import Bubbles from "./Bubbles";
import HowItWork from './components/HowItWork';
import HowItWork_dark from './components/HowItWork_dark';
import FAQ from './components/FAQ';
import { Register } from './components/Register';
import BackToTopButton from './components/BackToTopButton'

function App() {


  return <main>   
    {/* <Bubbles /> */}
    <Navbar />
    <Hero_new />
    <Why />
    <Return />
    {/* <Diversification /> */}
    {/* <Diversification_new /> */}
    {/* <HowItWork /> */}
    <HowItWork_dark />
    <FAQ />
    <Register />
    <BackToTopButton />
    </main> 


}

export default App
