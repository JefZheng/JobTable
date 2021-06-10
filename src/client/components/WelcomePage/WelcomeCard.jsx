import React from 'react';
import { Link } from 'react-router-dom';

export default function WelcomeCard() {
  return (
    <div className="welcomeCardDiv">
      <div id="welcomeText">
        <h1>Hello!</h1>
        <p>This web app&#39;s purpose is to help you track the status of your job applications.</p>
      </div>
    </div>
  );
}
