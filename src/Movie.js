import React from "react";
import propTypes from "prop-types";
import "./Movie.css";


function Movie({ id, year, title, summary, poster, genres, rating, runtime}) {
    return <div className="movie">
                <img src={poster} alt={title} title= {title}/>
                <div className="movie__data">
                    <span className="movie__title">{title}</span>
                        <div>
                            <span className="movie__year">{year}년</span>
                            <span className="movie__rating">{rating}점</span>
                            <span className="movie__runtime">{runtime}분</span>
                        </div>
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
    rating: propTypes.number.isRequired,
    runtime: propTypes.number.isRequired,
    poster: propTypes.string.isRequired,
    genres: propTypes.arrayOf(propTypes.string).isRequired
};

export default Movie;