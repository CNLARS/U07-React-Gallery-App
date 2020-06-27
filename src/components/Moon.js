import React, {Component} from "react";
//Data & Key to Access Flickr
import Config from "./Config";
import axios from "axios";

import PhotoContainer from './PhotoContainer';

export default class Stars extends Component{
  constructor(){
    super();
    this.state = {
      lunar: [],
      uploading: true
    };
  }

componentDidMount(){
  this.findFlickrData("Moon+eclipse"); //Initial image display
}

findFlickrData = (query) => {
  axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${Config}&tags=${query}&safe_search=&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        lunar: response.data.photos.photo,
        uploading: false
      })
      console.log("Over the Moon"); //Testing123
    })
    .catch(error => {
      console.log(error);
    })
}

  render(){
    return (
        <div>
        <h2>"In the name of the moon..."</h2>    
         {
           (this.state.uploading)
           ? <p>★Uploading Galaxy★</p>
           : <PhotoContainer data={this.state.lunar} />
         }          
        </div>
    );
  }
}