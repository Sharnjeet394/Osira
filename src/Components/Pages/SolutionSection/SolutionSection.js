import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import './SolutionSection.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';

function SolutionSection() {
    useEffect(() => {
        AOS.init({
            duration: 1500,
            easing: 'linear-ease',
        });
    }, [])
    return (
        <>
            <section className="SolutionSection">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <div className="Problem_content" data-aos="fade-right">
                                <h3>The solution</h3>
                                <p>The climate and sustainable finance markets are currently worth around $3.6trn a year,and are primed for exponential long-term growth.</p>
                                <p>Blockchain technology offers us a unique – possibly the only – opportunity to liberate these markets, to maximise the number and range of participants.</p>
                                <p>Our aim is to grow the sustainable economy, as well as support research, new technologies,as well as mitigation and adaption projects around the world.</p>

                                <div className="Solution_list">
                                    <p>Flexible, responsive and above all else secure, Osira allows funders to:</p>
                                    <ul>
                                        <li>Invest, for a return, as you would in a business</li>
                                        <li>Lend, at market or concessionary rates, or</li>
                                        <li>Donate money, as you would to a charity</li>
                                    </ul>
                                </div>

                                <p>Osira aims to enable climate projects the ability to raise the money they need to thrive,while funders can put their money to good use in line with their risk appetite and desired level of reward.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default SolutionSection;