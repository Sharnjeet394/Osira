import React from 'react'
import Slider from "react-slick";
import { Container } from 'react-bootstrap'
import './Roadmap.scss'
import HeadingText from '../../Common/HeadingText/HeadingText';
import icon from '../../../Assets/Images/roadmap-icon1.png'
import MvpIcon from "../../../Assets/Images/MVP.svg"
import WebIcon from "../../../Assets/Images/Web3.svg"

const Roadmap = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section className='roadmap_sec'>
            <HeadingText heading="Roadmap" info="Mapping the Journey Osira roadmap to save climate through web3" />
            <Container>
                <div className='roadmap_slider'>
                    <div className='roadmap_area'>
                        <Slider {...settings}>
                            <div className='roadmap_box'>
                                <div className="roadmap_box_title">
                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text.
                                        It has roots in a piece of classical Latin literature from 45 BC,
                                        making it over 2000 years old. Richard McClintock,
                                    </p>
                                </div>
                                <div className='roadmap_box_phase'>

                                    <img src={MvpIcon} alt="icon" />
                                    <p>Phase 1 </p>
                                    <h6>
                                        ITO Launch
                                    </h6>

                                </div>
                            </div>
                            <div className='roadmap_box'>

                                <div className='roadmap_box_phase'>
                                    <img src={icon} alt="icon" />
                                    <p>Phase 1 </p>
                                    <h6>
                                        ITO Launch
                                    </h6>
                                </div>
                                <div className="roadmap_box_title">
                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text.
                                        It has roots in a piece of classical Latin literature from 45 BC,
                                        making it over 2000 years old. Richard McClintock,
                                    </p>
                                </div>
                            </div>
                            <div className='roadmap_box'>
                                <div className="roadmap_box_title">
                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text.
                                        It has roots in a piece of classical Latin literature from 45 BC,
                                        making it over 2000 years old. Richard McClintock,
                                    </p>
                                </div>
                                <div className='roadmap_box_phase yellowBorder'>
                                    <img src={WebIcon} alt="icon" />
                                    <p>Phase 1 </p>
                                    <h6>
                                        ITO Launch
                                    </h6>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Roadmap
