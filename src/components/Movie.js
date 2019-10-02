import React from "react";

const Movie = ({title, rating, date, runtime, synopsis}) => {
	return(
    <div className='movie'>
     {title}
     <h4>Runtime: </h4>{runtime}
     <h4>Date: </h4>{date}
     <h4>Rating: </h4>{rating}
     <h4>Synopsis: </h4>{synopsis}
    </div>
  )
};

export default Movie;