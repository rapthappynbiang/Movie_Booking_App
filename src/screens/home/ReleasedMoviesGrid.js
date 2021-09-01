import React from 'react';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';

//released movie grid component
export default function GridListReleased(props){

    return (
      <div style={{marginLeft: '2%'}}>
         <ImageList cols={4} style={{flexWrap: 'wrap'}}>
            {props.moviesData.map((movie) => (
              <ImageListItem key={"movie-item"+movie.id} className="movie-item" style={{height: 350, margin: '2% 1% 0%'}}>
                <img src={movie.poster_url} alt={movie.title} onClick={()=>{
                  //redirect to detail.page
                }}/>
                   <ImageListItemBar
                     title={movie.title}
                     subtitle={<span>Released date:{(()=>{
                                                      debugger;
                                                      var releasedDate = movie.release_date.substr(0,10).split("-");
                                                      return releasedDate[2] + "/" + releasedDate[1] + "/" + releasedDate[0];
                                                    })()}
                               </span>}
                    />
              </ImageListItem>
            ))}
          </ImageList>
      </div>
    );
}