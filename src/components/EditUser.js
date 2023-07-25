import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const getUserById = async () => {
    const response = await axios.get(`https://final-project-twl-backend-8up8.vercel.app/users/${id}`);
    setName(response.data.name);
    setEmail(response.data.email);
    setGender(response.data.gender);
  };

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`https://final-project-twl-backend-8up8.vercel.app/users/${id}`, {
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
    navigate(-1); // Go back to the previous page
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
      marginTop: "20px", // Add space between form fields and buttons
    },
    cancelButton: {
      flex: 1, // Let the button grow to fill the available space
      marginRight: "10px",
      backgroundColor: "#f44336", // Red cancel button color
      color: "#fff",
    },
    updateButton: {
      flex: 1, // Let the button grow to fill the available space
      backgroundColor: "#4caf50", // Green update button color
      color: "#fff",
    },
    editUserHeading: {
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
        <h2 style={styles.editUserHeading}>Edit User</h2>
        <form onSubmit={updateUser}>
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
            <button
              type="button"
              className="button"
              style={styles.cancelButton}
              onClick={handleCancel}
            >
              Back
            </button>
            <button type="submit" className="button" style={styles.updateButton}>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
