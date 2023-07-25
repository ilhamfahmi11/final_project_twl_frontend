import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import Register from "./components/register";
import Login from "./components/login";
import Home from "./components/home";

const App = () => {
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [error, setError] = useState("");

  const handleRegister = (userData) => {
    // Add the new user data to the registeredUsers state
    setRegisteredUsers([...registeredUsers, userData]);
  };

  const handleLogin = (userData) => {
    // Check if the user data matches any registered user
    const user = registeredUsers.find(
      (user) => user.email === userData.email && user.password === userData.password
    );

    if (user) {
      // Handle successful login, e.g., redirect to the dashboard page
      console.log("Logged in successfully!");
      setError("");
    } else {
      setError("Email atau password tidak cocok.");
    }
  };

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login handleLogin={handleLogin} error={error} />} />
          <Route path="/register" element={<Register handleRegister={handleRegister} />} />
          <Route path="/list" element={<UserList />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;