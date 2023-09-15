import React from 'react'
import { Container } from 'react-bootstrap'
import './OsiraBlog.scss'
import HeadingText from '../../Common/HeadingText/HeadingText'
import OsiablogCard from './OsiablogCard'

const OsiraBlog = () => {
    return (
        <section className='osirablog_sec'>
            <Container>
                <div className='osirablog_sec_inner'>
                    <HeadingText
                        heading="Osira Blog"
                        info="In the spotlight Osira media coverage" />
                    <div className='osirablog_box'>
                        <OsiablogCard />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default OsiraBlog
