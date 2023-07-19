import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  status: "idle",
  error: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    addNewUser: (state, action) => {
      const newUser = {
        firstName: action.payload.data.firstName,
        lastName: action.payload.data.lastName,
        city: action.payload.data.city,
        address: action.payload.data.address,
        createdDate: action.payload.data.createdDate,
        phone: action.payload.data.phone,
        _id: action.payload.data._id,
      };

      state.users.push(newUser);
    },
    getUsers: (state, action) => {
      const usersArr = action.payload.data;
      state.users = [...usersArr];
    },
    deleteUser: (state, action) => {
      const userId = action.payload;

      const usersArr = [...state.users];
      const userIdToDelete = usersArr.findIndex((e) => e._id === userId);

      if (userIdToDelete === -1) {
        alert("No such user");
        return;
      }

      usersArr.splice(userIdToDelete, 1);
      state.users = [...usersArr];
    },
    updateUser: (state, action) => {
      const existingUserIndex = state.users.findIndex(
        (e) => e._id === action.payload.data._id
      );

      if (existingUserIndex === -1) {
        alert("No such user!");
        return;
      }

      state.users[existingUserIndex] = action.payload.data;
    },
  },
});

export function sendUserData(userData) {
  return async (dispatch) => {
    try {
      const result = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/person/insert`,
        {
          method: "POST",
          body: JSON.stringify({
            firstName: userData.firstName,
            lastName: userData.lastName,
            city: userData.city,
            address: userData.address,
            phone: userData.phone,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await result.json();
      dispatch(addNewUser(data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function getUserData() {
  return async (dispatch) => {
    try {
      const result = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/person/getAll`
      );

      const data = await result.json();

      dispatch(getUsers(data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteUserData(userId) {
  return async (dispatch) => {
    try {
      const result = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/person/delete/${userId}`,
        {
          method: "DELETE",
        }
      );

      dispatch(deleteUser(userId));
    } catch (error) {
      console.log(error);
    }
  };
}

export function updateUserData(userData) {
  console.log(userData);
  return async (dispatch) => {
    try {
      const result = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/person/update/${userData._id}`,
        {
          method: "POST",
          body: JSON.stringify({
            firstName: userData.firstName,
            lastName: userData.lastName,
            city: userData.city,
            address: userData.address,
            phone: userData.phone,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await result.json();
      dispatch(updateUser(data));
    } catch (error) {
      console.log(error);
    }
  };
}

export const { addNewUser, getUsers, deleteUser, updateUser } =
  usersSlice.actions;

export default usersSlice.reducer;
