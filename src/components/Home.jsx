import React from 'react'

const Home = () => {
  return (
    <section id="home" className="w-full relative scroll-mt-20 md:scroll-mt-24">
      {/* Desktop view: background cover */}
      <div className="hidden md:block w-full h-screen bg-top bg-cover" style={{ backgroundImage: `url('./images/Landing.jpg')` }} />

      {/* Mobile view: full image visible */}
      <div className="md:hidden w-full pt-[60px]">
        {/* pt-[60px] = navbar height */}
        <img
          src="./images/Landing.jpg"
          alt="Landing"
          className="w-full h-auto object-contain block"
        />
      </div>
    </section>
  )
}

export default Home
