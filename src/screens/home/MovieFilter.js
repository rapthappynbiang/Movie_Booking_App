import React from 'react';
import { Button, Card, CardContent, CardHeader, Checkbox, ListItemText, MenuItem } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import { Select } from '@material-ui/core'; 
import { FormHelperText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  cardheader: {
    minWidth: 240,
      maxWidth: 240,
      color: theme.palette.primary.light,
  },
   cardContent: {
      minWidth: 240,
      maxWidth: 240,
      justifyContent: 'center',
      border: theme.palette.unit,
    },
    content: {
      color: theme.palette.primary,
    }
  }));

export default function MovieFilter(props){
 const classes = useStyles();
 const [genreName, setGenreName] = React.useState([]);
 const [artistName, setArtistsName] = React.useState([]);

 const handleGenreChange = (event)=>{
   setGenreName(event.target.value);
 }

 const handleArtistsChange = (event)=>{
   setArtistsName(event.target.value);
 }

    return (
      <Card key="card-container" style={{height: 'fit-content', marginTop: '2%'}}>
         {/**Card heading */}
           <CardHeader key="card-header" id="card-header" className={classes.cardheader} title="FIND MOVIES BY:" />
             
            {/**Movie Name */}
           <CardContent key="movie-name" className={classes.cardContent}>
                <FormControl key={"1"}>
                    <InputLabel key="input-label-1" htmlFor="movie-name">Movie Name</InputLabel>
                    <Input type="text" id="movie-name" aria-describedby="my-helper-text" style={{width: '240px'}} />
                </FormControl>
            </CardContent>


             {/**Select Genres */}
            <CardContent key="movie-genre" className={classes.cardContent}>
                <FormControl key={"2"}>
                    <InputLabel key="input-label-2" htmlFor="genres">Genres</InputLabel>
                    <Select
                      labelId="genres"
                      id="select-genre"
                      multiple
                      style={{width: '240px'}}
                      value = {genreName}
                      onChange ={handleGenreChange}
                      renderValue={(selected)=> selected.join(', ')}
                    >
                        {props.genres.map((genre)=>(
                           <MenuItem Key={"genre-menu-item-"+genre.id} value={genre.name} >
                              <Checkbox key={"checkbox-item-"+genre.id} checked={genreName.indexOf(genre.name) > -1}/>
                             <ListItemText key={"genre-list-item-"+genre.id} primary={genre.name} />
                           </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </CardContent>


            {/**Select Artists */}
            <CardContent key="movie-artists" className={classes.cardContent}>
                <FormControl key={"form-control-3"}>
                    <InputLabel key="input-label-3" htmlFor="artists">Artists</InputLabel>
                    <Select
                      labelId="artists"
                      id="select-artists"
                      multiple
                      style={{width: '240px'}}
                      value = {artistName}
                      onChange ={handleArtistsChange}
                      renderValue={(selected) => selected.join(', ')}
                    >
                        {props.artists.map((artist)=>(
                           <MenuItem Key={"menu-item-"+artist["id"]} value={artist["first_name"] + " " + artist["last_name"]} >
                              <Checkbox key={"check-box-item-"+artist.id} checked={artistName.indexOf(artist["first_name"]+" "+artist["last_name"]) > -1}/>
                             <ListItemText key={"item-"+artist.id} primary={artist["first_name"] + " " + artist["last_name"]} />
                           </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </CardContent>

             {/**Start date */}
            <CardContent key="movie-start-date" className={classes.cardContent}>
                <FormControl key={"form-control-4"}>
                    <FormHelperText>Release date start</FormHelperText>
                    <InputLabel key="input-label-4" htmlFor="start-date"></InputLabel>
                    <Input type="date" id="start-date" aria-describedby="my-helper-text" style={{width: '240px'}} />
                </FormControl>
            </CardContent>

            {/**End Date */}
            <CardContent key="movie-end-date" className={classes.cardContent}>
                <FormControl key={"form-control-5"}>
                    <FormHelperText>Release date end</FormHelperText>
                    <InputLabel key="input-label-5" htmlFor="end-date"></InputLabel>
                    <Input type="date" id="end-date" aria-describedby="my-helper-text" style={{width: '240px'}} />
                </FormControl>
            </CardContent>

          {/**Apply button */}
           <CardContent key="filter-button" className={classes.cardContent} style={{justifyContent: 'center'}}>
                <Button variant='contained' color='primary' style={{width: 240}} onClick={()=>{/**Apply Fliters */}}>
                   <span style={{color: 'white'}}>Apply</span>
                </Button>
           </CardContent>
       </Card>
    );
}