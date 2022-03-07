import React from "react"
import {Link} from 'react-router-dom'
import DeleteIcon from '@material-ui/icons/Delete';


export default class EditList extends React.Component {
    
    constructor (props) {
        super(props);

        console.log(this.playlist);
        this.changeName = this.changeName.bind(this);
        this.objDelete = this.objDelete.bind(this);
        };


    changeName = function(e) {
        this.setState( prevState => (
        {playlist: prevState.playlist, tracks: prevState.tracks, name: e.target.value }
        ));
    }

    objDelete = function(item) {

        this.setState( prevState => (
            {playlistTracks:  [...this.state.playlist.tracks.filter(listitem => listitem !== item)], name: prevState.name}
            ));
    }

    render() { 

        let playlist = props.playlists[0];
        return (
         <div>
             <Link to="/"></Link>
         <input type="text" value={playlist.name} onChange={this.changeName}/>
         {playlist.tracks.map( (obj, i) => 
            <div className="playlist-track" key={i}>
                <DeleteIcon className="delete-icon" onClick={() => this.objDelete(obj)}/>
                <img src={obj.artwork['150x150']}/>
                <h5>{obj.title} [{obj.genre}]</h5>
                {obj.description}
            </div>
             )}
        </div>
        )
    }
}