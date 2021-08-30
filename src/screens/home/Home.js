import React from 'react';
import { Component } from "react";
import moviesData from '../../common/moviesData';
import Header from '../../common/header/Header.js';
import './Home.css';
import GridListUpcoming from './UpcomingMoviesGrid.js';
import GridListReleased from './ReleasedMoviesGrid.js'



export default class Home extends Component{
    constructor(){
        super();
        this.state={moviesData}
    }
    render(){
          return (
              <div>
                  <Header></Header>
                  <div className="heading">
                     <span>Upcoming Movies</span>
                  </div>
                    {/*Calling the ImageList component to display Upcoming Movies*/}
                    <GridListUpcoming moviesData={this.state.moviesData}/>
                    <div className="flex-container">
                        <div className="left">
                           <GridListReleased moviesData={this.state.moviesData} />
                        </div>
                    </div>
              </div>
          )
    }
}