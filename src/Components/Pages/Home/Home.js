import React from 'react'
import ClimateNetwork from '../ClimateNetwork/ClimateNetwork'
import HowitWork from '../HowitWork/HowitWork'
import OsiraBlog from '../OsiraBlog/OsiraBlog'
import Roadmap from '../Roadmap/Roadmap'
import SolutionSection from '../SolutionSection/SolutionSection'
import TheProblem from '../TheProblem/TheProblem'
import HomeBanner from './HomeBanner/HomeBanner'

const Home = () => {
  return (
    <div>
      <HomeBanner/>
      <TheProblem/>
      <SolutionSection/>
      <ClimateNetwork/>
      <HowitWork />
      <Roadmap />
      <OsiraBlog />      
    </div>
  )
}

export default Home
