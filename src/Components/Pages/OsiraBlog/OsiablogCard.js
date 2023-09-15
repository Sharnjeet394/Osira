import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import blog_img from '../../../Assets/Images/card-img1.jpg'
import blog_img3 from '../../../Assets/Images/card-img2.png'
import blog_img2 from '../../../Assets/Images/card-img3.png'
import './OsiraBlog.scss'



const OsiablogCard = () => {
    const blog = [
        {
            to: "https://osira.network/climate-investments/sustainability-goals-2/",
            blog_img: blog_img,
            title: "A climate for economic renewal",
            info: "Crypto can give the climate finance market the boost it desperately needs – So, who would’ve believed it? The beleaguered, seemingly lame-duck president Joe Biden and his Democrat colleagues managed to steer legislation through Congress that mandates the largest... ",
            time: "28 June, 2023",
        },
        {
            to: "https://osira.network/climate-investments/sustainability-goals/",
            blog_img: blog_img2,
            title: "Investing in sustainable climate solutions",
            info: "We cannot reach any of our climate goals without indigenous peoples – David Kaimowitz is senior forestry officer of the UN Food & Agriculture Organisation. Like many in the sustainability field, he says we must invest in indigenous peoples if...",
            time: "28 June, 2023",
        },
        {
            to: "https://osira.network/indigenous/news-fire/",
            blog_img: blog_img3,
            title: "Act as if your house is on fire. Because it is!",
            info: "The window for preventative action is closing – Not a day goes by without us being bombarded with reports of extreme weather events. The world is beset with hurricanes, floods, drought and heatwaves. We are confronted by images of melting...",
            time: "28 June, 2023",
        },
    ]
    return (
        <>
            <Row>
                {blog.map((item, index) => {
                    return (
                        <Col md={6} lg={4} xl={4} className='d-flex'>
                            <Link data-aos="fade-up" data-aos-delay={index * 100} target="_blank" rel="noreferrer" to={item.to} className='d-flex w-100'>
                                <div className='blog_card w-100'>
                                    <div className='blog_img'>
                                        <img src={item.blog_img} alt="blog-img" />
                                    </div>
                                    <div className='blog_content'>
                                        <h5>{item.title}</h5>
                                        <p>{item.info}<Link target="_blank" rel="noreferrer" to={item.to}>Read More</Link></p>
                                        <h6>{item.time}</h6>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                    )
                })}
            </Row>

        </>

    )
}

export default OsiablogCard
