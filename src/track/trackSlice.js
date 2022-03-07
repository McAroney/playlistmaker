import axios from 'axios';
import { createAsyncThunk, createSlice} from '@reduxjs/toolkit'
export const getTracks = createAsyncThunk(
  'fetchtracks',
  async (query) => {
    const queryString = "https://discoveryprovider.audius.co/v1/tracks/search?query=" +query +"'&app_name=THIS_TEST_APP'";
    const reqHeaders = {'Accept':'application/json'};

    try {
      const response = await axios.get(queryString, '')
      return response.data
    } catch(err) {
      console.log(err);
      state.loading = false;
    }

  }
);


export const trackSlice = createSlice({
  name: 'tracks',
  initialState: {
        grid: [],
        selected: [],
        playlists: [],
        playlistid: 0,
        loading: false
      },
  reducers: {
    trackunselect (state, action) {
    state.selected = state.selected.filter((item) => item.obj.id != action.payload.obj.id)
    },
     trackselect (state, action) {
      // select means adding to selections (temporary Playlist)
      state.selected.push(action.payload);
    },
    playlistsave: (state) => {
      let name = "Untitled Playlist"; // Every playlist has this initial name on first save
      state.playlistid = state.playlistid +1;
      let newlist = {id : state.playlistid, name : name, tracks : state.selected};
      state.playlists.push(newlist); // New playlist "saved"
      state.selected = []; //Empty "selections row" after creation
    },
    playlistDelete (state, action) {
      state.playlists = state.playlists.filter((item) => item.id != action.payload)
      },
    changename (state, action) {

      let newname = action.payload.name;
      state.playlists[action.payload.id-1].name = newname;
    }
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getTracks.pending, (state) => {
      state.loading = true;
    }),

    builder.addCase(getTracks.fulfilled, (state, action) => {
      // Add user to the state array
      state.loading = false;
      let tracks = [];
      {action.payload.data.map( obj => tracks.push(obj))}
      state.grid = tracks
    })
  },
})
// Action creators are generated for each case reducer function
export const {trackselect, trackunselect, playlistsave, changename, playlistDelete} = trackSlice.actions;
export default trackSlice.reducer;