import { configureStore } from '@reduxjs/toolkit'
import trackReducer from './track/trackSlice.js'

export default configureStore({
  reducer: {
      tracks: trackReducer,
    }
  }
)