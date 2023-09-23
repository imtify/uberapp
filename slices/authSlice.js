import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  loading: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
    },
  },
});

export const selectCurrentUser = state => state.auth.currentUser;

export const {setCurrentUser} = authSlice.actions;
export default authSlice.reducer;
