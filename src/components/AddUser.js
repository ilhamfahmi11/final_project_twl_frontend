import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://final-project-twl-backend-8up8.vercel.app/users", {
        name,
        email,
        gender,
      });
      navigate("/list");
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    navigate("/list");
  };

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
    },
    form: {
      backgroundColor: "#f5f5f5", // Light gray background color
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
    select: {
      width: "100%",
      padding: "10px",
      marginBottom: "15px",
      borderRadius: "4px",
      border: "1px solid #ccc",
      fontSize: "16px",
      backgroundColor: "#fff",
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "space-between",
    },
    cancelButton: {
      marginRight: "10px",
      backgroundColor: "#f44336", // Red cancel button color
      color: "#fff",
    },
    saveButton: {
      backgroundColor: "#4caf50", // Green save button color
      color: "#fff",
    },
    addUserHeading: {
      textAlign: "center",
      marginBottom: "20px",
      textTransform: "uppercase", // Convert text to uppercase
      fontWeight: "bold", // Set font weight to bold
      fontSize: "24px", // Set font size to 24px
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.form}>
        <h2 style={styles.addUserHeading}>Add User</h2>
        <form onSubmit={saveUser}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                style={styles.input}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                style={styles.input}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Gender</label>
            <div className="control">
              <div className="select is-fullwidth" style={styles.select}>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
          </div>
          <div style={styles.buttonContainer}>
            <button type="button" className="button" style={styles.cancelButton} onClick={handleCancel}>
              Back
            </button>
            <button type="submit" className="button" style={styles.saveButton}>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
