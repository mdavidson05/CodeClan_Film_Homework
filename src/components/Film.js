import React from "react";
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const Film = ({title, children}) => {

  return(
      
    <>
    <ul>
      <h4>{children}</h4>
      {/* <Link to = {children}>Click Link</Link> */}
      <p>{title}</p>
      </ul>
    </>
  )

}

export default Film;

