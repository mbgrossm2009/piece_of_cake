import React from "react"
import styles from "../styles/carousel.scss"
import { Carousel } from 'react-bootstrap'
import { Link, graphql } from "gatsby"
import { Img } from "gatsby-image"

import four from "../images/four.jpg"
import five from "../images/five.jpg"
import six from "../images/six.jpg"
// import seven from "../images/seven.jpg"
// import eight from "../images/eight.jpg"
// import nine from "../images/nine.jpg"
// import ten from "../images/ten.jpg"

import test from "../images/test.png"


const cakesCarousel = () => (
    <div className>
        <h3>Cakes</h3>

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

        <h3>Cupcakes</h3>
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
        <h3>Family Favorites</h3>

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

)

export default cakesCarousel
