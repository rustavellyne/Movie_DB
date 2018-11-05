import React, {Component} from 'react';
import StarRatings from 'react-star-ratings';
import noPoster from '../../assets/poster_none.png';
import './RelatedMovieItem.css'
import {Link} from "react-router-dom";

class RelatedMovieItem extends Component {
    render(){
        console.log("props of relatedMovieItem===",this.props.data);
        const {original_title,vote_average,poster_path, id} = this.props.data;

        const IMG_URL = poster_path ?
            `https://image.tmdb.org/t/p/w500${poster_path}` :
            `${noPoster}`;



        return (
            <div className='related-movie-item-wrapper'>
                <Link to={`/TopMovies/${id}`} target="_blank"><img src={IMG_URL} alt="movie-poster"/></Link>
                <h5>{original_title}</h5>
                <span>{vote_average}</span>
                <StarRatings
                    rating={vote_average}
                    starDimension="25px"
                    starSpacing="0px"
                    starRatedColor='rgb(1, 210, 119)'
                    numberOfStars={1}
                />
            </div>
        )
    }
}

export default RelatedMovieItem;