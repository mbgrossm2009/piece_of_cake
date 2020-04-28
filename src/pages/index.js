import React from "react"
import Layout from "../components/layout"
import ContactUs from "../components/contactUs"
import CakesCarousel from "../components/cakesCarousel"
import MyJumbotron  from "../components/jumboTron"
import styles from "../styles/index.scss"

const IndexPage = () => (
<div>

    <Layout>
        <MyJumbotron/>
        <CakesCarousel />
        <ContactUs />
    </Layout>
    </div>
)

export default IndexPage
