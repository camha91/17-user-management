import React, { Component } from "react";
import { Heading1, Heading3 } from "../../Components/Heading";
import { Table, Thead, Tbody, Tr, Td, Th } from "../../Components/Table";
import { connect } from "react-redux";
import {
  editUserAction,
  removeUserAction,
} from "../../redux/Actions/UserManagementActions";
import { Button } from "../../Components/Button";

class UserListTable extends Component {
  renderUserList = () => {
    return this.props.userList.map((user, index) => {
      return (
        <Tr key={index}>
          <Th>{user.id}</Th>
          <Th>{user.username}</Th>
          <Th>{user.fullName}</Th>
          <Th>{user.password}</Th>
          <Th>{user.email}</Th>
          <Th>{user.phoneNumber}</Th>
          <Th>{user.userType}</Th>
          <Th>
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
                this.props.dispatch(removeUserAction(user.id));
              }}
              className="btn btn-danger"
            >
              Remove
            </Button>
          </Th>
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
              <Th>Id</Th>
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
    userList: state.UserManagementReducer.userList,
  };
};

export default connect(mapStateToProps)(UserListTable);
