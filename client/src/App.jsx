import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx';
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import SkillCards from './components/SkillCards.jsx';
import Experience from './components/Experience.jsx';
import Project from './components/Project.jsx';
import Contacts from './components/Contacts.jsx';
import Form from './components/Form.jsx';
import Form1 from './components/Form1.jsx';


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <SkillCards />
      <Experience />
      <Project />
      <Form />
      <Contacts />
    </>
  )
}

export default App;
