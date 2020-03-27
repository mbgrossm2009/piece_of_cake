import React from "react"
import styles from "../styles/carousel.scss"
import { Carousel } from 'react-bootstrap'
import { Link, graphql } from "gatsby"
import { Img } from "gatsby-image"
// import slide01 from "../images/cupcakes.jpg"
// import slide02 from "../images/cupcakes2.jpg"
// import slide03 from "../images/cupcakes3.jpg"
import test from "../images/test.png"


const myCarousel = () => (


      <Carousel>
         <Carousel.Item>
              <img class=" images img-fluid col-lg-12" src={test}/>
        </Carousel.Item>
        <Carousel.Item>
              <img class=" images img-fluid col-lg-12" src={test}/>
        </Carousel.Item>
        <Carousel.Item>
              <img class=" images img-fluid col-lg-12" src={test}/>
        </Carousel.Item>
 </Carousel>  

)

export default myCarousel


export const query = graphql `
    query {
        slide01ql: file(relativePath: { eq: "slide01.jpg"}) {
            childImageSharp {
                fluid(maxWidth:1200){
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`