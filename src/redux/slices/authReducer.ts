import { POST_LOGIN, POST_REGISTER_USER } from "@/api/route";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../store";
import axiosInstance from "@/axios/axios";

interface TAuthInit {}

const initialState = {
  verifying: localStorage.getItem('verifying') || null,
  isLoading: false,
  isLogged:!!localStorage.getItem('accessToken'),
  user: null,
  user_id: null,
  accessToken: localStorage.getItem('accessToken') || null
};

const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.accessToken = action.payload.token,
      state.user = action.payload.data,
      state.isLogged = true
    },
    updateVerifyingEmail(state, action) {
      state.verifying = action.payload;
    },
    setUser: (state,action)=>{
      state.user = action.payload
    },
    logout:(state) =>{
      state.accessToken = null,
      state.isLogged = false
      state.user = null
    }

    

  }
});

export const { login, updateVerifyingEmail,setUser,logout } = authReducer.actions;

export default authReducer.reducer;

// Fetch API
// export function Login(formValue) {
//   return async (dispatch, getState) => {
//     try {
//       const res = await axiosInstance.post(
//         POST_LOGIN,
//         {
//           ...formValue,
//         },
//       );

//       dispatch(
//         login({
//           isLoggedIn: true,
//           token: res.data.token,
//         })
//       );
//     } catch (err) {
//       console.log(err);
//     }
//   };
// }
// export function RegisterUser(formValues) {
//   return async (dispatch: AppDispatch, getState: () => RootState) => {
//     try {
//       const res = await axiosInstance.post(
//         POST_REGISTER_USER,
//         {
//           ...formValues,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       console.log(res)
//       dispatch(updateVerifyingEmail(formValues.email))


//     } catch (err) {
//       console.log(err)
//      throw err
//     }
//     // window.location.href = "/verify"
//   };
// }
