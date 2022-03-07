import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Playlists() {

  const playlists = useSelector((state) => state.tracks.playlists)
//  const dispatch = useDispatch()
if (playlists) { 
  return(
      <div className="playlists">
      {playlists.map( (obj, i) =>
        <span key={i}>
            <Button className="playlist-button" component={Link} to={"/edit/playlist/" +obj.id}>{obj.name} - {obj.tracks.length} tracks</Button>
        </span>)}
      </div>)
    } else {return ''}
}