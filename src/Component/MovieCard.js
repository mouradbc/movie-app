import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ReactStars from 'react-rating-stars-component';
import {BrowserRouter, Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 160,
  },
});

const  MovieCard=({movieItem}) =>{
  
  const classes = useStyles();
  const {title,imgUrl,rate,description} = movieItem;
  

  return (
    <BrowserRouter>
      <div className="movieCard" >
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imgUrl}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <ReactStars
    count={5}
    value={Number(rate)}
    size={24}
    activeColor="#ffd700"
    edit = {false}
  />
    <a href="/movieDetails" >Show Movie details</a>
    </Card>
    
    </div>
    </BrowserRouter>
  );
}
export default MovieCard