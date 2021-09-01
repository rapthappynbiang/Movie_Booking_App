import React from 'react';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';

//upcoming movies grid component
  export default function GridListUpcoming(props) {

    return (
      <div>
        <ImageList cols={5} style={{flexWrap: 'nowrap'}}>
          {props.moviesData.map((movie) => (
            <ImageListItem key={movie.id} style={{height: 250}}>
              <img src={movie.poster_url} alt={movie.title} />
              <ImageListItemBar
                title={movie.title}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    );
  }
