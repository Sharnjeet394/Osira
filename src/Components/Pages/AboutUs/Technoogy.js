import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './AboutUs.scss'
import technology from '../../../Assets/Images/technology-img.png'
import { Link } from 'react-router-dom'

const Technoogy = () => {
  

    return (
        <div className='technology_sec' data-aos="fade-down">
            <div className='techno_box'>
                <Row>
                    <Col lg={6} xl={6}>
                        <div className='technology_img'>
                            <img src={technology} alt="tech" />
                        </div>
                    </Col>
                    <Col lg={6} xl={6}>
                        <div className='technology_content'>
                            <h2>Osira’s technology partners</h2>
                            <p>Osira is now ready to proceed with the platform’s implementation, having completed an extensive discovery and business
                                analysis process with our blockchain development partner, <Link to="/">Antier Solutions Pvt Ltd</Link>.
                                Our target is to have the Osira platform live by the end of November 2023, in time for the COP28 UN climate summit.
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Technoogy
