import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./ResetPassword.css";

const ResetPassword = (props) => {
  const history = useHistory();
  const [newPass, setNewPass] = useState("");
  let url = "https://url-shortener-pg.herokuapp.com";
  const resetLink = props.match.params.token;

  const handleClick = () => {
    if (newPass !== "") {
      try {
        axios
          .put(`${url}/user/reset-password`, { newPass, resetLink })
          .then((response) => {
            if (response.data.message) {
              alert(response.data.message);
              history.push("/");
            } else {
              alert(response.data.error);
              setNewPass("");
            }
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please enter password");
    }
  };
  return (
    <div className="reset-password-page">
      <h2 className="reset-password-heading">Reset Password</h2>
      <div className="reset-password-form col-md-5">
        <div className="form-group">
          <label htmlFor="pass">Password</label>
          <input
            type="password"
            className="form-control"
            id="pass"
            placeholder="Password"
            value={newPass}
            onChange={(e) => {
              setNewPass(e.target.value);
            }}
          />
        </div>
        <button
          type="submit"
          className=" reset-password-button btn"
          onClick={handleClick}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;
