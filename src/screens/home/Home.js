import React from 'react';
import { Component } from "react";
import moviesData from '../../common/moviesData';
import Header from '../../common/header/Header.js';
import './Home.css';
import GridListUpcoming from './UpcomingMoviesGrid.js';
import GridListReleased from './ReleasedMoviesGrid.js';
import MovieFilter from './MovieFilter';
import genres from './genre';
import artists from './artists'



export default class Home extends Component{
    constructor(){
        super();
        this.state={moviesData}
    }
    render(){
          return (
            <div key="root-content">
                <Header></Header>

                <div key="upcoming-header-text" className="heading">
                    <span>Upcoming Movies</span>
                </div>

                {/*Calling the ImageList component to display upcoming Movies*/}
                <GridListUpcoming id="upcoming-movies-grid-list" moviesData={this.state.moviesData}/>

                <div key="released-movies-and-filter-container" className="flex-container">
                    <div id="released-movies-container" className="left">
                        {/*Calling the ImageList component to display released Movies*/}
                        <GridListReleased moviesData={this.state.moviesData} />
                    </div>
                    <div  id="filter-container" className="right">
                        {/*for movies filter*/}
                        <MovieFilter genres ={genres} artists={artists} />
                    </div>
               </div>
            </div>
          )
    };
}