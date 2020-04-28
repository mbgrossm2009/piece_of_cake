import React from "react"
import Header from "../components/header"

const Layout = (props) => {
    return (
        <div>
            <Header/>
            {props.children}
            {/* <Footer/> */}
        </div>
    )
}

export default Layout