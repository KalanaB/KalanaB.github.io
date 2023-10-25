import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Navigation from './components/nav/Navigation'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Qualifications from './components/qualifications/Qualifications'
import Q from './components/qualifications/Q'
import Portfolio from './components/portfolio/Portfolio'
import Testimonial from './components/testimonial/Testimonial'
import Blogs from './components/blogs/Blogs'
import Paints from './components/paints/Paints'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <>
      
      {/* <Navigation /> */}
      <Nav />
      <Header />
      <About />
      {/* <Experience /> */}
      {/* <Qualifications/> */}
      {/* <Q/> */}
      {/* <Portfolio />      */}
      {/* <Testimonial /> */}
      {/* <Blogs /> */}
      {/* <Paints /> */}
      <Contact />
      <Footer />
      


    </>
  )
}

export default App


