import React, { useState } from 'react';
import { MdOutlineMail } from 'react-icons/md';  
import { FaBlenderPhone } from 'react-icons/fa';  
import './CustomerDetail.css';

const CustomerDetail = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="customer-detail-container">
      <h1> BANK </h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name: </label>
          <input type="text" placeholder="Enter name" required />
        </div>
        
        <div className="form-group">
          <label>Email: </label>
          <div className="input-with-icon">
            <MdOutlineMail className="icon" />
            <input type="email" placeholder="Enter email" required />
          </div>
        </div>
        
        <div className="form-group">
          <label>Mobile: </label>
          <div className="input-with-icon">
            <FaBlenderPhone className="icon" />
            <input type="text" placeholder="Enter mobile" required />
          </div>
        </div>
        
        <div className="form-group">
          <label>Address: </label>
          <input type="text" placeholder="Enter address" required />
        </div>

        <div className="form-group">
          <label>Account Type: </label>
          <select required>
            <option value="current">Current</option>
            <option value="saving">Saving</option>
          </select>
        </div>

        <button type="submit">Submit</button>

        {submitted && (
          <div className="success-message">
            <span>&#10003;</span> Form submitted successfully!
          </div>
        )}
      </form>
    </div>
  );
};

export default CustomerDetail;
