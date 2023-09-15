// import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import './SolutionSection.scss'

function SolutionSection() {
    return (
        <>
            <section className="SolutionSection">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <div className="Problem_content">
                                <h3 data-aos="fade-up" data-aos-duration="350">The solution</h3>
                                <p data-aos="fade-up" data-aos-duration="400">The climate and sustainable finance markets are currently worth around $3.6trn a year,and are primed for exponential long-term growth.</p>
                                <p data-aos="fade-up" data-aos-duration="450">Blockchain technology offers us a unique – possibly the only – opportunity to liberate these markets, to maximise the number and range of participants.</p>
                                <p data-aos="fade-up" data-aos-duration="500">Our aim is to grow the sustainable economy, as well as support research, new technologies,as well as mitigation and adaption projects around the world.</p>

                                <div className="Solution_list">
                                    <p data-aos="fade-up" data-aos-duration="550">Flexible, responsive and above all else secure, Osira allows funders to:</p>
                                    <ul>
                                        <li data-aos="fade-up" data-aos-duration="600">Invest, for a return, as you would in a business</li>
                                        <li data-aos="fade-up" data-aos-duration="650">Lend, at market or concessionary rates, or</li>
                                        <li data-aos="fade-up" data-aos-duration="700">Donate money, as you would to a charity</li>
                                    </ul>
                                </div>
                                <p data-aos="fade-up" data-aos-duration="720">Osira aims to enable climate projects the ability to raise the money they need to thrive,while funders can put their money to good use in line with their risk appetite and desired level of reward.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default SolutionSection;