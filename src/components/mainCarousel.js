import React from "react"
import styles from "../styles/carousel.scss"
import { Carousel } from 'react-bootstrap'
import { Link, graphql } from "gatsby"
import { Img } from "gatsby-image"
import one from "../images/one.jpg"
import two from "../images/two.jpg"
import three from "../images/three.jpg"
// import four from "../images/four.jpg"
// import five from "../images/five.jpg"
// import six from "../images/six.jpg"
// import seven from "../images/seven.jpg"
// import eight from "../images/eight.jpg"
// import nine from "../images/nine.jpg"
// import ten from "../images/ten.jpg"

import test from "../images/test.png"


const mainCarousel = () => (


    <Carousel>
        <Carousel.Item>
            <img class=" images img-fluid col-lg-12" src={one} />
        </Carousel.Item>
        <Carousel.Item>
            <img class=" images img-fluid col-lg-12" src={two} />
        </Carousel.Item>
        <Carousel.Item>
            <img class=" images img-fluid col-lg-12" src={three} />
        </Carousel.Item>
    </Carousel>

)

export default mainCarousel

