import {
  change_user,
  edit_user,
  register_user,
  remove_user,
} from "../Types/UserManagementTypes";

export const registerUserAction = (newUser) => ({
  type: register_user,
  newUser,
});

export const changeUserAction = (user) => ({
  type: change_user,
  user,
});

export const editUserAction = (user) => ({
  type: edit_user,
  user,
});

export const removeUserAction = (userId) => ({
  type: remove_user,
  userId,
});
