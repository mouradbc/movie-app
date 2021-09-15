import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { TextField } from '@material-ui/core';
import { FaPlusCircle } from "react-icons/fa";
function getModalStyle() {
    const top = 50 ;
    const left = 50 ;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  

const AddMovie = ({setNewMovie,newMovie,setMovieList,movieList}) => {
    const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInput = (e) => {
    e.preventDefault()
    setNewMovie({...newMovie,[e.target.name]:e.target.value})
  }
  

  const handleNewMovie = (e) => {
    
    setMovieList([...movieList,newMovie])
    handleClose()
  }
  
  

  

  return (
    <div>
      <button className="add-btn" type="button" onClick={handleOpen}>
      <FaPlusCircle/>
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
        <TextField name="title" type="text" placeholder="Movie Name"onChange={handleInput}/><br/>
        <TextField name="imgUrl" type="text" placeholder="Poster Url"onChange={handleInput}/><br/>
        <input name="rate"style={{border:"none"}}onChange={handleInput} type="number"min="0" max="5" placeholder="rate"/><br/>
        <TextField name="description" type="text"onChange={handleInput} placeholder="Description"/><br/>
        <button className="cnl-btn"onClick={handleClose} >Cancel</button>
        <button className="add" onClick={handleNewMovie}>Add</button>
      </div>
      </Modal>
    </div>
  );
}


export default AddMovie
