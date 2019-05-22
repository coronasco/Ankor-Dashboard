import React, { Component } from "react";

export class PersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  preview = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values } = this.props;
    const { handleChange } = this.props;
    return (
      <div>
        <h1>User Personal Details Step 2</h1>
        <br />
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              value={values.city}
              onChange={handleChange("city")}
            />
            <label>City</label>
          </div>
          <br />
          <div className="input-field">
            <input
              type="text"
              value={values.bio}
              onChange={handleChange("bio")}
            />
            <label>Bio</label>
          </div>
          <br />
          <br />
          <button className="btn cyan" onClick={this.continue}>
            Continue
          </button>
          <button className="btn grey right" onClick={this.preview}>
            Go Back
          </button>
        </div>
      </div>
    );
  }
}

export default PersonalDetails;
