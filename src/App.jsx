import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Programs from './components/Programs'
import Blogs from './components/Blogs'
import Review from './components/Review'
import Footer from './components/Footer'
import Team  from './components/Team'
import LearnMore from "./components/Learnmore";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <LearnMore />
      {/* <Programs /> */}
      
      <Team />
      <Blogs />
      {/* <Review /> */}
      <Footer />
    </div>
  )
}

export default App