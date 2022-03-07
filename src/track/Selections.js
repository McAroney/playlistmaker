import React from "react";
import {Button} from '@mui/material/'
import { useSelector, useDispatch } from 'react-redux'
import {trackunselect, playlistsave} from "./trackSlice.js";

export default function Selections() {

  const selected = useSelector((state) => state.tracks.selected)
  const dispatch = useDispatch()

  function SavePlaylist() {
     return selected && selected.length>1 ? <Button onClick={ () => dispatch(playlistsave() )}>Save Playlist</Button> : '';
    }

  return(
      <span className="selecteds">
      {selected.map( (obj, i) =>
        <div className="card" key={i}>
            <Button className="delete-icon" key={"button-"+i} onClick={() => dispatch(trackunselect({obj})) }>X</Button>
            {/* using "obj" JSX Evaluation expression for readability here.. */}
            <div className="genre">{obj.obj.genre}</div>
            <h4>{obj.obj.title}</h4>
        </div>)}
        <SavePlaylist/>
      </span>

  )}