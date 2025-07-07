import React from "react";
import { Link } from "react-router-dom";
import learningImg from "../assets/3781798.webp";

const MainContent = () => {
  return (
    <main className="main-content">
      <div className="hero">
        <div className="illustration">
          <img src={learningImg} alt="Learning Illustration" />
        </div>
        <div className="text-content">
          <h5>Online Education</h5>
          <h1>
            A Better Learning Future <br />
            Starts Here. <span className="highlight">Get Started</span>
          </h1>
          <p>
            Learn at your own pace, from anywhere. Our platform provides you with the best tools to succeed.
          </p>
          <div style={{ display: 'flex', gap: '10px' }}>
            <Link to="/Login">
              <button className="btn">Login</button>
            </Link>
            <Link to="/SignUp">
              <button className="btn">Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
