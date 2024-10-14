// Signup.js

// import React, { useState } from "react";
// import { auth } from "../firebase/firebase"; // Importing auth for authentication
// import { createUserWithEmailAndPassword } from "firebase/auth"; // Firebase auth method
// import moduleName from 'module'

// const Signup = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       // Create new user with email and password
//       await createUserWithEmailAndPassword(auth, email, password);
//       console.log("User signed up successfully");
//       // Redirect user or do something else after sign up
//     } catch (error) {
//       console.error("Error signing up: ", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Signup</h2>
//       <form onSubmit={handleSignup}>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default Signup;


// import React, { useState } from 'react';
// import { auth } from '../firebase/firebase';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom';
// import './Signup.css'; // Add a separate CSS file for styling

// const Signup = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
    
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       navigate('/dashboard'); // Navigate to the dashboard after successful sign-up
//     } catch (error) {
//       console.error("Error during sign up:", error.message);
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="signup-container">
//       <h2>Sign Up</h2>
//       <form onSubmit={handleSubmit} className="signup-form">
//         <label htmlFor="email">Email:</label>
//         <input 
//           type="email" 
//           id="email" 
//           placeholder="Enter your email" 
//           value={email} 
//           onChange={(e) => setEmail(e.target.value)} 
//           required
//         />

//         <label htmlFor="password">Password:</label>
//         <input 
//           type="password" 
//           id="password" 
//           placeholder="Enter your password" 
//           value={password} 
//           onChange={(e) => setPassword(e.target.value)} 
//           required
//         />

//         <button type="submit" disabled={loading} className="submit-btn">
//           {loading ? "Signing up..." : "Sign Up"}
//         </button>

//         <p className="login-link">
//           Already have an account? <a href="/login">Login here</a>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Signup;



// import React, { useState } from 'react';
// import { auth } from '../firebase/firebase';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom';
// import './Signup.css'; // Add a separate CSS file for styling

// const Signup = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate(); // Hook for redirection

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
    
//     try {
//       // Create user with email and password
//       await createUserWithEmailAndPassword(auth, email, password);
//       setLoading(false); // Disable the loader once signup is complete

//       // Redirect to the dashboard after successful signup
//       navigate('/dashboard'); // Redirecting to the dashboard route
//     } catch (error) {
//       console.error("Error during sign up:", error.message);
//       setLoading(false); // Stop the loader in case of error
//     }
//   };

//   return (
//     <div className="signup-container">
//       <h2>Sign Up</h2>
//       <form onSubmit={handleSubmit} className="signup-form">
//         <label htmlFor="email">Email:</label>
//         <input 
//           type="email" 
//           id="email" 
//           placeholder="Enter your email" 
//           value={email} 
//           onChange={(e) => setEmail(e.target.value)} 
//           required
//         />

//         <label htmlFor="password">Password:</label>
//         <input 
//           type="password" 
//           id="password" 
//           placeholder="Enter your password" 
//           value={password} 
//           onChange={(e) => setPassword(e.target.value)} 
//           required
//         />

//         <button type="submit" disabled={loading} className="submit-btn">
//           {loading ? "Signing up..." : "Sign Up"}
//         </button>

//         <p className="login-link">
//           Already have an account? <a href="/login">Login here</a>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Signup;
import React, { useState } from 'react';
import { auth } from '../firebase/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './Signup.css'; // Add a separate CSS file for styling

const Signup = () => {
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
      // Create user with email and password
      await createUserWithEmailAndPassword(auth, email, password);
      setLoading(false); // Disable the loader once signup is complete

      // Redirect to the dashboard after successful signup
      navigate('/dashboard'); // Redirecting to the dashboard route
    } catch (error) {
      console.error("Error during sign up:", error.message);
      setLoading(false); // Stop the loader in case of error

      // Set the error message
      setError(error.message); 
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="signup-form">
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
          {loading ? "Signing up..." : "Sign Up"}
        </button>

        {/* Show error message if exists */}
        {error && <p className="error-message">{error}</p>}

        <p className="login-link">
          Already have an account? <a href="/login">Login here</a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
