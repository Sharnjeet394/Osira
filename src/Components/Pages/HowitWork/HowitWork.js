import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import icon1 from '../../../Assets/Images/works-img1.png'
import icon2 from '../../../Assets/Images/works-img2.svg'
import icon3 from '../../../Assets/Images/works-img3.svg'
import HeadingText from '../../Common/HeadingText/HeadingText'
import './HowitWork.scss'

const HowitWork = () => {
  const works = [
    {

      icon: icon1,
      heading: "Sign up",
      para: "Anyone with internet access will be able to register.Users can register as individuals or organizations, and must first complete a know-your-customer (KYC) or know-your-business (KNB) process before they can use the platform."
    },
    {
      icon: icon2,
      heading: "Fund projects",
      para: "Search proposals by region, category or keyword and choose your preferred funding options – invest, lend or donate.Investors and donors will gain voting rights on proposals they fund."
    },
    {
      icon: icon3,
      heading: "Apply for funding",
      para: "List your proposal, setting out its aims and value proposition, along with its funding requirements and milestones.Applicants can offer a mix of funding options and, when circumstances have changed, can submit amended timescales and returns for funder consideration."
    },
  ]
  return (
    <section className='howwork_sec'>
      <Container>
        <div className='howwork_sec_inner'>
          <HeadingText heading="How it will work" />
          <div className='howwork_sec_inner_box'>
            <Row>
              {works.map((data) => {
                return (
                  <Col md={6} lg={4} xl={4}>
                    <div className='howwork_sec_inner_box_card' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="400">
                      <img src={data.icon} alt="icon" />
                      <h5>{data.heading}</h5>
                      <p>{data.para}</p>
                    </div>
                  </Col>
                )
              })}
            </Row>
            <div className='howwork_sec_inner_box_card card2' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="400">
              <img src={icon1} alt="icon" />
              <h5>Provide expertise</h5>
              <p>Individuals and representatives of institutions with expertise in critical topics such as climate science, ESG finance, environment law, international development or indigenous communities can be appointed to the Osira Protocol Committee.
                There, they can develop and provide guidance on trends, funding priorities, proposal standards and due diligence, as well as give funding proposals a star rating.
                However, none of this guidance will constitute financial advice, and it will always be the funder’s responsibility to complete their own due diligence before supporting a funding proposal.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HowitWork
