import { createSlice } from "@reduxjs/toolkit";

export interface TAuthInit {
    requests: any[]
}

const initialState:TAuthInit = {
  requests: [],
};

const authReducer = createSlice({
  name: "friendRequest",
  initialState,
  reducers: {
    updateFriendRequest: (state, action) => {
      const requests = action.payload;
      const updated = requests.map((el) => {
        const temp = { ...el, state: "pending" };
        return temp;
      });
      state.requests = updated;
    },
    acceptRequest: (state, action) => {
      const { id } = action.payload;
      state.requests.forEach((req)=>{
        if(req._id === id){
            req.state = 'accepted'
        }
      })
    },
    denyRequest: (state, action) => {
      const { id } = action.payload;
      state.requests.forEach((req)=>{
        if(req._id === id){
            req.state = 'remove'
        }
      })
    },
  },
});

export const { updateFriendRequest,acceptRequest, denyRequest } = authReducer.actions;

export default authReducer.reducer;
