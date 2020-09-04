import React from 'react';
import PropTypes from 'prop-types';
import "./Movie.css"

function Movie({year, rating, title, summary, poster, genres}) {
    return (
        <div className="movie">
            <h1 className="movie__title"> {title} </h1>
            <img src={poster} alt={title} title={title}></img>
            <div className="movie__data">
                <h3 className="movie__year">{year}</h3>
                <h5 className="movie__rating">rating: {rating} </h5>
                {/* genre라는 또다른 component 생성: 필요는 없지만 실습을 위해 만들어보기. 우리는  ul을 만들어보자. */}
                <ul className="genres">
                    {/* map 함수는 인덱스도 전달해줘 (이름은 임의로 사용) */}
                    {genres.map((genre, index) => <li key={index} className="genres__genre">{genre}</li> )}
                </ul>
                <h5 className="movie__summary"> {summary} </h5>

            </div>
        </div>
    );
}

Movie.propTypes = {
    year: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;