import React from 'react';
import PropTypes from 'prop-types';
import "./Movie.css"

function Movie({year, rating, title, summary, poster}) {
    return (
        <div class="movie">
            <h1 class="movie__title"> {title} </h1>
            <img src={poster} alt={title} title={title}></img>
            <div class="movie__data">
                <ul>
                    <li class="movie__year">year: {year}</li>
                    <li class="movie__rating">rating: {rating} </li>
                </ul>
                <p class="movie__summary"> {summary} </p>
            </div>
        </div>
    );
}

Movie.propTypes = {
    year: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

export default Movie;