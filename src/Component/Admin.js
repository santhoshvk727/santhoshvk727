import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Component/Admin.css';

const AdminLogin = () => {
  const [adminId, setAdminId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Validate admin credentials (you may want to compare with actual admin data from a database)
    if (adminId === 'admin123' && email === 'admin@example.com' && password === 'adminpassword') {
      // Successful login, you can redirect to the admin dashboard or perform other actions
      alert('Login successful!');
      // Redirect to admin dashboard or update state to show admin content
    } else {
      // Display an error message or perform other actions for failed login
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body p-5">
          <h2 className="card-title text-center mb-4">Admin Login</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="adminId" className="form-label">Admin ID:</label>
              <input type="text" className="form-control" id="adminId" value={adminId} onChange={(e) => setAdminId(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="form-label">Password:</label>
              <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="button" className="btn btn-primary btn-block" onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
