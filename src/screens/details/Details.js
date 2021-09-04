import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import { Typography } from '@material-ui/core';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import StarBorderIcon from '@material-ui/icons/StarBorder'; 
import YouTube from 'react-youtube';
import Header from '../../common/header/Header'
import './Details.css';
import Home from '../home/Home.js';

export  default class Details extends Component{

    state = {
             title: this.props.movie.title, 
             genres: this.props.movie.genres,
             duration: this.props.movie.duration,
             release_date: this.props.movie.release_date,
             rating: this.props.movie.critics_rating,
             poster_url: this.props.movie.poster_url,
             wiki_url: this.props.movie.wiki_url,
             trailer_url: this.props.movie.trailer_url,
             story_line: this.props.movie.storyline,
             artists: this.props.movie.artists
            }

     render() {
         //for YouTube video tag
        const opts = {
            height: '390',
            width: '100%',
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: 1,
            },
          };
         return(
            <Fragment>
                 <Header />
                 <div id="content-main-container">
                    <div>
                        <Typography className="back-home-btn" variant="button" style={{margin: '8px 0px 0px 24px', height: '24px'}} onClick={this.backToHomeHandler}>
                            &lt; Back to home
                        </Typography>            
                    </div>
                    <div id="movie-details-container">

                        {/**-------------Movie Image ---------------------*/}
                        <div id="left">
                            <img src={this.props.movie.poster_url}  alt={this.props.title} style={{width: '80%'}}/>
                        </div>

                        {/**-------------Movie details with trailer---------------------*/}
                        <div id="middle">
                            <Typography variant="h2" style={{display: 'block'}}>
                            {this.state.title}
                            </Typography>
                            
                            <Typography variant="subtitle1" style={{display: 'block'}}>
                            <b>Genres:</b> {(()=>{
                                let genresStr = this.state.genres[0];
                                for(let i=1;i<this.state.genres.length;i++){
                                    if(i===this.state.genres.length-1){
                                        //last element in genres array
                                        genresStr = genresStr + ", " + this.state.genres[i];
                                    }else{
                                        genresStr = genresStr + ", " + this.state.genres[i];
                                    }
                                }
                                return genresStr;
                            })()} 
                            </Typography>
                            
                            <Typography variant="subtitle1" style={{display: 'block'}}>
                            <b>Duration:</b> {this.state.duration}  
                            </Typography>
                            
                            <Typography variant="subtitle1" style={{display: 'block'}}>
                            <b>Release Date:</b> {this.formatDateString(this.state.release_date)}
                            </Typography>
                            
                            <Typography variant="subtitle1" style={{display: 'block'}}>
                            <b>Rating:</b> {this.state.rating}
                            </Typography>
                            
                            <Typography variant="subtitle1" style={{display: 'block', marginTop: '16px'}}>
                            <b>Plot:</b> <a href={this.state.wiki_url} target="_blank" style={{textDecorationLine: 'none'}}>(Wiki link)</a> {this.state.story_line}
                            </Typography>
                            
                            <Typography variant="h5" style={{display: 'block', marginTop: '16px'}}>
                            <b>Trailer:</b>
                            </Typography>
                            
                            <div className="video-container">
                            <YouTube videoId={this.state.trailer_url.split('=')[1]} style={{width: '90%'}} opts={opts} onReady={this._onReady}/>
                            </div>
                        </div>

                        {/**-------------Movie Rating and artists---------------------*/}
                        <div id="right">
                            <div id="right-inner-container">
                                <Typography variant="subtitle1">
                                   <b>Rate this movie:</b> 
                                </Typography>
                                {/**THE STARS RATINGS */}
                                <Typography variant="button" className="star-icon" onClick={()=>{this.setStarRatings(1)}}>
                                    <StarBorderIcon  />
                                </Typography >
                                <Typography variant="button" className="star-icon" onClick={()=>{this.setStarRatings(2)}}>
                                    <StarBorderIcon  />
                                </Typography >
                                <Typography variant="button" className="star-icon" onClick={()=>{this.setStarRatings(3)}}>
                                    <StarBorderIcon  />
                                </Typography >
                                <Typography variant="button" className="star-icon" onClick={()=>{this.setStarRatings(4)}}>
                                    <StarBorderIcon  />
                                </Typography >
                                <Typography variant="button" className="star-icon" onClick={()=>{this.setStarRatings(5)}}>
                                    <StarBorderIcon  />
                                </Typography >
                                <input id="star-rating-value" type="number" value={0} style={{display: 'none'}}/>

                                {/**-------------Artists Images---------------------*/}
                                <div id="artists-container">
                                    <Typography variant="subtitle1">
                                        <b>Artists:</b>
                                    </Typography>
                                    <ImageList cols={2}>
                                        {this.state.artists.map((artist)=>(
                                            <ImageListItem key={artist.id}>
                                                <img id={"image-"+artist.id} src={artist.profile_url} alt={artist.firs_name}/>
                                                <ImageListItemBar key={"artist-name-"+artist.id} title={artist.first_name + " " + artist.last_name} />
                                            </ImageListItem>
                                        ))}
                                    </ImageList>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </Fragment>
         );
     }

     backToHomeHandler(){
        //redirect to home page
        ReactDOM.render(
            <Home />,
            document.getElementById('root')
        );
    }

     _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }

      formatDateString(release_date){
        var releasedDate = release_date.substr(0,10).split("-");
        return releasedDate[2] + "/" + releasedDate[1] + "/" + releasedDate[0];
    }

      setStarRatings(value){
          //set input value as value for submitting rating value
       document.getElementById('star-rating-value').value = value;
        var starIconsList = document.getElementsByClassName("star-icon");

        //set the color of stars selected
        for(let i=0;i<5;i++){
            if(i<value){
                //color orange for the number of stars selected
                starIconsList[i].style.color = "orange";
            }else{
                //make the rest black
                starIconsList[i].style.color = "black";
            }
        }
    }
}