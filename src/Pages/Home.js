import React from 'react'
import bgImage from '../assects/AI_Generated_Image.png'
import { NavBar } from '../Components/NavBar'
import { HeroSection } from '../Components/HeroSection'
import { MainCards } from '../Components/MainCards'
import { Footer } from '../Components/Footer'

export const Home = () => {
  return (
    <div>
      <section className='w-full h-screen overflow-hidden' 
            style={{backgroundImage:`url(${bgImage})`,
                    backgroundRepeat:'no-repeat',
                    backgroundSize:'cover'
          }}  
        >
          <NavBar/>
          <HeroSection/>
      </section>
      <MainCards/>
      <Footer/>
    </div>
  )
}
