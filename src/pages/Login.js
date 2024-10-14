// // src/pages/Login.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../firebase/firebase';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       navigate('/dashboard');
//     } catch (error) {
//       console.error("Login failed: ", error);
//     }
//   };

//   return (
//     <div className="form-container">
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { auth } from '../firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
//import './Login.css'; // Add a separate CSS file for styling

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(''); // State to hold error message
  const navigate = useNavigate(); // Hook for redirection

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(''); // Reset error message on new submission

    try {
      // Sign in user with email and password
      await signInWithEmailAndPassword(auth, email, password);
      setLoading(false); // Disable the loader once login is complete

      // Redirect to the dashboard after successful login
      navigate('/dashboard'); // Redirecting to the dashboard route
    } catch (error) {
      console.error("Error during login:", error.message);
      setLoading(false); // Stop the loader in case of error

      // Set the error message
      setError(error.message); 
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="email">Email:</label>
        <input 
          type="email" 
          id="email" 
          placeholder="Enter your email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required
        />

        <label htmlFor="password">Password:</label>
        <input 
          type="password" 
          id="password" 
          placeholder="Enter your password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required
        />

        <button type="submit" disabled={loading} className="submit-btn">
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* Show error message if exists */}
        {error && <p className="error-message">{error}</p>}

        <p className="signup-link">
          Don't have an account? <a href="/signup">Sign up here</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
