import React, { Component } from "react";
import { Button } from "../../Components/Button";
import { DropdownField } from "../../Components/Dropdown";
import { Heading1, Heading3 } from "../../Components/Heading";
import { TextField } from "../../Components/TextField";

class UserRegistrationForm extends Component {
  state = {
    values: {
      username: "",
      fullName: "",
      password: "",
      phoneNumber: "",
      email: "",
      userType: "",
    },
    errors: {
      username: "",
      fullName: "",
      password: "",
      phoneNumber: "",
      email: "",
      userType: "",
    },
  };
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
            <span type="label">User Type</span>

            <div className="btn-group">
              <button
                type="button"
                className="btn dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="float-left">Customer</span>

                {/* <span className="sr-only">Toggle Dropdown</span> */}
              </button>
              <div className="dropdown-menu dropdown-menu-right">
                <option>Customer</option>
                <option>Admin</option>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Button className="btn btn-success mr-2">Register</Button>
          <Button className="btn btn-primary">Update</Button>
        </div>
      </form>
    );
  }
}

export default UserRegistrationForm;
