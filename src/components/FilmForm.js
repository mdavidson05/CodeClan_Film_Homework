import React, {useState} from "react";
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const FilmForm = ({onClickSubmit}) => {
    const handleClickSubmit = (event) => {
        setFilms(event.target.value)
    }

  const FollowLink = (event) => {
      event.preventDefault();
      // On click go to link


  }

  return (
    <form onClick={FollowLink}>
      <label htmlFor="click-link" >Click link</label>
      <input id="click-link" type="url" onClick={handleClickSubmit} value={link}/>
    </form>


  )

}

export default FilmForm;