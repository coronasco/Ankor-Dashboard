import React, { Component } from "react";

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    //PROCESS FORM//
    this.props.nextStep();
  };

  prevStep = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values } = this.props;
    return (
      <div>
        <h1>Confirmation</h1>
        <br />
        <ul className="collection">
          <li className="collection-item">Name: {values.firstName}</li>
          <li className="collection-item">Last Name: {values.lastName}</li>
          <li className="collection-item">Email: {values.email}</li>
          <li className="collection-item">City: {values.city}</li>
          <li className="collection-item">Bio: {values.bio}</li>
        </ul>

        <button className="btn cyan" onClick={this.continue}>
          Continue
        </button>
        <button className="btn grey right" onClick={this.preview}>
          Go Back
        </button>
      </div>
    );
  }
}

export default Confirm;
