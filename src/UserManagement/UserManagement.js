import React, { Component } from "react";
import UserListTable from "./components/UserListTable";
import UserRegistrationForm from "./components/UserRegistrationForm";
import { ContainerFluid } from "../Components/Container";
import "./UserManagement.css";

class UserManagement extends Component {
  render() {
    return (
      <ContainerFluid>
        <UserRegistrationForm />
        <UserListTable />
      </ContainerFluid>
    );
  }
}

export default UserManagement;
