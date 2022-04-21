import { createSlice } from '@reduxjs/toolkit';
import {eng} from '../language/eng';
import {bm} from '../language/ms';

const initialState = {
  language: bm,
  appMode:'dark',
}

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    
    setLanguage:(state,actions) => {
        state.language =actions.payload
    },

    setBahasa: (state) => {
        state.language=bm;
      },

    setEnglish: (state) => {
        state.language=eng;
      },
  },
  

})

// Action creators are generated for each case reducer function
export const { setLanguage, setBahasa, setEnglish } = settingsSlice.actions

export default settingsSlice.reducer