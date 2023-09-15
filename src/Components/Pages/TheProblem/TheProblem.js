// import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import problemleft_img from "../../../Assets/Images/problemleft_img.png";
import './TheProblem.scss'

function TheProblem() {
    return (
        <>
            <section className="TheProblem">
                <Container>
                    <Row className="align-items-center gx-md-5">
                        <Col lg={6} className="mb-5 mb-lg-0">
                            <div className="Problem-img" data-aos="fade-up">
                                <img src={problemleft_img} alt="img" />
                            </div>
                        </Col>

                        <Col lg={6}>
                            <div className="Problem_content">
                                <h3 data-aos="fade-up" data-aos-duration="350">The problem</h3>
                                <p data-aos="fade-up" data-aos-duration="400">Climate change and ecological loss pose the greatest existential threats humanity has ever faced.</p>
                                <p data-aos="fade-up" data-aos-duration="450">But we have not risen to the challenge.</p>
                                <p data-aos="fade-up" data-aos-duration="500">This will change. As climate impacts escalate, so will the demand for transformative action.</p>
                                <p data-aos="fade-up" data-aos-duration="550">But, when it comes to addressing climate change, the legacy financial and institutional systems are not fit for purpose.The climate and sustainable finance markets are being constrained by a combination of inconsistent or nonexistent standards, conflicts of interest, and a system of financial intermediaries hopelessly aligned with the fossil fuel industry.Consequently, funding is not reaching the people with climate-related solutions in anything like the quantities needed.Scientists aren’t getting enough funding. Community and indigenous groups aren’t getting enough funding. New and emerging technologies aren’t getting enough funding.</p>
                                <p data-aos="fade-up" data-aos-duration="600">Free from these constraints, the climate finance market is set for exponential growth over the coming years and decades.</p>
                                <p data-aos="fade-up" data-aos-duration="650">Osira aims to open climate finance up to everyone and anyone.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default TheProblem;