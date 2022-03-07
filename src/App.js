import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Dashboard from './Dashboard.js'
import View from './playlist/View.js'
import "./App.css"

export default class App extends React.Component {

  render() {

    return(
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/edit/playlist/:id" element={<View />} />
          </Routes>
        </Router>
    )
  }
}