import { Col, Container, Row } from "react-bootstrap";
import climate_img from "../../../Assets/Images/climate_img.png";
import './ClimateNetwork.scss';
import DoubleQuote from "./DoubleQuote/DoubleQuote";

function ClimateNetwork() {
    return (
        <>
            <section className="ClimateNetwork">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} className="mb-5 mb-lg-0">
                            <div className="Problem-img" data-aos="fade-up">
                                <img src={climate_img} alt="img" />
                            </div>
                        </Col>

                        <Col lg={6}>
                            <div className="Problem_content">
                                <h3 data-aos="fade-up" data-aos-duration="350">What is Osira?</h3>
                                <p data-aos="fade-up" data-aos-duration="400">Part financial marketplace, part monetary system and part social media portal, Osira is an online platform that enables people to connect and make climate projects happen.</p>
                                <p data-aos="fade-up" data-aos-duration="450">With its own utility token and built with security and decentralised finance (DeFi) smart contracts at its core,Osira facilitates the symbiotic exchange of expertise, data and finance.</p>
                                <p data-aos="fade-up" data-aos-duration="500">Users can search and fund proposals, apply for funding themselves, or provide expertise to help shape the Osira Protocol, the platform’s star-rating framework.</p>
                                <p data-aos="fade-up" data-aos-duration="550">Osira tokenholders can also stand for election to the platform’s General Council, whose role it is to represent the community, maintain high standards and ensure optimal functioning.</p>
                                <p data-aos="fade-up" data-aos-duration="600">By making the platform secure, transparent and democratic, Osira seeks to grow the numbers engaged with the climate finance market and drive transformative change in the process.</p>
                                <h6 data-aos="fade-up" data-aos-duration="650">Read our whitepaper to find out more.</h6>
                            </div>
                        </Col>
                    </Row>

                    <DoubleQuote />
                </Container>
            </section>
        </>
    );
}

export default ClimateNetwork;