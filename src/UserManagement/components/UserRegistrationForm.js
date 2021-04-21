import React, { Component } from "react";
import { Button } from "../../Components/Button";
import { DropdownField } from "../../Components/Dropdown";
import { Heading1, Heading3 } from "../../Components/Heading";
import { TextField } from "../../Components/TextField";
import { registerUserAction } from "../../redux/Actions/UserManagementActions";
import { connect } from "react-redux";

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
    },
  };

  handleChangeValue = (e) => {
    const { name, value } = e.target;

    const newValues = { ...this.state.values, [name]: value };
    const newErrors = { ...this.state.errors };

    if (value.trim() === "") {
      newErrors[name] = name.toUpperCase() + " is invalid!";
    } else {
      newErrors[name] = "";
    }

    if (name === "email") {
      const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!regexEmail.test(value)) {
        newErrors[name] = name.toUpperCase() + " is invalid!";
      } else {
        newErrors[name] = "";
      }
    }

    if (name === "phoneNumber") {
      const regexPhoneNumber = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

      if (!regexPhoneNumber.test(value)) {
        newErrors[name] = name.toUpperCase() + " is invalid!";
      } else {
        newErrors[name] = "";
      }
    }

    console.log(newValues.userType);

    this.setState({
      values: newValues,
      errors: newErrors,
    });
  };

  handleRegister = (e) => {
    e.preventDefault();

    const { values, errors } = this.state;

    // Create user object
    const newUser = {
      id: Date.now(),
      username: values.username,
      fullName: values.fullName,
      password: values.password,
      phoneNumber: values.phoneNumber,
      email: values.email,
      userType: values.userType,
    };
    console.log(newUser);

    let valid = true;

    for (let key in values) {
      if (values[key] === "") {
        valid = false;
      }
    }

    for (let key in errors) {
      if (errors[key] !== "") {
        valid = false;
      }
    }

    if (!valid) {
      alert("Please check all fields!");
      return;
    }

    this.props.dispatch(registerUserAction(newUser));
  };

  render() {
    return (
      <form onSubmit={this.handleRegister}>
        <Heading1>User Registration</Heading1>

        <div className="row">
          <div className="col-6">
            <TextField
              value={this.state.values.username}
              type="text"
              name="username"
              onChange={this.handleChangeValue}
              label="Username"
            />
            <span className="text text-danger">
              {this.state.errors.username}
            </span>
          </div>
          <div className="col-6">
            <TextField
              value={this.state.values.fullName}
              type="text"
              name="fullName"
              onChange={this.handleChangeValue}
              label="Full Name"
            />
            <span className="text text-danger">
              {this.state.errors.fullName}
            </span>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <TextField
              value={this.state.values.password}
              type="password"
              name="password"
              onChange={this.handleChangeValue}
              label="Password"
            />
            <span className="text text-danger">
              {this.state.errors.password}
            </span>
          </div>
          <div className="col-6">
            <TextField
              value={this.state.values.phoneNumber}
              type="phone"
              name="phoneNumber"
              onChange={this.handleChangeValue}
              label="Phone Number"
            />
            <span className="text text-danger">
              {this.state.errors.phoneNumber}
            </span>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <TextField
              value={this.state.values.email}
              type="email"
              name="email"
              onChange={this.handleChangeValue}
              label="Email"
            />
            <span className="text text-danger">{this.state.errors.email}</span>
          </div>
          <div className="col-6">
            {/* <span type="label">User Type</span>

            <div className="btn-group">
              <button
                type="button"
                className="btn dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="float-left">Customer</span>
              </button>
              <div className="dropdown-menu dropdown-menu-right">
                <option>Customer</option>
                <option>Admin</option>
              </div>
            </div> */}
            <DropdownField
              value={this.state.values.userType}
              type="dropdown"
              name="userType"
              onChange={this.handleChangeValue}
              label="User Type"
            >
              {this.props.userType.map((type, index) => {
                return <option key={index}>{type.userType}</option>;
              })}
            </DropdownField>
          </div>
        </div>
        <div>
          <Button className="btn btn-success mr-2">Register</Button>
          <Button onClick={() => {}} className="btn btn-primary">
            Update
          </Button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userType: state.UserManagementReducer.userType,
  };
};

export default connect(mapStateToProps)(UserRegistrationForm);
