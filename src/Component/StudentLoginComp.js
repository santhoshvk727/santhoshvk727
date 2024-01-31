import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './StudentLogin.css'; // Import the CSS file
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap

const StudentLoginComp = () => {
  const [studentId, setStudentId] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [error, setError] = useState('');

  // Access the navigate function
  const navigate = useNavigate();

  const handleLogin = () => {
    if (studentId && studentEmail) {
      alert(`Student ID: ${studentId}\nStudent Email: ${studentEmail}\nLogin successful!`);

      // Save data to sessionStorage
      sessionStorage.setItem('sid', studentId);
      sessionStorage.setItem('smail', studentEmail);

      // Navigate to the /invoice route
      navigate('/invoice');
    } else {
      setError('Please enter both Student ID and Student Email.');
    }
  };

  return (
    <div className="login-container">
      <h2 className="mb-4"> Login</h2>
      {error && <p className="error-message">{error}</p>}
      <form>
        <div className="form-group">
          <label htmlFor="studentId" className="mb-2"><strong>Student ID:</strong></label>
          <input
            type="text"
            id="studentId"
            className="form-control"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="studentEmail" className="mb-2"><strong>Student Email:</strong></label>
          <input
            type="email"
            id="studentEmail"
            className="form-control"
            value={studentEmail}
            onChange={(e) => setStudentEmail(e.target.value)}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default StudentLoginComp;
