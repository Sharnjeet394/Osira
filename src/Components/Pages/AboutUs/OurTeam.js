import React from 'react'
import { Col, Row } from 'react-bootstrap'
import team_img from '../../../Assets/Images/team-img1.png'
import team_img2 from '../../../Assets/Images/team-img2.png'
import HeadingText from '../../Common/HeadingText/HeadingText'
import './AboutUs.scss'

const OurTeam = () => {
    return (
        <div className='team_sec'>
            <HeadingText heading="Our Team" />
            <Row className='team_inner'>
                <Col md={6} xl={6} data-aos="fade-down">
                    <div className='team_box'>
                        <img src={team_img} alt="team-img" />
                        <h6>Peter Batt </h6>
                        <p>Peter Batt has, for many years, been interested in practical solutions to the encroaching climate crisis. A Political Economy graduate from the University of Hertfordshire, he worked as a journalist for a number of newspaper titles over a period of three decades, including The Independent and The Times Educational Supplement. He also launched a UK-wide green consumer magazine, GreenerLiving, just months before the financial crash of 2007. His interests include economic theory, markets and power, belief systems and the human impacts on the environment. Today, his particular focus is on the role of debt in modern economies, climate science and the transformative potential of blockchain technology. 
                        </p>
                    </div>
                </Col>
                <Col md={6} xl={6} data-aos="fade-down">
                    <div className='team_box team_box2'>
                        <img src={team_img2} alt="team-img" />
                        <h6>Janette Benson </h6>
                        <p>Janette became involved with the social inclusion agenda, applying social movement theory and methodology in grassroots communities and marginalised groups after graduating with a BSc (Hons) in Anthropology from University College London in 2003. While at UCL, Janette achieved a first for her thesis on biotechnology, globalisation and development. More recently, she applied these approaches as part of a major NHS research project on social inclusion. Janette also has an extensive history of campaigning on environmental issues and became interested in the rise of digital ledger and blockchain technology following the 2007 financial crash.
                        </p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default OurTeam
