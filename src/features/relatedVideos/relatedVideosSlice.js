import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRelatedVideos } from "./relatedVideosAPI";


const initialState = {
    relatedvideos: [],
    isError: false,
    isLoading: false,
    error: "",
}

// async thunk 
export const fetchRelatedVideos = createAsyncThunk("relatedVideos/fetchRelatedVideos", async ({tags, id}) => {

    const relatedVideos = await getRelatedVideos({tags, id});
    return relatedVideos
});

const relatedVideoSlice = createSlice({
    name: "relatedVideo",
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchRelatedVideos.pending, (state, action) => {
            state.isError = false;
            state.isLoading = true;
        })
        .addCase(fetchRelatedVideos.fulfilled, (state, action) => {
            
            state.isLoading = false;
            state.relatedvideos = action.payload
        })
        .addCase(fetchRelatedVideos.rejected, (state, action) => {
           
            state.isLoading = false;
            state.videos = [];
            state.isError = true;
            state.error = action.error.message
        })
    }
})

export default relatedVideoSlice.reducer;