import { configureStore } from '@reduxjs/toolkit';
import videosReducer from '../features/videos/videosSlice.js';

export const store = configureStore({
  reducer: {
    videos: videosReducer,
    
  },
});
