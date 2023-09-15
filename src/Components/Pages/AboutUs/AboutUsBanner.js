import React from 'react'
import { Col, Row } from 'react-bootstrap'
import osira_img from '../../../Assets/Images/about-us-img.png'
import './AboutUs.scss'

const AboutUsBanner = () => {


    return (
        <div className='banner_sec'>
            <div className='banner_inner'>
                <Row className='align-items-center'>
                    <Col xl={6} data-aos="fade-up">
                        <div className=''>
                            <h2>What is Osira?</h2>
                            <p>Part financial marketplace, part monetary system and part social media portal, Osira aims to create a community that supports climate enterprises, research projects and technologies, enabling funders to
                                put their money to good use in line with their risk appetite and desired level of return. With its own utility token and built on blockchain technology and decentralised finance (DeFi) smart contracts, Osira aims to facilitate the symbiotic exchange of expertise, data and finance.
                                <br /><br />
                                Users can search and fund proposals, apply for funding themselves, or provide expertise to help shape the Osira Protocol, the platform’s project-rating framework. Osira tokenholders can also stand for election
                                to one of the platform’s governance committees, whose role it is to maintain high standards and optimal functioning.<br /><br />
                                By making the platform secure, transparent and democratic, Osira seeks to grow the numbers engaged with the climate finance market and drive transformative change in the process.</p>
                        </div>
                    </Col>
                    <Col xl={6} data-aos="fade-up" data-aos-delay="300">
                        <div className='mx-auto osira_img'>
                            <img src={osira_img} alt="osira-img" />
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default AboutUsBanner
