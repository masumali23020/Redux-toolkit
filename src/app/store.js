import { configureStore } from '@reduxjs/toolkit';
import relatedVideosSlice from '../features/relatedVideos/relatedVideosSlice.js';
import tagsReducer from '../features/tags/tagsSlice.js';
import videoSlice from '../features/video/videoSlice.js';
import videosReducer from '../features/videos/videosSlice.js';

export const store = configureStore({
  reducer: {
    videos: videosReducer,
    tags: tagsReducer,
    video: videoSlice,
    relatedVideos:relatedVideosSlice,

    
  },
});
