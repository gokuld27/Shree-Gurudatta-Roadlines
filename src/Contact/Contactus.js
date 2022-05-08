import React from "react";
import Navbar from "../Home/NavbarComponent"
import Jumbotron from "../Jumbotron"
import Footer from "../Footer/footer"
import Body from "./Form"

const Contactus = () => {
    return(
        <>
            <Navbar />
            <Jumbotron heading = "Contact" pageName = "Contact"/>
            <Body />
            <Footer/>
        </>
    )
}

export default Contactus;

