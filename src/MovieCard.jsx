import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div>
      <img src={movie.posterURL} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>Rating: {movie.rating}</p>
      <Link to={`/movies/${movie.title}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
};

export default MovieCard;