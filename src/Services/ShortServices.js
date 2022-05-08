import React from "react";
import { Container, Row } from "react-bootstrap";
import CardImg from '../Assets/Images/car5.jpg'
import CardImg1 from '../Assets/Images/car3.jpg'
import CardImg2 from '../Assets/Images/car4.jpg'
import ServicesCard from "./ServicesCard";
import './ShortServices.css'



function CardUI() {
    return (
        <div className="our-project">
            <Container>
                <div className="header">
                    <h3 className="d-flex justify-content-center" style={{ paddingTop: "100px" }}>
                        SERVICES WE PROVIDE
                    </h3>
                    <div>
                        <div className="line_two"></div>
                        <div className="line_one"></div>
                    </div>
                </div>

                <div style={{ margin: "3rem" }}>
                    <Row>
                        <ServicesCard image={CardImg} title="Package Moving" />
                        <ServicesCard image={CardImg1} title="Transport Services" />
                        <ServicesCard image={CardImg2} title="Freight Forwarding" />
                    </Row>
                </div>

                <div>
                    <p className="d-flex justify-content-center service_content" style={{ textAlign: "justify" ,paddingLeft: "35px",paddingRight: "35px"}}>
                    Sree Gurudatta Roadlines is a leading provider of on-demand transportation solutions in South India. 
                    We provide complete Transportation services to cater to all your goods movement needs. 
                    We are committed to provide the best possible service at the most competitive prices.
                    </p>
                    <p className="d-flex justify-content-center service_quote" style={{ textAlign: "justify" }}>
                        Think together! Move together! Success together!
                    </p>

                </div>
            </Container>
        </div>

    )
}

export default CardUI;