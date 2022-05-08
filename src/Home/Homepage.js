import React from "react"
import NavbarComponent from "./NavbarComponent"
import CarouselPortion from './CarouselSection'
import Services from '../Services/ShortServices'
import Testimonials from '../Testimonials/TestimonialsCarousal'
import Maps from '../Testimonials/Maps'
import FooterSection from "../Footer/footer"


function Homepage()
{
    return(
        <>
            <NavbarComponent/>
            <CarouselPortion/>
            <Services/>
            <Testimonials />
            <div>
                <Maps/>
            </div>
            <FooterSection/>      
        </>
    )
}

export default Homepage