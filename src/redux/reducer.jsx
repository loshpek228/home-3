import { configureStore, createSlice } from '@reduxjs/toolkit';


const initialNames = JSON.parse(localStorage.getItem('names')) || [];


const namesSlice = createSlice({
  name: 'names',
  initialState: initialNames,
  reducers: {
    addName: (state, action) => {
      state.push(action.payload);
      localStorage.setItem('names', JSON.stringify(state));
    },
    removeName: (state, action) => {
      const index = state.indexOf(action.payload);
      if (index > -1) {
        state.splice(index, 1);
        localStorage.setItem('names', JSON.stringify(state));
      }
    },
  },
});

export const { addName, removeName } = namesSlice.actions;

const store = configureStore({
  reducer: {
    names: namesSlice.reducer,
  },
});

export default store;
