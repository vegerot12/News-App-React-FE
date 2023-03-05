import React from "react";
import "./Error.css";

export default function LoadingSpinner() {
  return (
    <div className="error-container">
      <div className="error-message">
        There was an error loading. Please try again.
      </div>
    </div>
  );
}
