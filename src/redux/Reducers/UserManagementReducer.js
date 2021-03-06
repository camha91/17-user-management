import {
  EDIT_USER,
  REGISTER_USER,
  REMOVE_USER,
  UPDATE_USER,
} from "../Types/UserManagementTypes";
import Swal from "sweetalert2";

const initialState = {
  userType: { 1: "Customer", 2: "Admin", 3: "Editor" },
  userList: [
    {
      orderId: 1,
      userId: 1,
      username: "camha1",
      fullName: "Camha Nguyen",
      password: "123",
      email: "camha1@gmail.com",
      phoneNumber: 123,
      userType: 1,
    },
    {
      orderId: 2,
      userId: 2,
      username: "crystal7",
      fullName: "Crystal Nguyen",
      password: "123",
      email: "crystalnguyen@gmail.com",
      phoneNumber: 123,
      userType: 2,
    },
  ],
  userEdit: {
    userId: 321321,
    username: "camha1",
    fullName: "Camha1 Nguyen",
    password: "123",
    email: "camha1@gmail.com",
    phoneNumber: 123,
    userType: 1,
  },
  isUpdateAvailable: false,
};

const UserManagementReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER: {
      const userListUpdate = [...state.userList];
      let profileContent = "";
      const newUser = {
        userId: Date.now(),
        username: action.newUser.username,
        fullName: action.newUser.fullName,
        password: action.newUser.password,
        phoneNumber: action.newUser.phoneNumber,
        email: action.newUser.email,
        userType: action.newUser.userType,
      };

      const index = userListUpdate.findIndex(
        (user) => user.username === action.newUser.username
      );

      // Find if the username is already exist in userList
      if (index !== -1) {
        Swal.fire({
          title: "Username is already exist!",
          icon: "error",
          confirmButtonText: "OK",
        });
        return { ...state };
      } else {
        for (const [key, value] of Object.entries(newUser)) {
          profileContent += `<p class='text-left'> <b>${key}: </b>${value} </p> `;
        }
        // username is not existed in the list, add that new user to the list
        state.userList = [...userListUpdate, newUser];

        Swal.fire({
          title: "Your Profile!",
          html: profileContent,
          icon: "success",
          confirmButtonText: "OK",
        });
      }

      return { ...state };
    }

    case UPDATE_USER: {
      if (action.user.username !== state.userEdit.username) {
        const checkUsername = state.userList.findIndex(
          (user) => user.username === action.user.username
        );

        if (checkUsername !== -1) {
          Swal.fire({
            title: "Username is already exist!",
            icon: "error",
            confirmButtonText: "OK",
          });
          return { ...state };
        }
      }

      console.log("action.user: ", action.user);
      // Edit userEdit
      state.userEdit = {
        ...state.userEdit,
        username: action.user.username,
        fullName: action.user.fullName,
        password: action.user.password,
        email: action.user.email,
        phoneNumber: action.user.phoneNumber,
        userType: action.user.userType,
      };
      console.log("state.userEdit: ", state.userEdit);

      // Find the id in the userList that match with the id from user to edit
      const userListUpdate = [...state.userList];
      const checkUserId = userListUpdate.findIndex(
        (user) => user.userId === state.userEdit.userId
      );

      // if match id
      if (checkUserId !== -1) {
        userListUpdate[checkUserId] = state.userEdit;
      }

      console.log("userListUpdate: ", userListUpdate);

      state.userList = userListUpdate;

      return { ...state };
    }
    case EDIT_USER: {
      // Fill in the fields to edit user
      console.log("action edit_user: ", action);
      return { ...state, userEdit: action.user, isUpdateAvailable: true };
    }
    case REMOVE_USER: {
      return {
        ...state,
        userList: state.userList.filter(
          (user) => user.userId !== action.userId
        ),
      };
    }
    default:
      return { ...state };
  }
};

export default UserManagementReducer;
