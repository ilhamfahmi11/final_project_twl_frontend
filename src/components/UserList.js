import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get("https://final-project-twl-backend-8up8.vercel.app/users");
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`https://final-project-twl-backend-8up8.vercel.app/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  const styles = {
    container: {
      padding: "20px",
      minHeight: "100vh",
    },
    table: {
      width: "100%",
      borderRadius: "8px",
      overflow: "hidden",
    },
    header: {
      background: "#3d6cb9", // Dark blue header background color
      color: "#fff",
    },
    buttonsContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
    },
    addButton: {
      marginRight: "5px",
    },
    logoutButton: {
      marginLeft: "5px",
    },
  };

  return (
    <div style={styles.container}>
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <div style={styles.buttonsContainer}>
            <Link to="/add" className="button is-success" style={styles.addButton}>
              Add New
            </Link>
            <Link to="/login" className="button is-danger" style={styles.logoutButton}>
              Log Out
            </Link>
          </div>
          <div style={styles.table}>
            <table className="table is-striped is-fullwidth mt-2">
              <thead style={styles.header}>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user._id}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.gender}</td>
                    <td>
                      <Link
                        to={`/edit/${user._id}`}
                        className="button is-info is-small"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => deleteUser(user._id)}
                        className="button is-danger is-small"
                        style={styles.addButton}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
