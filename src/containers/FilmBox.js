import React, {useState} from "react";
import FilmList from "../components/FilmList";
// import {link} from 'react-router-dom';

const FilmBox = () => {

  const [films, setFilms] = useState(
    [
      {
        id: 1,  
        title: "Spiderman: Far Away from Home",
        link: "https://www.imdb.com/title/tt6320628"
      },
      {
        id: 2,  
        title: "Life Itself",
        link: 'https://www.imdb.com/title/tt5989218/?ref_=nv_sr_srsg_0'
      },
      {
        id: 3,  
        title: "Mary Queen of Scots",
        link: "https://www.imdb.com/title/tt2328900/?ref_=nv_sr_srsg_0"
      },
      {
        id: 4,  
        title: "The Lego Movie 2: The Second Part",
        link: "https://www.imdb.com/title/tt10804756/?ref_=fn_al_tt_1"
      },
      {
        id: 5,  
        title: "Captain Marvel",
        link: "https://www.imdb.com/title/tt4154664/?ref_=nv_sr_srsg_0"
      }
    ]
  )

    // }
  return (
    <>
      <h1>Films</h1>
      <ul>
      <FilmList films={films} />      
      </ul>
    </>
  );

}

export default FilmBox;