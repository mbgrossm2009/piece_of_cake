import React from "react"
import Layout from "../components/layout"
import styles from "../styles/index.scss"
import Jumbotron from "../components/jumboTron"
import MissionStatement from "../components/missionStatement"
import ContactUs from "../components/contactUs"
import CakesCarousel from "../components/cakesCarousel"




const IndexPage = (props) => (


    <Layout>
    
        <Jumbotron />
        <CakesCarousel />

        {/* <MissionStatement/> */}
        <ContactUs />
    </Layout>
)

export default IndexPage
