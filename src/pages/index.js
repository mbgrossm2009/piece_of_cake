import React from "react"
import Layout from "../components/layout"
import styles from "../styles/index.scss"
import MainCarousel from "../components/mainCarousel"
import MissionStatement from "../components/missionStatement"
import ContactUs from "../components/contactUs"
import CakesCarousel from "../components/cakesCarousel"




const IndexPage = (props) => (


    <Layout>
        <h1 id="siteTitle">Piece of Cake</h1>
    
        <MainCarousel />
        <CakesCarousel />

        {/* <MissionStatement/> */}
        <ContactUs />
    </Layout>
)

export default IndexPage
