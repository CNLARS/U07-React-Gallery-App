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
  // this.findFlickrData();
}

componentDidUpdate(prevProps) {
  console.log("componentDidUpdate");
}


findFlickrData = (query) => {
  axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${Config}&tags=${query}&safe_search=&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        photographs: response.data.photos.photo,
        uploading: false
      })
      //console.log(response.data.photos.photo[0]); //Testing123
      console.log("Testing123"); //Testing123
    })
    .catch(error => {
      console.log(error);
    })
}

  render(){
    // let inquiry = this.props.match.params.query;
    return (
      <BrowserRouter>
        <div className="container">
          <div className="sub-container">
            <h1 className="main-name">★ Galactic Gallery ★</h1>
            <SearchForm onSearch={this.findFlickrData} />
          </div>
          <Nav />
        </div>
        
        <div className="main-content">

            <Switch>
              <Route exact path="/" />
              <Route exact path="/sun" component={Sun} /> 
                {/* data={this.findFlickrData("Sun+rise+set") } */}
              <Route exact path="/moon" component={Moon} />
                {/* data={this.findFlickrData("Moon+eclipse") } */}
              <Route exact path="/stars" component={Stars} />
                {/* data={this.findFlickrData("starry+night") } */}
              <Route path="/search-results/:inquiry" render= { () => <PhotoContainer data={this.state.photographs} /> } />
              <Route component={Error404} />
            </Switch>
         
         {
           (this.state.uploading)
           ? <p>★Uploading Galaxy★</p>
           : <PhotoContainer data={this.state.photographs} />
         }          
        </div>

      </BrowserRouter>
     
    );
  }
}