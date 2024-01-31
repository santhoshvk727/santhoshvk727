import React from 'react';
import { FaUserCheck } from 'react-icons/fa';
import { Link ,Outlet} from 'react-router-dom';

const RoutingModuleComp = () => {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark" style={{ padding: '0', margin: '0' }}>
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
           
            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">

            <li className="nav-item" style={{marginTop:'10px'}}>
                <Link to="/faculty" className="nav-link" activeClassName="active" style={{color:'white',fontFamily:'sans-serif'}}>
                <FaUserCheck style={{ margin: '0px 5px 4px 0px' }} />Attendance
                </Link>
              </li>

              <li className="nav-item" style={{marginTop:'8px'}}>
                <Link to="/view" className="nav-link" activeClassName="active" style={{color:'white',fontFamily:'sans-serif'}}>
                <FaUserCheck style={{ margin: '0px 5px 4px 0px' }} />View Attendance
                </Link>
              </li>

              <li className="nav-item" style={{marginTop:'8px'}}>
                <Link to="/view" className="nav-link" activeClassName="active" style={{color:'white',fontFamily:'sans-serif'}}>
                <FaUserCheck style={{ margin: '0px 5px 4px 0px' }} />User Management
                </Link>
              </li>


              <li className="nav-item" style={{marginTop:'8px'}}>
                <Link to="/view" className="nav-link" activeClassName="active" style={{color:'white',fontFamily:'sans-serif'}}>
                <FaUserCheck style={{ margin: '0px 5px 4px 0px'}} />Faculty Management
                </Link>
              </li>

              <li className="nav-item" style={{marginTop:'8px'}}>
                <Link to="/view" className="nav-link" activeClassName="active" style={{color:'white',fontFamily:'sans-serif'}}>
                <FaUserCheck style={{ margin: '0px 5px 4px 0px' }} />Course Management
                </Link>
              </li>

              <li className="nav-item" style={{marginTop:'8px'}}>
                <Link to="/view" className="nav-link" activeClassName="active" style={{color:'white',fontFamily:'sans-serif'}}>
                <FaUserCheck style={{ margin: '0px 5px 4px 0px' }} />Fees Management
                </Link>
              </li>

              <li className="nav-item" style={{marginTop:'8px'}}>
                <Link to="/view" className="nav-link" activeClassName="active" style={{color:'white',fontFamily:'sans-serif'}}>
                <FaUserCheck style={{ margin: '0px 5px 4px 0px' }} />Library Management
                </Link>
              </li>

              <li className="nav-item" style={{marginTop:'8px'}}>
                <Link to="/view" className="nav-link" activeClassName="active" style={{color:'white',fontFamily:'sans-serif'}}>
                <FaUserCheck style={{ margin: '0px 5px 4px 0px' }} />Feedback
                </Link>
              </li>

              <li className="nav-item" style={{marginTop:'8px'}}>
                <Link to="/view" className="nav-link" activeClassName="active" style={{color:'white',fontFamily:'sans-serif'}}>
                <FaUserCheck style={{ margin: '0px 5px 4px 0px' }} />Grade Management
                </Link>
              </li>

              <li className="nav-item" style={{marginTop:'8px'}}>
                <Link to="/view" className="nav-link" activeClassName="active" style={{color:'white',fontFamily:'sans-serif'}}>
                <FaUserCheck style={{ margin: '0px 5px 4px 0px' }} />FAQ Management
                </Link>
              </li>

              <li className="nav-item" style={{marginTop:'8px'}}>
                <Link to="/view" className="nav-link" activeClassName="active" style={{color:'white',fontFamily:'sans-serif'}}>
                <FaUserCheck style={{ margin: '0px 5px 4px 0px' }} />Institute Management
                </Link>
              </li>


              <li className="nav-item" style={{marginTop:'8px'}}>
                <Link to="/view" className="nav-link" activeClassName="active" style={{color:'white',fontFamily:'sans-serif'}}>
                <FaUserCheck style={{ margin: '0px 5px 4px 0px' }} />Grade Management
                </Link>
              </li>
              
              <li className="nav-item">
                <Link to="/student" className="nav-link" activeClassName="active" style={{color:'white',fontFamily:'sans-serif'}}>
                <FaUserCheck style={{ margin: '0px 5px 4px 0px' }} />Invoice Management
                </Link>
              </li>
             
            </ul>
          </div>
        </div>
        <div className="col py-3">
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default RoutingModuleComp;
