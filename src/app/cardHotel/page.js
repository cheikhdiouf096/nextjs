"use client"
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from '../../pages/sidebar/Sidebar';
import Hotel from '../../pages/hotel/Hotel';
import Navbar2 from '../../pages/navbar2/Navbar2';



export default function cardHotel() {
       return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col col-md col-lg-2">
                        <Sidebar/>
                    </div>
                    <div className="col-12 col-md-12 col-lg-10">
                        <Navbar2/>
                        <Hotel/>
                    </div>
                </div>
            </div>
  )
}




