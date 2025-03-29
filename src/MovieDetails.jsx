import React from 'react';

const MovieDetails = ({ movie }) => {
  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <iframe
        title={movie.title}
        src={movie.trailerLink}
        frameBorder="0"
        allowFullScreen
      />
      <button onClick={() => window.history.back()}>Back to Home</button>
    </div>
  );
};

export default MovieDetails;