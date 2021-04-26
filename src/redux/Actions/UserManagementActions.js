import {
  EDIT_USER,
  REGISTER_USER,
  REMOVE_USER,
  UPDATE_USER,
} from "../Types/UserManagementTypes";

export const registerUserAction = (newUser) => ({
  type: REGISTER_USER,
  newUser,
});

export const updateUserAction = (user) => ({
  type: UPDATE_USER,
  user,
});

// export const editUserAction = (user) => ({
//   type: edit_user,
//   user,
// });

export const editUserAction = (user) => {
  console.log("user: ", user);
  return {
    type: EDIT_USER,
    user,
  };
};

export const removeUserAction = (userId) => ({
  type: REMOVE_USER,
  userId,
});
