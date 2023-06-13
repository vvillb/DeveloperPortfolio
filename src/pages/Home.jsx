import React from 'react'
import Layout from '../AppLayout/Layout'
import Hero from '../components/Hero'
import AboutMe from '../components/AboutMe'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <Layout>
        <Hero/>
        <AboutMe/>
        <Projects/>
        <Contact/>
    </Layout>
  )
}

export default Home
