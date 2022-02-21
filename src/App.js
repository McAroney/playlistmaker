import React from "react";
import axios from "axios";
import "./App.css";

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      host: '',
      tracks: [],
      addedTracks: [],
      playlist: [],
    };

  }

  
  
  componentDidMount() {
    const sample = (arr) => arr[Math.floor(Math.random() * arr.length)]
    // choose a random API provider from a list of online APIs
    axios.get('https://api.audius.co')
    .then( r =>  this.setState({host: sample(r.data.data) +'/v1'} ));
  }
  render() {


    const getTracks = (e) => {
      let query = e.target.value;
      if (e.key == 'Enter') {
        queryTracks(query);
        }
      };

      const queryTracks = (q) => {
        let tracks = [];
        const headers = {'Accept':'application/json'};

        axios({
          method: "get",
          headers: headers,
          url: this.state.host +"/tracks/search?query=" +q +"&app_name=THIS_TEST_APP"})
          .then( res => {
            res.data.data.map( obj => { if(obj) tracks.push(obj) } );
            this.setState({tracks: tracks});
        })

      }

      const addToPlaylist = obj => {
        let addedTracks = this.state.playlist;
        addedTracks.push(obj);
        this.setState({playlist: addedTracks});
      }

      const objDelete = item => {
        this.setState({playlist: this.state.playlist.filter(function(listitem) { 
          return listitem !== item.listitem; 
        })
      });
      }

    return(
    <div>
      <input type="text" onKeyPress={getTracks}/> 


      {this.state.playlist.map( (listitem, i) => 
        <div className="playlist" key={"listitem-"+i}>
          <div className="header">{listitem.genre}<span className="delete" onClick={() => objDelete({listitem})}>X</span></div>
          {listitem.title}
          </div>
      )}
      

      <div className="card-grid">
        {this.state.tracks.map( (obj, i) => 
          <div className="card" key={i}>
            <div className="genre">{obj.genre}</div>
            <img src={obj.artwork['150x150']}/>
            <h4>{obj.title}</h4>
          <button key={"button-"+i} onClick={() => addToPlaylist(obj)}>+</button>
          </div>
      )}
      </div>

    </div>

    )
  }
}