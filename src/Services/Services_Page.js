import React from "react";
import Navbar from "../Home/NavbarComponent"
import Jumbotron from "../Jumbotron"
import Footer from "../Footer/footer"
import Body from "./Body_services"

const Services_page = () => {
    return(
        <>
            <Navbar />
            <Jumbotron heading = "Services" pageName = "Services"/>
            <Body />
            <Footer/>
        </>
    )
}

export default Services_page;