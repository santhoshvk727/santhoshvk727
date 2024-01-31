import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavComp from "./NavComp";
import 'bootstrap/dist/css/bootstrap.min.css';
import RoutingModuleComp from "./RoutingModuleComp";

import FooterComp from "./FooterComp";
import './External.css'
import BodyComp from "./BodyComp";
import StudentLoginComp from "./StudentLoginComp";
import InvoiceComp from "./InvoiceComp";


class MainComp extends React.Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <div className="card border" style={{minWidth:'100%'}}>
            <div className="card-header" style={{padding:'0px',margin:'0px',width:'100%'}}>
              <NavComp />
            </div>

            <div className="card-body" style={{padding:'0px',margin:'0px'}}>
              {/* Adjusted the height to account for the Navbar's height */}
              <Routes>
                <Route path="/" element={<RoutingModuleComp/>} >
                <Route path="/student" element={<StudentLoginComp />} />
                <Route path="/invoice" element={<InvoiceComp />} />
                
                  
                </Route>
                <Route path='/home' element={<BodyComp/>}></Route>          
                </Routes>
            </div>
            <div className="card-footer" style={{padding:'0px',margin:'0px'}}>
              <FooterComp />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default MainComp;
