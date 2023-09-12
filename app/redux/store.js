// store.js: This file configures and creates the Redux store.
import {configureStore} from '@reduxjs/toolkit';
import pointsReducer from './slices/pointsSlice';

// Configure the Redux store with the pointsReducer
const store = configureStore({
  reducer: {
    points: pointsReducer,
  },
});

export default store;
