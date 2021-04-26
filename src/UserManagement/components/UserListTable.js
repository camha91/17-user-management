import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "../../Components/Button";
import { Heading3 } from "../../Components/Heading";
import { Table, Tbody, Td, Th, Thead, Tr } from "../../Components/Table";
import {
  editUserAction,
  removeUserAction,
} from "../../redux/Actions/UserManagementActions";

class UserListTable extends Component {
  renderUserList = () => {
    return this.props.userList.map((user, index) => {
      return (
        <Tr key={index}>
          <Td>{index + 1}</Td>
          <Td>{user.username}</Td>
          <Td>{user.fullName}</Td>
          <Td>{user.password}</Td>
          <Td>{user.email}</Td>
          <Td>{user.phoneNumber}</Td>
          <Td>{this.props.userType[user.userType]}</Td>
          <Td>
            <Button
              onClick={() => {
                this.props.dispatch(editUserAction(user));
              }}
              className="btn btn-primary mr-2"
            >
              Edit
            </Button>
            <Button
              onClick={() => {
                this.props.dispatch(removeUserAction(user.userId));
              }}
              className="btn btn-danger"
            >
              Remove
            </Button>
          </Td>
        </Tr>
      );
    });
  };
  render() {
    return (
      <div>
        <Heading3>User List</Heading3>
        <Table>
          <Thead>
            <Tr>
              <Th>Order ID</Th>
              <Th>Username</Th>
              <Th>Full Name</Th>
              <Th>Password</Th>
              <Th>Email</Th>
              <Th>Phone Number</Th>
              <Th>User Type</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>{this.renderUserList()}</Tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.UserManagementReducer,
  };
};

export default connect(mapStateToProps)(UserListTable);
