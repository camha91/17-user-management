import { edit_user, remove_user } from "../Types/UserManagementTypes";

export const editUserAction = (user) => ({
  type: edit_user,
  user,
});

export const removeUserAction = (userId) => ({
  type: remove_user,
  userId,
});
