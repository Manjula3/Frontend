import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import JobListings from './components/JobListings'
import ViewAllJobs from './components/ViewAllJobs'

function App() {
  return (
    <div >
      <Navbar/>
      <Hero title ="Title" subtitle ="subtitle"/>
      <HomeCards/>
      <JobListings/>
       <ViewAllJobs/>
    

    

    </div>
  )
}

export default App
