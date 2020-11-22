import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Page2 from '../components/page2'
import './Page02.css'
const Page02 = () => {
    return ( 
        <div id="main">
           <div ><Header /></div> 
            <Page2 />
            <div id="footer"><Footer /></div>
            
        </div>
     );
}

export default Page02;