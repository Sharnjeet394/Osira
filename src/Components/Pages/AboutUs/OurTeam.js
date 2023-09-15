import React from 'react'
import { Col, Row } from 'react-bootstrap'
import HeadingText from '../../Common/HeadingText/HeadingText'
import './AboutUs.scss'
import team_img from '../../../Assets/Images/team-img1.png'
import team_img2 from '../../../Assets/Images/team-img2.png'

const OurTeam = () => {
    return (
        <div className='team_sec'>
            <HeadingText heading="Our Team" />
            <Row className='team_inner'>
                <Col xl={6}>
                    <div className='team_box'>
                        <img src={team_img} alt="team-img" />
                        <h6>Peter Batt </h6>
                        <p>Peter Batt has, for many years, been interested in practical solutions to the encroaching climate crisis.
                            A Political Economy graduate from the University of Hertfordshire, he worked as a journalist for a number of newspaper titles over a period of three decades, including The Independent and The Times Educational Supplement. He also launched a UK-wide green consumer magazine, GreenerLiving, just months before the financial crash of 2007. His interests include economic theory, markets and power, belief systems and the human impacts on the environment. Today, his particular focus is on the role of debt in modern economies,
                            climate science and the transformative potential of blockchain technology.
                        </p>
                    </div>
                </Col>
                <Col xl={6}>
                    <div className='team_box team_box2'>
                        <img src={team_img2} alt="team-img" />
                        <h6>Peter Batt </h6>
                        <p>Peter Batt has, for many years, been interested in practical solutions to the encroaching climate crisis.
                            A Political Economy graduate from the University of Hertfordshire, he worked as a journalist for a number of newspaper titles over a period of three decades, including The Independent and The Times Educational Supplement. He also launched a UK-wide green consumer magazine, GreenerLiving, just months before the financial crash of 2007. His interests include economic theory, markets and power, belief systems and the human impacts on the environment. Today, his particular focus is on the role of debt in modern economies,
                            climate science and the transformative potential of blockchain technology.
                        </p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default OurTeam
