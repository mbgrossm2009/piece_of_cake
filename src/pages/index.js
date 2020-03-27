import React from "react"
import Layout from "../components/layout"
import styles from "../styles/index.scss"
import Carousel from "../components/carousel"
import MissionStatement from "../components/missionStatement"
import ContactUs from "../components/contactUs"




const IndexPage = (props) => (
 
 <div className = "container">
    <Layout>
       <h1 id = "siteTitle">Piece of Cake</h1>
    <Carousel/>
    <MissionStatement/>
    <ContactUs/>
    </Layout>
 </div>
)

export default IndexPage
