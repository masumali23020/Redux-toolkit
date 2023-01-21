import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getVideos } from "./videosAPI"

// initial state 
const initialState = {
    isLoading: false,
    isError : false,
    videos: [],
    error: "",

}

// async thun 
export const fetchViedod = createAsyncThunk("videos/fetchVideos", async() => {
    const videos = await getVideos()
    return videos;

})


// create videos slice 
const videosSlice = createSlice({
    name: "videos",
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchViedod.pending, (state) => {
            state.isError = false;
            state.isLoading = true;
            
        })
        .addCase(fetchViedod.fulfilled, (state, action) => {
            state.isLoading = false;
            state.videos = action.payload;
        })
        .addCase(fetchViedod.rejected, (state, action) => {
            state.isLoading = false;
            state.videos = [];
            state.isError = true;
            state.error = action.error?.message;
        })
    }

})

export default videosSlice.reducer;