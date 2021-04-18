import React, { Component } from "react";
import { Heading1, Heading3 } from "../../Components/Heading";
import { Table, Thead, Tbody, Tr, Td, Th } from "../../Components/Table";

class UserListTable extends Component {
  render() {
    return (
      <div>
        <Heading3>User List</Heading3>
        <Table>
          <Thead>
            <Tr>
              <Td>Id</Td>
              <Td>Username</Td>
              <Td>Full Name</Td>
              <Td>Password</Td>
              <Td>Email</Td>
              <Td>Phone Number</Td>
              <Td>User Type</Td>
              <Td></Td>
              <Td></Td>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>camha1</Td>
              <Td>Camha1 Nguyen</Td>
              <Td>123</Td>
              <Td>camha1@gmail.com</Td>
              <Td>123456789</Td>
              <Td>Admin</Td>
              <Td>
                <button className="btn btn-primary">Edit User</button>
              </Td>
              <Td>
                <button className="btn btn-danger">Remove User</button>
              </Td>
            </Tr>
            <Tr>
              <Td>2</Td>
              <Td>camha2</Td>
              <Td>Camha2 Nguyen</Td>
              <Td>123</Td>
              <Td>camha2@gmail.com</Td>
              <Td>123456789</Td>
              <Td>Customer</Td>
              <Td>
                <button className="btn btn-primary">Edit User</button>
              </Td>
              <Td>
                <button className="btn btn-danger">Remove User</button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </div>
    );
  }
}

export default UserListTable;
