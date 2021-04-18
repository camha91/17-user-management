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
};

const UserManagementReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default UserManagementReducer;
