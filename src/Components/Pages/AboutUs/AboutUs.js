import React from 'react'
import { Container } from 'react-bootstrap'
import AboutUsBanner from './AboutUsBanner'
import OurTeam from './OurTeam'
import Technoogy from './Technoogy'

const AboutUs = () => {
    return (
        <div className='about_sec'>
            <Container>
                <AboutUsBanner />
                <OurTeam/>
                <Technoogy/>
            </Container>
        </div>
    )
}

export default AboutUs
