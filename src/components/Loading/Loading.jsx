import React from 'react';
import './Loading.css'; // Add this to style the loader
import me from "../../assets/profile.png"; // Replace with your actual image path

function Loading() {
  return (
    <div className="loader">
      <img
        src={me} 
        alt="Please wait..."
        className="loader-image"
      />
      <p>Loading...</p>
    </div>
  );
}

export default Loading;
