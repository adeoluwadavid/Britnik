import React from 'react'
import '../css/page1.css'
import {Image} from 'react-bootstrap'
function Page1(){
    const display = ()=>{
        document.getElementById('repair_tools_item').style.display = 'block'
    }
    const display2 = ()=>{
        document.getElementById('repair_tools_item2').style.display = 'block'
    }
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
                        <div id="repair_tools" onClick={display}>
                            <h5>SUSTAINABLE REPAIR</h5>
                            <p id="repair_tools_item">
                                We listen when our clients talk.
                                Our goal is to always put the client first.
                            </p>
                        </div>
                        <div id="repair_tools" onClick={display2}>
                            <h5>USAGE OF MODERN TOOLS</h5>
                            <p id="repair_tools_item2">
                                We listen when our clients talk.
                                Our goal is to always put the client first.
                            </p>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
            <div id="safety_et_al">
                SAFETY. QUALITY. TIMELY DELIVERY
            </div>
        </div>
    )
}

export default Page1