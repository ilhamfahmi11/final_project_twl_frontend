import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState(""); // State to store error message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Check if username or password is empty
      if (!formData.username || !formData.password) {
        setErrorMessage("Username and password cannot be empty");
      } else {
        // Send a POST request to the backend to register the user
        const response = await axios.post(
          "https://final-project-twl-backend-8up8.vercel.app/register",
          formData
        );
        console.log(response.data); // You can handle the response as needed

        // Redirect to '/login' on successful registration
        navigate("/login");
      }
    } catch (error) {
      console.error("Error registering user:", error.message);
    }
  };

  const navigate = (path) => {
    window.location.href = path;
  };

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      background: "linear-gradient(135deg, #a2c0d8 0%, #3d6cb9 100%)",
      overflow: "hidden", // Hide overflow on the body
    },
    form: {
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      width: "100%", // Set the form width to 100%
      maxWidth: "400px",
    },
    input: {
      width: "100%",
      padding: "10px",
      marginBottom: "15px",
      borderRadius: "4px",
      border: "1px solid #ccc",
      fontSize: "16px",
    },
    button: {
      width: "100%",
      padding: "12px",
      borderRadius: "4px",
      backgroundColor: "#3d6cb9", // Change button color here
      color: "#fff",
      fontSize: "18px",
      border: "none",
      cursor: "pointer",
      transition: "background-color 0.3s ease-in-out",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Add box shadow
    },
    link: {
      color: "#3d6cb9",
      textDecoration: "none",
    },
    errorMessage: {
      color: "red",
      marginBottom: "15px",
      textAlign: "center",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.form}>
        <h2 style={{ color: "#3d6cb9" }}>Register</h2>
        {errorMessage && <p style={styles.errorMessage}>{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Register
          </button>
          <p>
            Already have an account?{" "}
            <Link to="/login" style={styles.link}>
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;