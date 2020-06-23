import React, { Component } from 'react';
import './App.css';
import "./css/index.css";

//Data & Key to Access Flickr
import Config from "./components/Config";
import axios from "axios";

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SearchForm from "./components/SearchForm";
import Nav from "./components/Nav";
import PhotoContainer from './components/PhotoContainer';
import Error404 from "./components/Error404";

//Default App Cosmic Components
import Sun from "./components/Sun";
import Moon from "./components/Moon";
import Stars from "./components/Stars";

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      photographs: [],
      uploading: true
    };

  }

componentDidMount(){
  this.findFlickrData("nebulas"); //Initial image display
}

findFlickrData = (query) => {
  axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${Config}&tags=${query}&safe_search=&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        photographs: response.data.photos.photo,
        uploading: false
      })
      //console.log(response.data.photos.photo[0]); //Testing123
      //console.log(query); //Testing123
    })
    .catch(error => {
      console.log(error);
    })
}
  render(){

    return (
      <BrowserRouter>
        <div className="container">
          <div className="sub-container">
            <h1 className="main-name">Galactic Gallery</h1>
            <SearchForm onSearch={this.findFlickrData} />
          </div>
          <Nav />
        </div>

        <Switch>
            <Route exact path="/" />
            <Route exact path="/sun" render={ () => <Sun title="Keep your face to the sun and you will never see the shadows" data={this.findFlickrData("Sun+rise+set") }/>} /> 
            <Route exact path="/moon" render={ () => <Moon title ="The Moon is Haunted..." data={this.findFlickrData("Moon+eclipse") }/>} /> 
            <Route exact path="/stars" render={ () => <Stars title ="Why would a star, a star ever be afraid of the dark?" data={this.findFlickrData("starry+night") }/>} /> 
            <Route component={Error404} />
          </Switch>
        
        <div className="main-content">

         {
           (this.state.uploading)
           ? <p>★Uploading Galaxy Gallery★</p>
           : <PhotoContainer data={this.state.photographs} />
         }          
        </div>

      </BrowserRouter>
     
    );
  }
}