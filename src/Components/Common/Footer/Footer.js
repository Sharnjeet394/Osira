import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import footerlogo from "../../../Assets/Images/logo.svg"
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from '../../../Assets/svgs/svg'
import "./Footer.scss"

const Footer = () => {
  return (
    <>
      <div className='siteFooter'>
        <div className='innerFooter'>
          <Container>
            <Row>
              <Col xs={12} md={12} lg={5} xl={6} className='mb-4 mb-lg-0'>
                <div className='footerContent'>
                  <img src={footerlogo} alt='icon' />
                  <p>Osira is an online governance platform and token for the climate and sustainable finance communities.</p>
                  <p>In combination with a real-life foundation, Osira Network Limited, the platform aims to connect investors and funders with climate entrepreneurs, frontline communities, NGOs, scientists and researchers to grow an economic community that can drive sustainability, climate mitigation and adaptation, as well as related cultural, health and humanitarian work.</p>
                  <p>Osira Network Limited is a company registered in England, number 14527687.</p>
                  <p>Registered address: 71-75 Shelton Street, London WC2H 9JQ</p>
                </div>
              </Col>
              <Col xs={12} md={6} lg={4} xl={3} className='mb-4 mb-md-0'>
                <div className='footerLink'>
                  <h4>Quick links</h4>
                  <div className='d-flex flex-wrap'>
                    <ul>
                      <li><NavLink to="/">Home</NavLink></li>
                      <li><NavLink to="/about-us">About us</NavLink></li>
                      <li><Link to="#">Security</Link></li>
                    </ul>
                    <ul>
                      <li><Link to="https://osira.network/privacy-policy/" target="_blank" rel="noreferrer">Privacy policy</Link></li>
                      <li><Link to="#">Cookie policy</Link></li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={6} lg={3} xl={3}>
                <div className='footersocialLink'>
                  <h4>Join our community</h4>
                  <div className='d-flex flex-wrap'>
                    <Link to="https://twitter.com/i/flow/login?redirect_after_login=%2FOsiraNetwork" target='_blank' rel="noreferrer"><TwitterIcon /></Link>
                    <Link to="https://www.instagram.com/osira.network/" target='_blank' rel="noreferrer"><InstagramIcon /></Link>
                    <Link to="https://www.facebook.com/osiranetwork" target="_blank" rel="noreferrer"><FacebookIcon /></Link>
                    <Link to="https://www.youtube.com/channel/UCmOr_ECBqhEUSkgxTtUCblg" target="_blank" rel="noreferrer"><YoutubeIcon /></Link>
                    {/* <Link to="#" target='_blank'><LinkedinIcon /></Link> */}
                    {/* <Link to="#" target='_blank'><DiscordIcon /></Link> */}
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='text-center copyrightFooter'>
          <p>@ 2023 Osira Network Limited. All rights reserved.</p>
        </div>
      </div>
    </>
  )
}

export default Footer
