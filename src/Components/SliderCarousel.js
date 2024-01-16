import React, { Component, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaRegLightbulb } from "react-icons/fa";
import "../Styles/slider.css"


export default class SimpleSlider extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 0,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
        };

       
      return (
        <div className="service_container" >

            <p className="my_services">
            Didi Actiivities
            </p>
          <h2>Helping you with different areas</h2>

            

          <Slider {...settings}>

          <div className="service_box">
                <div className="box_contents">
                    <div className="icon">
                    <FaRegLightbulb />
                    </div>

                    <div className="write-up">
                        <h3>Training</h3>

                        <p>
                        Etiam feugiat lorem non metus. Curabitur nisi. Vestibulum ante ipsum primis in 
                        faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia.
                        </p>
                    </div>
                </div>
            </div>



            <div className="service_box">
                <div className="box_contents">
                    <div className="icon">
                    <FaRegLightbulb />
                    </div>

                    <div className="write-up">
                        <h3>Workshops</h3>

                        <p>
                        Etiam feugiat lorem non metus. Curabitur nisi. Vestibulum ante ipsum primis in 
                        faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia.
                        </p>
                    </div>
                </div>
            </div>



            <div className="service_box">
                <div className="box_contents">
                    <div className="icon">
                    <FaRegLightbulb />
                    </div>

                    <div className="write-up">
                        <h3>Retreats</h3>

                        <p>
                        Etiam feugiat lorem non metus. Curabitur nisi. Vestibulum ante ipsum primis in 
                        faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia.
                        </p>
                    </div>
                </div>
            </div>



            <div className="service_box">
                <div className="box_contents">
                    <div className="icon">
                    <FaRegLightbulb />
                    </div>

                    <div className="write-up">
                        <h3>Coaching</h3>

                        <p>
                        Etiam feugiat lorem non metus. Curabitur nisi. Vestibulum ante ipsum primis in 
                        faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia.
                        </p>
                    </div>
                </div>
            </div>

            <div className="service_box">
                <div className="box_contents">
                    <div className="icon">
                    <FaRegLightbulb />
                    </div>

                    <div className="write-up">
                        <h3>Counselling Sessions</h3>

                        <p>
                        Etiam feugiat lorem non metus. Curabitur nisi. Vestibulum ante ipsum primis in 
                        faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia.
                        </p>
                    </div>
                </div>
            </div>
            
          </Slider>
        </div>
      );
    }
  }