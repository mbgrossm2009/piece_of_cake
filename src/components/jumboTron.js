import React from "react"
import styles from "../styles/jumbotron.scss"
import { Jumbotron, Button } from 'react-bootstrap'
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"

const MyJumbotron = () => {
    const data = useStaticQuery(graphql`
    query Images {
        image: file(relativePath: {eq: "background.jpg"}, childImageSharp: {sizes: {src: {}}}) {
          id
          childImageSharp {
            fixed {
             ...GatsbyImageSharpFixed
             
            }
            fluid {
             ...GatsbyImageSharpFluid
            }
          }
        }
      }
      
    
    `)

     return (
         <div className= "container-fluid"> 
         <h1 className="text">Isn't that a Piece of Cake
          <h4>From cupcakes to cookies to cakes to anything you want</h4> </h1>
         <Img fluid={data.image.childImageSharp.fluid}  />
         </div>
         )


}

export default MyJumbotron