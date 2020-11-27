import React from "react";
import PropTypes from "prop-types";
import "./movie.css";

function Movie({ id, title, year, genres, summary, poster }) {
  return (
    <div className="movie">
      <img src={poster} alt={title}></img>
      <div className="movieData">
        <h3 className="movieTitle">{title}</h3>
        <h5 className="movieYear">{year}</h5>
        <ul className="movieGenres">
          {genres.map((genre, index) => (
            <li key={index}>{genre}</li>
          ))}
        </ul>
        <p className="movieSummary">{summary.slice(0, 180)}</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
