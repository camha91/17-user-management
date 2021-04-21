import {
  change_user,
  edit_user,
  register_user,
  remove_user,
} from "../Types/UserManagementTypes";

const userType = ["Customer", "Admin", "Editor"];

const initialState = {
  userType: [
    {
      id: 1,
      userType: userType[0],
    },
    {
      id: 2,
      userType: userType[1],
    },
    {
      id: 3,
      userType: userType[2],
    },
  ],
  userList: [
    {
      id: 1,
      username: "camha1",
      fullName: "Camha1 Nguyen",
      password: "123",
      email: "camha1@gmail.com",
      phoneNumber: 123,
      userType: userType[0],
    },
    {
      id: 2,
      username: "camha2",
      fullName: "Camha2 Nguyen",
      password: "123",
      email: "camha2@gmail.com",
      phoneNumber: 123,
      userType: userType[1],
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
    case register_user: {
      const userListUpdate = [...state.userList];
      const index = userListUpdate.findIndex(
        (user) => user.username === action.newUser.username
      );
      console.log(index);

      // Find if the username is already exist in userList
      if (index !== -1) {
        alert("Username is already exist!");
        return { ...state };
      }

      // username is not existed in the list, add that new user to the list
      state.userList = [...userListUpdate, action.newUser];

      console.log(state.userList);
      alert("Register successfully!");

      return { ...state };
    }
    case change_user: {
      return { ...state };
    }
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
