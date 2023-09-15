import { useEffect } from 'react';
import './DoubleQuote.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';

function DoubleQuote() {
    useEffect(() => {
        AOS.init({
            duration: 1500,
            easing: 'linear-ease',
        });
    }, [])
    return (
        <>
            <div className="Double_quote" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <h5><i>Finance is still largely misaligned with climate change goals. The steps forward so far – including those at COP27 – are provisional and do not yet amount to an irreversible shift towards a sustainable financial system.</i></h5>
                <h6>Nick Robins</h6>
                <p>Professor in Practice for Sustainable Finance</p>
                <p>Grantham Research Institute</p>
            </div>
            <div className='web3_sec' data-aos="fade-down">
                <h2>Our web3 solution</h2>
                <p>Part financial marketplace, part monetary system and part social media network, the Osira platform will enable people
                    and organisations to connect and participate in the global sustainable finance market. With its own cryptographic utility token,
                    Osira will be built on blockchain technology and decentralised finance (DeFi) smart contracts designed to facilitate the symbiotic
                    exchange of expertise, data and finance.
                </p>
                <br/>
                <p>Osira aims to empower a community that supports climate enterprises, research projects and technologies.
                    Users will be able to search and fund proposals, apply for funding themselves, or provide expertise to help shape the Osira Protocol,
                    the platform’s project-rating framework. Tokenholders will also be able to stand for election to one of the platform’s governance committees,
                    whose role it is to maintain high standards and the platform’s optimal functioning.
                </p>
            </div>
        </>
    );
}

export default DoubleQuote;