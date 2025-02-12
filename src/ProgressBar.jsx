import React from "react";
import "./ProgressBar.css"; // Ensure this file exists

const ProgressBar = ({ progress }) => {
  return (
    <div className="progress-container">
      <h1>Progress Bar</h1>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p>{progress}% Complete</p>
    </div>
  );
};

export default ProgressBar;
