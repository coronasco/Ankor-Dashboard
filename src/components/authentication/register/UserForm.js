import React, { Component } from "react";
import UserDetails from "./UserDetails";
import PersonalDetails from "./PersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";

export class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    bio: ""
  };

  // Proceed to the next step
  nextStep = () => {
    const { step } = this.state;

    this.setState({
      step: step + 1
    });
  };

  // Go beack to prev step
  prevStep = () => {
    const { step } = this.state;

    this.setState({
      step: step - 1
    });
  };

  // Handle form fields change
  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, city, bio } = this.state;
    const values = { firstName, lastName, email, city, bio };

    switch (step) {
      case 1:
        return (
          <div className="container">
            <UserDetails
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
          </div>
        );
      case 2:
        return (
          <div className="container">
            <PersonalDetails
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          </div>
        );
      case 3:
        return (
          <div className="container">
            <Confirm
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              values={values}
            />
          </div>
        );
      case 4:
        return <Success />;
    }
  }
}

export default UserForm;
