import { configureStore } from '@reduxjs/toolkit';
import tagsReducer from '../features/tags/tagsSlice.js';
import videosReducer from '../features/videos/videosSlice.js';

export const store = configureStore({
  reducer: {
    videos: videosReducer,
    tags: tagsReducer,
    
  },
});
