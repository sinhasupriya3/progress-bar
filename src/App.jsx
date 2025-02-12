import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import "./App.css";

function App() {
  const [progress, setProgress] = useState(0);

  // Function to update progress
  const updateProgress = () => {
    setProgress((prev) => (prev < 100 ? prev + 10 : 100));
  };

  return (
    <div className="app-container">
      <ProgressBar progress={progress} />
      <button onClick={updateProgress} className="progress-button">
        Increase Progress
      </button>
    </div>
  );
}

export default App;
