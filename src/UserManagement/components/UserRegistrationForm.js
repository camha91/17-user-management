import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "../../Components/Button";
import { DropdownField } from "../../Components/Dropdown";
import { Heading1 } from "../../Components/Heading";
import { TextField } from "../../Components/TextField";
import {
  registerUserAction,
  updateUserAction,
} from "../../redux/Actions/UserManagementActions";
import Swal from "sweetalert2";

class UserRegistrationForm extends Component {
  state = {
    values: {
      username: "",
      fullName: "",
      password: "",
      phoneNumber: "",
      email: "",
      userType: "1",
    },
    errors: {
      username: "",
      fullName: "",
      password: "",
      phoneNumber: "",
      email: "",
    },
    disabled: true,
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

    this.setState({
      values: newValues,
      errors: newErrors,
    });
  };

  handleRegister = (e) => {
    e.preventDefault();
    const initialValues = {
      username: "",
      fullName: "",
      password: "",
      phoneNumber: "",
      email: "",
      userType: "1",
    };

    const { values, errors } = this.state;

    if (JSON.stringify(values) === JSON.stringify(initialValues)) {
      return;
    }

    let valid = true;
    let errorsContent = "";

    for (let key in values) {
      if (values[key] === "") {
        errorsContent += `<p className='text-left'> <b className='text-danger'>${key} is invalid!</b></p>`;
        valid = false;
      }
    }

    for (let key in errors) {
      if (errors[key] !== "") {
        errorsContent += `<p className='text-left'> <b className='text-danger'>${key} is invalid!</b></p>`;
        valid = false;
      }
    }

    if (!valid) {
      Swal.fire({
        title: "Your Profile!",
        html: errorsContent,
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    this.props.dispatch(registerUserAction(values));
  };

  renderUserType = () => {
    const { userType } = this.props;

    return Object.entries(userType).map(([propsUserType, type], index) => {
      return (
        <option value={propsUserType} key={index}>
          {type}
        </option>
      );
    });
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
            <DropdownField
              value={this.state.values.userType}
              type="dropdown"
              name="userType"
              onChange={this.handleChangeValue}
              label="User Type"
            >
              {this.renderUserType()}
            </DropdownField>
          </div>
        </div>
        <div>
          <Button className="btn btn-success mr-2">Register</Button>
          {!this.props.isUpdateAvailable ? (
            <Button disabled className="btn btn-primary">
              Update
            </Button>
          ) : (
            <Button
              onClick={() => {
                console.log("Click Update");
                const { values } = this.state;
                this.setState(
                  {
                    values: {
                      username: "",
                      fullName: "",
                      password: "",
                      phoneNumber: "",
                      email: "",
                      userType: "1",
                    },
                  },
                  () => {
                    console.log("values: ", values);
                    this.props.dispatch(updateUserAction(values));
                  }
                );
              }}
              className="btn btn-primary"
            >
              Update
            </Button>
          )}
        </div>
      </form>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("ComponentDidUpdate");
    // console.log("preProps.userEdit: ", prevProps.userEdit);
    // console.log("props.userEdit: ", this.props.userEdit);
    if (prevProps.userEdit.userId !== this.props.userEdit.userId) {
      const newValue = {
        username: this.props.userEdit.username,
        fullName: this.props.userEdit.fullName,
        password: this.props.userEdit.password,
        email: this.props.userEdit.username,
        phoneNumber: this.props.userEdit.phoneNumber,
        userType: this.props.userEdit.userType,
      };
      this.setState({
        values: newValue,
      });
    }
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.UserManagementReducer,
  };
};

export default connect(mapStateToProps)(UserRegistrationForm);
