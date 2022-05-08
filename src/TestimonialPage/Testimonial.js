import FooterSection from "../Footer/footer";
import NavbarComponent from "../Home/NavbarComponent";
import Jumbotron from "../Jumbotron";
import SectionHP9 from "../Testimonials/TestimonialsCarousal";

const Testimonial = () => {
    return (
        <>
            <NavbarComponent />
            <Jumbotron heading = "Testimonials" pageName = "Testimonials"/>
            <SectionHP9 />
            <FooterSection />
        </>
    );
}

export default Testimonial;