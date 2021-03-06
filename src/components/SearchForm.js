import React, { Component } from "react";
import { withRouter } from "react-router";

export default class SearchForm extends Component {

    state = {
        topic: ""
    }
//Updates state topic with user input
    searchReq = e => {
        this.setState({ topic: e.target.value });
    }
//Sends a search request and resets input
    searchIMG = e => {
        e.preventDefault();
        this.props.onSearch(this.query.value);
            let inquiry = this.query.value;
            let path = `search-results/${inquiry}`;
        // this.props.history.push(path);
        e.currentTarget.reset();
            console.log(path); //Testing123
    }
    
    render(){
            const { match, location, history } = this.props;
            console.log(this.props); //Testing123
        return (
        <form className="search-form" onSubmit={this.searchIMG} >
            <input 
                type="search" 
                onChange={this.searchReq}
                name="search"
                ref={ (input) => this.query = input } 
                placeholder="Search" 
            required />
            <button type="submit" className="search-button">
            <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
            </button>
        </form>
        );
    }
}