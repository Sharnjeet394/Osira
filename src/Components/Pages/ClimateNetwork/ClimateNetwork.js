import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import climate_img from "../../../Assets/Images/climate_img.png";
import './ClimateNetwork.scss'
import DoubleQuote from "./DoubleQuote/DoubleQuote";
import AOS from 'aos';
import 'aos/dist/aos.css';

function ClimateNetwork() {
    useEffect(() => {
        AOS.init({
            duration: 1500,
            easing: 'linear-ease',
        });
    }, [])
    return (
        <>
            <section className="ClimateNetwork">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} className="mb-5 mb-lg-0">
                            <div className="Problem-img" data-aos="fade-right">
                                <img src={climate_img} alt="img" />
                            </div>
                        </Col>

                        <Col lg={6}>
                            <div className="Problem_content" data-aos="fade-left">
                                <h3>What is Osira?</h3>
                                <p>Part financial marketplace, part monetary system and part social media portal, Osira is an online platform that enables people to connect and make climate projects happen.</p>
                                <p>With its own utility token and built with security and decentralised finance (DeFi) smart contracts at its core,Osira facilitates the symbiotic exchange of expertise, data and finance.</p>
                                <p>Users can search and fund proposals, apply for funding themselves, or provide expertise to help shape the Osira Protocol, the platform’s star-rating framework.</p>
                                <p>Osira tokenholders can also stand for election to the platform’s General Council, whose role it is to represent the community, maintain high standards and ensure optimal functioning.</p>
                                <p>By making the platform secure, transparent and democratic, Osira seeks to grow the numbers engaged with the climate finance market and drive transformative change in the process.</p>
                                <h6>Read our whitepaper to find out more.</h6>
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