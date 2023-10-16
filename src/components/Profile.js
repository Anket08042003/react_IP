// import React from 'react';
import { Link } from "react-router-dom";
import img from "../images/profile.jpg";
import '../profile.css';

const Profile = () => {
  return (
    <div className="container">
      <h1 style={{ color: "#00203FFF" }}>Anket Kadam</h1>
      <h2 style={{ color: "#00203FFF" }}>Backend Developer</h2>
      <div className="image">
        <img src={img} alt="profile" />
      </div>
      <p>
        {/* Your introduction */}
      </p>
      <Link to="/contact" className="btn">
        Get in touch!
      </Link>
    </div>
  );
};

export default Profile;
