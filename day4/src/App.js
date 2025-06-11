import './App.css';
import { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      setMessage('Email is valid');
    } else {
      setMessage('Email is invalid');
    }
  };

  return (
    <div className="app-container">
      <h1>Email Validation</h1>
      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Enter Email:
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          className="form-input"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button className="submit-btn" onClick={validateEmail}>
        Validate Email
      </button>
      <div className={`message ${message === 'Email is valid' ? 'valid' : 'invalid'}`}>
        {message}
      </div>
    </div>
  );
}

export default App;
