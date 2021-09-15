import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { InputBase } from '@material-ui/core';

import { FaSistrix } from "react-icons/fa";


const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

 const SearchWord=({setSearchInput}) =>{
  const classes = useStyles();

  
  
  return (
    <Paper component="form" className={classes.root}>
      
      <InputBase
        className={classes.input}
        placeholder="Search a Movie"
        name="search"
        onChange={(e)=>setSearchInput(e.target.value)}
      />
      
        <FaSistrix/>
      
      
 
    </Paper>
  );
}
export default SearchWord