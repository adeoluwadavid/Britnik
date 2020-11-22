import React from 'react'
import Header from '../components/header'
import Page1 from '../components/page1'
import Footer from '../components/footer'
import Testimonies from '../components/testimonies';
import './Page01.css'
const Page01 = () => {
    return ( 
        <div id="main">
            <Header />
            <Page1 />
          <div id="testimonies"><Testimonies /></div>  
          <div id="footer"><Footer /></div>  
        </div>
     );
}
 
export default Page01;