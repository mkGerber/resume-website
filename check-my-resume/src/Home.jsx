import { useState } from 'react';
import {useNavigate} from "react-router-dom"
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login")
  }

  

  return (
    <>
      <header className="appHeader">
        <div className="headerText">
          <h1>Check My Resume</h1>
        </div>
        <div className="buttonGroup">
          <button onClick={handleLogin}>Log In</button>
          <button>Sign Up</button>
        </div>
      </header>

      <section className="appBody">
        <div className="topText">
          <h2>Find if you are qualified for the job!</h2>
        </div>
        <div className="uploadSections">
          <div className="uploadResume">
            <h3>Upload Resume</h3>
            <input type="file" accept=".pdf" id="resumeInput" hidden />
            <label htmlFor="resumeInput" className="customFileButton">Choose File</label>
          </div>
          <div className="uploadJob">
            <h3>Upload Job Description</h3>
            <input type="file" accept=".pdf" id="jobInput" hidden />
            <label htmlFor="jobInput" className="customFileButton">Choose File</label>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
