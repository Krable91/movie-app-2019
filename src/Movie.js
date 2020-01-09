import React from "react";
import propTypes from "prop-types";
import "./Movie.css";

function Movie({ id, year, title, summary, poster, genres}) {
    return <div className="movie">
        <img src={poster} alt={title} title= {title}/>
        <div className="movie__data">
            <span className="movie__title">{title}</span>
            <span className="movie__year">{year}</span>
            <ul className="genres">
                {genres.map((genre, index) => (
                    <li key={index} className="genres__genre">{genre}</li>
            ))}
            </ul>
            <p className="movie__summary">{summary}</p>
        </div>
    </div>
}

Movie.propTypes = {
    id: propTypes.number.isRequired,
    year: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
    genres: propTypes.arrayOf(propTypes.string).isRequired
};

export default Movie;