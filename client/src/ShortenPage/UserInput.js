import React from "react";

const UserInput = ({ handleChange, longUrl, handleClick }) => {
  return (
    <div className="my-4 form-inline">
      <label htmlFor="longUrl" className="sr-only">
        URL
      </label>
      <input
        type="text"
        id="longUrl"
        placeholder="Enter your URL here"
        className="form-control mr-2 col"
        value={longUrl}
        required
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <button
        type="submit"
        className=" shorten-button btn"
        onClick={() => {
          handleClick();
        }}
      >
        Shorten
      </button>
    </div>
  );
};

export default UserInput;
