import React from "react"
import {Link} from 'react-router-dom'
import DeleteIcon from '@material-ui/icons/Delete';
import { ArrowBack } from "@material-ui/icons";
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import {changename, playlistDelete} from '../track/trackSlice'

export default function View()  {

    let params = useParams();
    let navigate = useNavigate();
    let playlist = useSelector((state) => state.tracks.playlists[params.id-1]);
    {/* Again, doing this because to user playlist numbering starts at one */}
    let dispatch = useDispatch();


    function namechange(event) {
        let newname = event.target.value;
        let id = playlist.id;
        if(event.key == 'Enter') {
            dispatch(changename({id: id, name: newname}));
            navigate("/");
        }
    }

    function playlistdelete() {
        let confirmation = window.confirm("Delete " +playlist.name +"?");
        if (confirmation) {
            dispatch(playlistDelete(playlist.id));
            navigate("/"); 
            console.log('OK');
        } else {
            console.log('Cancel');
        }
    }
  
    return (
        <div className="playlist-editor">
            <Link to="/"> <ArrowBack/> </Link><br/>
            <DeleteIcon onClick={playlistdelete}/>
            <input type="text" placeholder={playlist.name} onKeyPress={namechange}></input>
            <div className="playlist-items">
            {playlist.tracks.map( (track, i) => 
                <div className="playlist-track" key={i}>
                    <img src={track.obj.artwork['150x150']}/>
                    <h1>{track.obj.title} </h1>
                    <span className="genre">{track.obj.genre}</span>
                    <p>{track.obj.description}</p>
                </div>
            )}
            </div>
    </div>
    )
}