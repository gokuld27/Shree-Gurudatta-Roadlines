import React from "react";
import Navbar from "../Home/NavbarComponent"
import Jumbotron from "../Jumbotron"
import Footer from "../Footer/footer"
import Body from "./quote"

const Get_Quote = () => {
    return(
        <>
            <Navbar />
            <Jumbotron heading = "Get Quote" pageName = "Quote"/>
            <Body />
            
            <Footer/>
        </>
    )
}

export default Get_Quote;