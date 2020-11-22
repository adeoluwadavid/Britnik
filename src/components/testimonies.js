import React from 'react'
import {css} from '@emotion/css'
const Testimonies = () => {
    const quotes ={ 
        0:{
            client:"Segun Owolabi",
            quote:"I recommend Britnik for anybody that wants a quality car servicing"
        },
        1:{
            client:"Charles, Okocha",
            quote:"Britnik's customer service is the best. Very timely delivery"
        },
        2:{
            client:"Amanda Johnson",
            quote:"My car's performance has greatly increased due to Britnik"
        },
        3:{
            client:"Peju Awokunle",
            quote:" They amazed me with their quality repair"
        },
    }

    const [current, setCurrent] = React.useState(quotes[0])
    const [active, setActive] = React.useState(0)
    const handleSetClick =(event)=>{
        setCurrent(quotes[event.target.getAttribute('data-quote')])
        setActive(event.target.getAttribute('data-quote'))
    }
    return (  
        <div className={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            margin : 40px auto;
            max-width: 700px

            p {
                text-align: center;
                margin-bottom: 20px;
            }
        `}>
            <h5>FROM OUR CLIENTS</h5>
            <p>{current.quote}</p>
            <p>{current.client}</p>
            <div className={css`
                display: flex;

                span{
                    height: 20px;
                    widht: 20px;
                    margin: 0 3px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor:pointer;
                }

                span:before{
                    content: "";
                    height: 6px;
                    width: 6px;
                    background-color: #d4d4d4;
                    border-radius: 50%;
                    transition : background-color 0.3s ease
                }
                span:hover::before{
                    background-color : #f99233
                }
                span[data-quote="${active}"]::before{
                    background-color : #f99233
                }
            `}>
                {Object.keys(quotes).map(index => (
                    <span onClick={event => handleSetClick(event)}
                    data-quote={index}
                    key={index}
                    />
                ))}
            </div>
        </div>
    );
}
 
export default Testimonies;