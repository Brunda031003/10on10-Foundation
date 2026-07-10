import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Programs from './components/Programs'
import Videos from './components/north star/Videos'
import Gallery from './components/north star/Gallery'
import Blogs from './components/Blogs'
import Review from './components/Review'
import Footer from './components/Footer'
import Team  from './components/Team'
import Experience from './pages/Experience'
import LearnMore from "./components/LearnMore";

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