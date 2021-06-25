import React from "react";
import "./ActivateAccount.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const ActivateAccount = (props) => {
  const history = useHistory();
  let url = "https://url-shortener-pg.herokuapp.com";
  let activationLink = props.match.params.token;
  const handleClick = async () => {
    try {
      await axios
        .post(`${url}/user/activate-account`, { activationLink })
        .then((response) => {
          if (response.data.message) {
            alert(response.data.message);
            history.push("/");
          } else {
            alert(response.data.error);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="account-activation">
      <h2 className="account-activation-heading">
        Click below button to activate your account
      </h2>
      <button className="btn activate-button" onClick={handleClick}>
        Activate
      </button>
    </div>
  );
};

export default ActivateAccount;
