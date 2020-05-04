
import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from 'gatsby'
import styles from "../styles/header.scss"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const MyHeader = () => {
  const data = useStaticQuery(graphql`
    query LogoImages {
        image: file(relativePath: {eq: "logo.jpg"}, childImageSharp: {sizes: {src: {}}}) {
          id
          childImageSharp {
            fixed(width: 150, height: 110)  {
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

    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">

        <Img fixed={data.image.childImageSharp.fixed} /></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="nav navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">About Us <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Guest Book</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Facebook</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">555-555-5555</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default MyHeader