import {configureStore} from '@reduxjs/toolkit';
import pointsReducer from './slices/pointsSlice';

const store = configureStore({
  reducer: {
    points: pointsReducer,
  },
});

export default store;
