import React from "react";

import Navbar from "react-bootstrap/Navbar";

var phantom = {
    display: 'block',
    padding: '20px',
    height: '60px',
    width: '100%',
}

var footerBottom = {
    position: 'fixed',
    bottom: '0',
    left: '0',
    width: '100%'
}
export function Footer() {
    return (
        <div>
            {/* <div style={phantom}></div> */}
            
                <Navbar bg='light' variant='light'>
                    <Navbar.Text>
                        &copy;2020 Covid-19 Analysis - All Rights Reserved.
                    </Navbar.Text>
                </Navbar>
        </div>
    );
}


// <div className='main-footer'>
        // <div className='container'>
        //     <div className='footer-bottom'>
        //         <p className='text-xs-center'>
        //              &copy;{new Date().getFullYear()} Covid-19 Analysis - All Rights Reserved
        //         </p>
        //     </div>
        // </div>
        // </div>