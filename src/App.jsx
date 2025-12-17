import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Programs from './components/Programs'
import Videos from './components/Videos'
import Impact from './components/Impact'
import Gallery from './components/Gallery'
import Blogs from './components/Blogs'
import Review from './components/Review'
import Footer from './components/Footer'
import Team  from './components/Team'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Programs />
      <Videos />
      <Impact />
      <Gallery />
      {/* <Blogs /> */}
      <Team />
      {/* <Review /> */}
      <Footer />
    </div>
  )
}

export default App