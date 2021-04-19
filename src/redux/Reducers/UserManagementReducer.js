import { edit_user, remove_user } from "../Types/UserManagementTypes";

const initialState = {
  userList: [
    {
      id: 1,
      username: "camha1",
      fullName: "Camha1 Nguyen",
      password: "123",
      email: "camha1@gmail.com",
      phoneNumber: 123,
      userType: "Admin",
    },
    {
      id: 2,
      username: "camha2",
      fullName: "Camha2 Nguyen",
      password: "123",
      email: "camha2@gmail.com",
      phoneNumber: 123,
      userType: "Customer",
    },
  ],
  userEdit: {
    id: 1,
    username: "camha1",
    fullName: "Camha1 Nguyen",
    password: "123",
    email: "camha1@gmail.com",
    phoneNumber: 123,
    userType: "Admin",
  },
};

const UserManagementReducer = (state = initialState, action) => {
  switch (action.type) {
    case edit_user: {
      return { ...state };
    }
    case remove_user: {
      return {
        ...state,
        userList: state.userList.filter((user) => user.id !== action.userId),
      };
    }
    default:
      return { ...state };
  }
};

export default UserManagementReducer;
