import React from "react";
import { directors } from "../data";

function Directors() {
  const directorslist=directors.map((director)=>(
    <div key={director.name}>
      <p>{director.name}</p>
      <ul>
        {director.movies.map((movie)=>(
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
  ))
  return(
    <div>
      <h1>Directors Page</h1>
      {directorslist}
    </div>
  )
}

export default Directors;
