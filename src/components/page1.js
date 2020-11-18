import React from 'react'
import '../css/page1.css'
import repair from '../images/car-repair.svg'
import servicing from '../images/car-wash-car.svg'
import overhaul from '../images/car-overhaul.svg'

import {Image,Card, CardDeck,Collapse, Carousel} from 'react-bootstrap'
function Page1(){
    const [open, setOpen] = React.useState(false);
    const [close,setClose] = React.useState(false)
    return(
        <div>
            <div id="engr_container">
                <Image src={require("../images/background1.jpg")} id="engr" />
                <h1 id="engr_text">AUTOMOBILE REPAIR AND SERVICES. <br></br>IBADAN, NIGERIA.</h1>
            </div>
            <div>
                <h4 id="who_we_are">WHO WE ARE</h4>
                <div id="flex">
                    <div id="flex_item_1">
                        <h5>WHY BRITNIK?</h5>
                        <p>
                            Lorem Ipsum is simply dummy text 
                            of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard
                            dummy text ever since the 1500s, when an 
                            unknown printer took a galley of type and 
                            scrambled it to make a type specimen book. 
                            It has survived not only five centuries,
                            but also the leap into electronic typesetting, 
                            remaining essentially unchanged.
                        </p>
                    </div>
                    <div id="flex_item_2">
                        <div id="client_first">
                            <h5>CLIENT FIRST</h5>
                            <p>
                                We listen when our clients talk.
                                Our goal is to always put the client first.
                            </p>
                        </div>
                        <div id="repair_tools" onClick={()=>setOpen(!open)}>
                            <h5>SUSTAINABLE REPAIR</h5>
                            <Collapse in={open}>
                                <div id="example-collapse-text">
                                We listen when our clients talk.
                                Our goal is to always put the client first.
                                </div>
                            </Collapse>
                        </div>
                        <div id="repair_tools" onClick={()=> setClose(!close)}>
                            <h5>USAGE OF MODERN TOOLS</h5>
                            <Collapse in={close}>
                                <div id="example-collapse-text">
                                We listen when our clients talk.
                                Our goal is to always put the client first.
                                </div>
                            </Collapse>
                        </div>
                    </div>
                </div>
            </div>
            <div id="safety_et_al">
                SAFETY. QUALITY. TIMELY DELIVERY
            </div>
            <div>
                <h5 id="what_we_do">WHAT WE DO</h5>
                <CardDeck id="flex">
                    <Card>
                        <Card.Img variant="top" src={repair} id="svg" />
                        <Card.Body>
                        <Card.Title id="what_we_do">REPAIRS</Card.Title>
                        <Card.Text>
                            Lorem Ipsum is simply dummy text 
                            of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={servicing} id="svg"/>
                        <Card.Body>
                        <Card.Title id="what_we_do">SERVICING</Card.Title>
                        <Card.Text>
                            Lorem Ipsum is simply dummy text 
                            of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={overhaul} id="svg"/>
                        <Card.Body>
                        <Card.Title id="what_we_do">VEHICLE OVERHAUL</Card.Title>
                        <Card.Text>
                            Lorem Ipsum is simply dummy text 
                            of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </div>
            <div>
                <h5 id="from_our_clients">FROM OUR CLIENTS</h5>
                <Carousel id="from_our_clients_carousel">
                    <Carousel.Item>
                        <h5>We enjoy Britnik Engineering Service</h5>
                        <p>Seun Ogegbe</p>
                        <Carousel.Caption>
                        <h5>Engr Seun's service is the best</h5>
                         <p>Segun Agbaje</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                     
                    <Carousel.Item>
                         <h5>Engr Seun's service is the best</h5>
                         <p>Segun Agbaje</p>
                         <Carousel.Caption>
                         <h5>Engr Seun's service is the best</h5>
                         <p>Segun Agbaje</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default Page1