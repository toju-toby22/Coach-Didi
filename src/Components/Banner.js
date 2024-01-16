import React, { Component, useEffect } from "react";
import "../Styles/Bannner.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image1 from "../Assets/logo.jpeg"
import AOS from "aos"
import "aos/dist/aos.css"

const Banner = () => {

    useEffect(() =>{
        AOS.init({duration:2000})
}, []);

    return (
        <div className="banner banner_2">
            <div className='banner_container' >
                <Container data-aos="zoom-in">
                    <Row>
                        <Col sm={5}>
                            <div className="banner_text_container">

                                <p className="first_text">lets work together</p>

                                <h1 className="main_text">
                                    Achieving goals step by step
                                </h1>

                                <h4 className="intro_text">
                                   Happiness is an inside job. It is not something you
                                   find,it is something you create. The key to your happness and good mental health is YOU!
                                </h4>

                                
                            <button className='banner_buton'>
                                    My Programees
                                </button>

                            </div>


                        </Col>
                        <Col sm={7} className='image_box'>

                            <div className="image_container">
                                <img className='imagess' src={image1} alt="" />
                            </div>


                        </Col>
                    </Row>
                </Container>

               
            </div>

             <div className='quote' data-aos="fade-up">
                    <h3>
                    Sometimes big, life-changing moments happen when you least expect it. 
                    Sometimes it takes just one conversation to start looking at things with a new perspective. 
                    In the future, looking back at things you coming to my website might be that moment.
                    </h3>
                </div>
        </div>
    )
}

export default Banner