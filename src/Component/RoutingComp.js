import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import StudentLoginComp from './StudentLoginComp';
import InvoiceComp from './InvoiceComp';


 class RoutingComp extends React.Component {
    render() {
        return (
            <div>
             <BrowserRouter>
             <Routes>
                <Route path="/" element={<StudentLoginComp/>}></Route>
                <Route path="/invoice" element={<InvoiceComp/>}></Route>
                

                
             </Routes>
             </BrowserRouter>
            </div>
        )
    }
}

export default RoutingComp;
