import React from 'react'
import Business from './components/Business'
import Delivery from './components/Delivery'
import Design from './components/Design'
import Main from './components/Main'
import Navbar from './components/Navbar'
import Process from './components/Process'
import Project from './components/Project'
import Section from './components/Section'
import Tabs from './components/NavTabs'
import Technology from './components/Technology'
import Pricing from './components/Pricing'
import Cards from './components/Cards'
import Reviews from './components/Reviews'
import Carosal from './components/Carosal'
import Contact from './components/Contact'
import Form from './components/Form'

import Foooter from './components/Foooter'



function App() {
  return (
    <div>
      <Navbar/>
      <Main/>
      <Section/>
      <Process/>
      <Technology/>
      <Design/>
      <Business/>
      <Delivery/>
      <Project/>
      <Tabs/>
      <Pricing/>
      <Cards/>
      <Reviews/>
      <Carosal/>
      <Contact/>
      <Form/>
      <Foooter/>
      
    </div>
  )
}

export default App