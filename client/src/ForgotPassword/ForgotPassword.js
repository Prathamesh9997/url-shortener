import axios from "axios";
import React, { useState } from "react";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  let url = "https://url-shortener-pg.herokuapp.com";
  const handleClick = async () => {
    if (email !== "") {
      try {
        await axios
          .put(`${url}/user/forget-password`, { email })
          .then((response) => {
            if (response.data.message) {
              alert(response.data.message);
            } else {
              alert(response.data.error);
            }
          });
        setEmail("");
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please enter email ID");
    }
  };
  return (
    <div className="forgot-password-page">
      <h2 className="forgot-password-heading">Forgot Password</h2>
      <div className="forgot-password-form col-md-5">
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <button
          type="submit"
          className=" forgot-password-button btn"
          onClick={handleClick}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
