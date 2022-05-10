import React from "react";
import Film from "./Film";

const FilmList = ({films}) => {

  const filmNodes = films.map(film => {
    return (
      <Film title={film.title} id={film.id}>{film.link}</Film>
    );
  });

  return(
    <ul>
    <>
    
      {filmNodes}
      
    </>
    </ul>
  )

}

export default FilmList;

