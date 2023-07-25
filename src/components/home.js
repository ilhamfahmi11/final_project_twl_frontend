import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const styles = `
    body {
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: linear-gradient(135deg, #a2c0d8 0%, #3d6cb9 100%);
    }

    .container {
      text-align: center;
      padding: 20px;
      max-width: 600px;
    }

    h2 {
      color: #fff;
      font-size: 32px;
      margin-bottom: 20px;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
    }

    p {
      color: #f0f0f0;
      font-size: 20px;
      margin-bottom: 30px;
    }

    .button-container {
      display: flex;
      justify-content: center;
    }

    .button {
      background-color: #4caf50;
      color: #fff;
      font-size: 18px;
      padding: 12px 24px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin: 5px;
      transition: background-color 0.3s ease-in-out;
    }

    .button:hover {
      background-color: #45a049;
    }
  `;

  return (
    <div>
      <style>{styles}</style>
      <div className="container">
        <h2>Selamat Datang</h2>
        <p>Silahkan untuk login apabila sudah mempunyai akun dan Register apabila belum mempunyai akun</p>
        <div className="button-container">
          <Link to="/login">
            <button className="button">Login</button>
          </Link>
          <Link to="/register">
            <button className="button">Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
