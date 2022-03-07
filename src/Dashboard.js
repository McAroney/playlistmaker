import React from "react";
import {Container} from '@mui/material/';
import Searchbar from "./query/searchbar.js";
import TrackGrid from "./track/Grid.js"
import Selections from "./track/selections.js";
import Playlists from "./playlist/Playlists.js" 

export default class Dashboard extends React.Component {     
    
      render() {
        return(
          <Container className="main-container" maxWidth="lg">
            <Searchbar/>
            <Selections/>
            <Playlists />
            <TrackGrid/>

        </Container>
    
        )
    }
}