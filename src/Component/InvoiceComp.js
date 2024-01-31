import { useNavigate } from 'react-router-dom';

import React, { useState, useEffect, useRef } from 'react';

import axios from 'axios';
import './External.css';
import ReactToPrint from 'react-to-print';
import logo from '../Shared/logo.png';
// import { Link } from 'react-router-dom';


  
const InvoiceComp = () => {
  const [users, setUsers] = useState([]);
  const [filteredUser, setFilteredUser] = useState(null);
  const [invoiceNo, setInvoiceNo] = useState(0);
  const [invoiceDate, setInvoiceDate] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from the API
    axios.get('http://localhost:5253/api/invoice/getnotes')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    // Filter the user data based on the matched sid
    const matchedUser = users.find(user => user.sId == sessionStorage.getItem('sid'));
    setFilteredUser(matchedUser);
  }, [users, sessionStorage.getItem('sid')]);

  useEffect(() => {
    setInvoiceNo(prevInvoiceNo => prevInvoiceNo + 1);

    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
    setInvoiceDate(formattedDate);
  }, []);

  const componentRef = useRef();

  const handleLogout = () => {
    const confirmLogout = window.confirm('Do you want to logout?');
    if (confirmLogout) {
      // Perform logout logic (e.g., clear session, redirect to home)
      sessionStorage.removeItem('sid');
      navigate('/');
    }
  };

  return (
    
    <div className='container m-5 mx-auto' style={{ width: '210mm', height: '297mm' }}>
       <div className="card-footer text-muted text-right" style={{ marginLeft: '900px' }}>
              <button className='btn btn-danger' style={{width:'150px'}} onClick={handleLogout}>Logout</button>
              {/* <Link to="/" ><button className='btn btn-danger' style={{width:'150px'}} >Logout</button></Link> */}
            </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card mb-3">

            <div className="card-body" ref={componentRef}>
              {filteredUser ? (
                <div>
                  <div className="card-header text-right">
                    <img src={logo} alt="Institute" className="logo" style={{ width: '100px', height: '70px', marginRight: '500px', marginTop: '20px' }} />
                    <div className="row">
                      <div className='col-8'></div>
                      <h2 className='col-4'>Invoicer </h2>
                    </div>

                    <div className=" text-right row" >
                      <div className='col-6'><h4 className='me-5'>NET TECHNOLOGIES</h4></div>
                              
                     
                      <div className='col-2'></div>
                      <h3 className='col-4'>{filteredUser.studentFirstName}</h3>
                    </div>
                  </div>

                     
                  <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li style={{ marginLeft: '450px' }}><strong>Invoice No:</strong> {invoiceNo}</li>
                <li style={{ marginLeft: '450px' }}><strong>Invoice Date:</strong> {invoiceDate}</li>
              </ul>

              <ul className="right-side">
  <li style={{fontSize:'15px',fontStyle:'italic'}}>
    <strong>Institute Name:</strong> Net Technologies<br/>
    <strong>Mobile No:</strong> 9999999999<br/>
    <strong>E-Mail:</strong> net@gmail.com<br/>
    PTC Quatres,
    No: 3,<br/> 
    Rajiv Gandhi Salai,<br/>
    opposite to seman javuli store,<br/>
    Chennai, Tamil Nadu 600097
  </li>
</ul>

<ul className="left-side">
  <li><strong>Bill To:</strong> {filteredUser.studentFirstName}</li>
  <li><strong>Mobile No:</strong> 7548488568</li>
  <li><strong>E-mail:</strong> santho@gmail.com</li>
</ul>
                   
                    
                          
                    
                       
                   
               
                  <div style={{ marginTop: '20px'}}>
                  <table className="table table-bordered" style={{ border:'2px solid black', backgroundColor: 'white'}}>
                    <thead>
                    <tr>
                      <th>StudentId</th>
                      <th>CourseId</th>
                      <th>CourseName</th>
                      <th>CourseFees</th>
                      <th>Paymenttype</th>
                      <th>PaymentAmount</th>
                      
                    </tr>
                    </thead>
                    <tbody>
                      <td style={{ border: '1px solid black' }}>{filteredUser.sId}</td>
                      <td style={{ border: '1px solid black' }}>{filteredUser.courseId}</td>
                      <td style={{ border: '1px solid black' }}>{filteredUser.courseName}</td>
                      <td style={{ border: '1px solid black' }}>{filteredUser.courseFees}</td>
                      <td style={{ border: '1px solid black' }}>{filteredUser.paymenttype}</td>
                      <td style={{ border: '1px solid black' }}>₹.{filteredUser.paymentAmount}</td>
                    </tbody>
                  </table>
                  </div>
                  <div style={{marginRight:'450px'}}>
                    <label><strong>DueDate:</strong>{filteredUser.dueDate}</label><br/>
                    <label><strong>PaymentDate:</strong>{filteredUser.paymentDate}</label>
                    </div>
                    <div style={{marginLeft:'450px'}}>
                      <hr></hr>
                      <label style={{fontStyle:'italic'}}><strong>manager sign</strong></label>
                      </div>
                
                 
                    
                    
                   
                        
                    
                
                </div>
              ) : (
                <p>No matching user found.your payment is not available</p>
              )}
            </div>

            <div className="card-footer text-muted text-right">
              <ReactToPrint trigger={() => <button className="btn btn-primary" style={{width:'150px'}}>Print/Download</button>} content={() => componentRef.current} />
              
            </div>
           
          </div>
         
        </div>
      </div>
    </div>
    
  );
}

export default InvoiceComp;
