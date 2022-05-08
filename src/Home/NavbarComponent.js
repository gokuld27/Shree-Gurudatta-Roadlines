import React from "react";
import { Navbar, Container, Nav} from "react-bootstrap";
import "./NavbarComponent.css";
import Logo from "../Assets/Images/logo.png";


function NavbarComponent()
{
    return(
        
        <Navbar bg = "light" expand = "lg">
            <Container>
                <Navbar.Brand>
                    <img src = {Logo} height = "50" className="d-inline-block align-top" alt="Logo"/>
                </Navbar.Brand>
                
                <Navbar.Toggle aria-controls = "navbarScroll"/>
                <Navbar.Collapse id = "navbarScroll" className="d-lg-flex flex-lg-row w-lg-100 justify-content-lg-around elements">                
                    <Nav.Link href="/" style={{ color: "black" , fontWeight: 600 }}><span className = "element">HOME</span></Nav.Link>
                    <Nav.Link href="/services" style={{ color: "black" , fontWeight: 600 }}><span className = "element">SERVICES</span></Nav.Link>
                    <Nav.Link href="/testimonials" style={{ color: "black" , fontWeight: 600 }}><span className = "element">TESTIMONIALS</span></Nav.Link>
                    <Nav.Link href="/contact" style={{ color: "black" , fontWeight: 600 }}><span className = "element">CONTACT</span></Nav.Link>
                    <Nav.Link href="/quote" style={{ color: "black" , fontWeight: 600 }}><span className = "element1">GET QUOTE</span></Nav.Link>
                </Navbar.Collapse>
                </Container>
        </Navbar>
        
    )

}
export default NavbarComponent