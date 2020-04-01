import React from "react"
import styles from "../styles/jumbotron.scss"
import { Jumbotron, Button } from 'react-bootstrap'
import { Link, graphql } from "gatsby"
import jPicture from "../images/jumbotron.jpg"

import test from "../images/test.png"


const jumboTron = () => (
  <div class="box">
    <Jumbotron style={{ backgroundImage: `url(${jPicture})`, backgroundSize: 'cover' }}> <h1>Piece of Cake</h1>

    </Jumbotron>
  </div>

)

export default jumboTron

