// pointsSlice.js: This file defines the Redux slice for managing points.

import {createSlice} from '@reduxjs/toolkit';
import {APP_CONSTS} from './../../constants';

// Define the initial state
const initialState = {
  points: 0,
};

// Create a points slice with reducers
const pointsSlice = createSlice({
  name: 'points',
  initialState,
  reducers: {
    win: state => {
      state.points += APP_CONSTS.VALUE_WINNING_POINTS;
    },
    lose: state => {
      state.points -= APP_CONSTS.VALUE_LOOSING_POINTS;
    },
    reset: state => {
      state.points = 0;
    },
  },
});

export const {win, lose, reset} = pointsSlice.actions;
export default pointsSlice.reducer;
