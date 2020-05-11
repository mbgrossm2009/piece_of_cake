import React from "react"
import { Carousel } from 'react-bootstrap'
import styles from "../styles/carousel.scss"

import four from "../images/four.jpg"
import five from "../images/five.jpg"
import six from "../images/six.jpg"
// import seven from "../images/seven.jpg"
// import eight from "../images/eight.jpg"
// import nine from "../images/nine.jpg"
// import ten from "../images/ten.jpg"

import test from "../images/square.png"


const cakesCarousel = () => (
    <div className="middle row">
      
            <h3>Feautured Items</h3>
            <div className="images col-lg-12">
            {/* <Carousel>
                <Carousel.Item>
              
                        <img className="cakeCarousel img-fluid" src={four} />
                        <img className="cakeCarousel img-fluid" src={five} />
                        <img className="cakeCarousel img-fluid" src={six} />
                        <img className="cakeCarousel img-fluid" src={five} />
                
                </Carousel.Item>
                <Carousel.Item>
                    <img className="cakeCarousel img-fluid col-xs-12 col-sm-6 col-md-4 col-lg-3" src={four} />
                    <img className="cakeCarousel img-fluid col-xs-12 col-sm-6 col-md-4 col-lg-3" src={five} />
                    <img className="cakeCarousel img-fluid ccol-xs-12 col-sm-6 col-md-4 col-lg-3" src={six} />
                    <img className="cakeCarousel img-fluid col-xs-12 col-sm-6 col-md-4 col-lg-3" src={five} />
                </Carousel.Item>
        
            </Carousel> */}
        

            {/* <h3>Cupcakes</h3>
            <Carousel>

                <Carousel.Item>
                    <img className="cakeCarousel img-fluid col-lg-3 col-md-3 col-sm-3" src={four} />
                    <img className="cakeCarousel img-fluid col-lg-3 col-md-3 col-sm-3" src={five} />                    <img className="cakeCarousel img-fluid col-lg-3 col-md-3 col-sm-3" src={six} />
                    <img className="cakeCarousel img-fluid col-lg-3 col-md-3 col-sm-3" src={six} />
                    <img className="cakeCarousel img-fluid col-lg-3 col-md-3 col-sm-3" src={six} />
                </Carousel.Item>
            </Carousel> */}
            {/* <h3>Family Favorites</h3> */}

            <Carousel>

                <Carousel.Item>
                    <img className="cakeCarousel img-fluid col-lg-3 col-md-3 col-sm-3" src={four} />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="cakeCarousel img-fluid col-lg-3 col-md-3 col-sm-3" src={five} />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="cakeCarousel img-fluid col-lg-3 col-md-3 col-sm-3" src={six} />
                </Carousel.Item>
            </Carousel> 

        </div>
        {/* <div className="col-lg-6">
            <img className="img-fluid frontPagePicture" src={test} />

        </div> */}
    </div>

)

export default cakesCarousel
