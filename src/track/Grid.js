import React from "react";
import {Grid, Button} from '@mui/material/'
import { useSelector, useDispatch } from 'react-redux'
import {trackselect} from './trackSlice.js'

export default function TrackGrid() {

  const grid = useSelector((state) => state.tracks.grid)
  const dispatch = useDispatch()

  function select(obj) {
    dispatch(trackselect(obj))
  }

  return(
      <Grid className="card-grid">
      {grid.map( (obj, i) => 
        <div className="card" key={i}>
          <div className="genre">{obj.genre}</div>
          <img src={obj.artwork['150x150']}/>
          <h4>{obj.title}</h4>
          <Button variant="contained" key={"button-"+i} onClick={() => select({obj}) }>+</Button>
        </div>
        )}
      </Grid>

  )}