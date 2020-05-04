import React from "react"
import MyHeader from "../components/header"


const Layout = (props) => {
    return (
        <div>
            <MyHeader/>
            {props.children}
            {/* <Footer/> */}
        </div>
    )
}

export default Layout