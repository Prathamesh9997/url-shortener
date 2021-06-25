import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let url = "https://url-shortener-pg.herokuapp.com";

  const handleClick = async () => {
    if (name !== "" && email !== "" && password !== "") {
      try {
        await axios
          .post(`${url}/user/signup`, { name, email, password })
          .then((response) => {
            if (response.data.message) {
              alert(response.data.message);
              history.push("/");
            } else {
              alert(response.data.error);
            }
          });
        setName("");
        setEmail("");
        setPassword("");
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please fill all the details");
    }
  };
  return (
    <div className="signup-page">
      <h2 className="signup-page-heading">Create New Account</h2>

      <div className="signup-form  col-md-4">
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="name"
            className="form-control"
            id="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
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
        <div className="form-group">
          <label htmlFor="pass">Password</label>
          <input
            type="password"
            className="form-control"
            id="pass"
            placeholder="Enter password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <button
          type="submit"
          className=" signup-button btn"
          onClick={handleClick}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Signup;
