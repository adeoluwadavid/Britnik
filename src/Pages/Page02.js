import React from 'react'
import Header from '../components/header'
import Testimonies from '../components/testimonies';
import Footer from '../components/footer'
import './Page02.css'
const Page02 = () => {
    return ( 
        <div id="main">
            <Header />
            <Testimonies />
            <div id="footer"><Footer /></div>
            
        </div>
     );
}

export default Page02;