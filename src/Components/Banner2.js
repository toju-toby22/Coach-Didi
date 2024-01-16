import React, { Component, useEffect } from "react";
import "../Styles/Bannner.css"
import image1 from "../Assets/didi.jpeg"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TiTick } from "react-icons/ti";
import AOS from "aos"
import "aos/dist/aos.css"

const Banner2 = () => {

    useEffect(() =>{
        AOS.init({duration:2000})
}, []);
  return (
    <div>
        <Container >
                    <Row>
                        <Col sm={5}>
                            <div className="banner_text_container" data-aos="fade-up">

                                <p className="first_text banner_2text">about me</p>

                                <h1 className="main_text">
                                Been called life coach, great friend, legend.
                                </h1>

                                <h4 className="intro_text">
                                    Hey, I’m Maimuna Ummi Abdullahi, a Master Practitioner of Neuro-Linguistic Programming (NLP), 
                                    a Personal Development coach and a Mental Health First Aider (MHFA).
                                </h4>


                                <ul className='about_tick'>
                                    <li>
                                        <span className="tick_circle"> <TiTick /></span>
                                        A coach
                                    </li>


                                    <li>
                                        <span className="tick_circle"> <TiTick /></span>
                                        Counsellor
                                    </li>

                                    <li>
                                        <span className="tick_circle"> <TiTick /></span>
                                        Mentor 
                                    </li>

                                    <li>
                                        <span className="tick_circle"> <TiTick /></span>
                                        Performance consultant. 
                                    </li>
                                </ul>

                                
                                <button className='banner_buton'>
                                    See More
                                </button>
                            </div>


                        </Col>
                        <Col sm={7} className='image_box'>

                            <div className="image_container" data-aos="flip-right">
                                <img className='imagess' src={image1} alt="" />
                            </div>

                           

                        </Col>
                    </Row>
                </Container>
    </div>
  )
}

export default Banner2