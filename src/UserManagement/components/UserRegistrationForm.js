import React, { Component } from "react";
import { DropdownField } from "../../Components/Dropdown";
import { Heading1, Heading3 } from "../../Components/Heading";
import { TextField } from "../../Components/TextField";

class UserRegistrationForm extends Component {
  render() {
    return (
      <form>
        <Heading1>User Registration</Heading1>

        <div className="row">
          <div className="col-6">
            <TextField label="Username" />
          </div>
          <div className="col-6">
            <TextField label="Full Name" />
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <TextField label="Password Name" />
          </div>
          <div className="col-6">
            <TextField label="Phone Number" />
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <TextField label="Email" />
          </div>
          <div className="col-6">
            <DropdownField label="User Type">
              <option>Customer</option>
              <option>Admin</option>
            </DropdownField>
          </div>
        </div>
        <div>
          <button className="btn btn-success mr-2">Register</button>
          <button className="btn btn-primary">Update</button>
        </div>
      </form>
    );
  }
}

export default UserRegistrationForm;
