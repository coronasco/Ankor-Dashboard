import React from "react";
import { Link } from "react-router-dom";

export default function Success() {
  return (
    <div className="container center">
      <h1>Success</h1>
      <p>Your information has been sent to our database</p>
      <br />
      <hr />
      <br />
      <p>Continue to the dashboard</p>
      <br />
      <Link to="/dashboard">
        <div className="btn cyan">Continue</div>
      </Link>
    </div>
  );
}
