import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './MovieList';
import MovieCard from './MovieCard';
import Filter from './Filter';

const initialMovies = [
  {
    title: 'The Shawshank Redemption',
    description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
    rating: 9.2,
  },
  {
    title: 'The Godfather',
    description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    posterURL: 'https://m.media-amazon.com/images/I/81B3U3Rv+hL._AC_UF1000,1000_QL80_.jpg',
    rating: 9.2,
  },
  {
    title: 'The Dark Knight',
    description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
    rating: 9.0,
  },
];

const App = () => {
  const [movies, setMovies] = useState(initialMovies);
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: 0,
  });

  const handleAddMovie = () => {
    console.log('Adding new movie:', newMovie);
    setMovies((prevMovies) => [...prevMovies, newMovie]);
    console.log('Updated movies:', movies);
    setNewMovie({
      title: '',
      description: '',
      posterURL: '',
      rating: 0,
    });
  };

  const handleInputChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  const handleFilter = (filter) => {
    const filteredMovies = movies.filter((movie) => {
      return (
        movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
        movie.rating >= filter.rating
      );
    });
    setFilteredMovies(filteredMovies);
  };

  return (
    <div>
      <h1>Movie App</h1>
      <h2>Add New Movie</h2>
      <input
        type="text"
        name="title"
        value={newMovie.title}
        onChange={handleInputChange}
        placeholder="Title"
      />
      <input
        type="text"
        name="description"
        value={newMovie.description}
        onChange={handleInputChange}
        placeholder="Description"
      />
      <input
        type="text"
        name="posterURL"
        value={newMovie.posterURL}
        onChange={handleInputChange}
        placeholder="Poster URL"
      />
      <input
        type="number"
        name="rating"
        value={newMovie.rating}
        onChange={handleInputChange}
        placeholder="Rating"
      />
      <button onClick={handleAddMovie}>Add Movie</button>
      <Filter onFilter={handleFilter} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;