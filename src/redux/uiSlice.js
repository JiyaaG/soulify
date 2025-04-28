
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  darkMode: false,
  activeSection: 'home'
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
    state.darkMode = !state.darkMode;
    },
    setActiveSection: (state, action) => {
        state.activeSection = action.payload;
      }
  },
});

export const { toggleDarkMode,setActiveSection } = uiSlice.actions;
export default uiSlice.reducer;
