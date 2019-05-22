import React, { Component } from "react";

export class UserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values } = this.props;
    const { handleChange } = this.props;
    return (
      <div>
        <h1>User Details Step 1</h1>
        <br />
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              value={values.firstName}
              onChange={handleChange("firstName")}
            />
            <label>First Name</label>
          </div>
          <br />
          <div className="input-field">
            <input
              type="text"
              value={values.lastName}
              onChange={handleChange("lastName")}
            />
            <label>Last Name</label>
          </div>
          <br />
          <div className="input-field">
            <input
              type="email"
              value={values.email}
              onChange={handleChange("email")}
            />
            <label>Email</label>
          </div>
          <br />
          <button className="btn cyan" onClick={this.continue}>
            Continue
          </button>
        </div>
      </div>
    );
  }
}

export default UserDetails;
