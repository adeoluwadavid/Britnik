import React from 'react'
import {Image} from 'react-bootstrap'
import '../css/page2.css'
const Page2 = () => {
    return ( 
        <div id="page2">
            <h5 id="who_we_are">WHO WE ARE</h5>
            <div id="my_flex">
                <Image src={require("../images/who_we_are.jpg")} id="image"/>  
                <div>
                    Lorem Ipsum is simply dummy text  <br></br>
                    of the printing and typesetting industry. <br></br>
                    Lorem Ipsum has been the industry's standard <br></br>
                    dummy text ever since the 1500s, when an <br></br>
                    unknown printer took a galley of type and  <br></br>
                    scrambled it to make a type specimen book. <br></br>
                    It has survived not only five centuries, <br></br>
                    but also the leap into electronic typesetting, <br></br>
                    remaining essentially unchanged.
                </div>    
            </div>
            <div id="my_flex2">
                <div>
                    <h5 id="m_h">MISSION STATEMENT</h5>
                    <div id="flex_item">
                        <Image src={require("../images/mission.png")} id="image2"/>
                        <div>
                            Lorem Ipsum is simply dummy text <br></br>
                            of the printing and typesetting industry. <br></br>
                            Lorem Ipsum has been the industry's standard <br></br>
                            dummy text ever since the 1500s, when an <br></br>
                            unknown printer took a galley of type and <br></br>
                            scrambled it to make a type specimen book. 
                        </div>
                    </div>  
                </div>
                <div>
                <h5 id="m_h">HISTORY</h5>
                    <div id="flex_item">
                        <Image src={require("../images/history.png")} id="image2"/>
                        <div>
                            Lorem Ipsum is simply dummy text <br></br>
                            of the printing and typesetting industry. <br></br>
                            Lorem Ipsum has been the industry's standard <br></br>
                            dummy text ever since the 1500s, when an <br></br>
                            unknown printer took a galley of type and <br></br>
                            scrambled it to make a type specimen book. 
                        </div>
                    </div> 
                </div>
            </div>
            <div id="our_team_main">
                <h5 id="our_team">OUR TEAM</h5>
                <div id="our_team_flex">
                    <div id="image_container">
                        <Image src={require("../images/ceo.jpg")} id="exec"/>
                        <h5 id="image_container_text">Engr Seun Fatoki <br></br> Founder & CEO </h5>
                    </div>
                    <div id="image_container">
                        <Image src={require("../images/ceo2.jpg")} id="exec"/>
                        <h5 id="image_container_text">Engr Sola Adeyemi <br></br> Senior Engineer </h5>
                    </div>
                    <div id="image_container">
                        <Image src={require("../images/ceo3.jpg")} id="exec"/>
                        <h5 id="image_container_text">Gideon Gbadamosi <br></br> Human Resources </h5>
                    </div>
                </div>
                
            </div>
        </div>
     );
}
 
export default Page2;