import React from "react";
import {Card, Col} from 'react-bootstrap'
import './ServicesCard.css'

const ServicesCard = (props) =>
{
    return(
        <Col sm = {12} md = {6} lg = {4} className="card_shadow">
            <Card className = "card_item" style = {{backgroundColor: "#F6F5FB"}}>
                <div className="overflow">
                    <Card.Img style = {{height: "300px"}} className = "card_img" variant="top" src = {props.image} />
                </div>                
                <Card.Body className = "card_body">
                    <Card.Title className = "card_title" style={{textAlign: "center"}}>{props.title}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ServicesCard;