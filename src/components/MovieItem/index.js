import React, {Component} from 'react';
import './movieItem.css'
import {Link} from "react-router-dom";
import noPoster from '../../assets/poster_none.png'

class MovieList extends Component {

    render(){
        const { data } = this.props;
        const IMG_URL = data.poster_path ?
            `https://image.tmdb.org/t/p/w500${data.poster_path}` :
            `${noPoster}`;

        return (
            <div className="col-12 col-sm-12 col-md-9 col-lg-6">
                <div className="card movie-card">
                    <div className="row no-gutters">
                        <div className="col-12 col-sm-4 col-md-4 col-lg-5 col-xl-4">
                            <Link to={`/TopMovies/${data.id}`} target="_blank">
                                <div className='poster-list'>
                                    <img className="card-img-top" src={IMG_URL} alt="cards"/>
                                </div>
                            </Link>
                        </div>
                        <div className="col-12 col-sm-8 col-md-8 col-lg-7 col-xl-8 d-flex flex-column justify-content-around">
                            <div className="card-body">
                                <h5 className="card-title">{data.original_title}</h5>
                                <p className="card-text">{data.overview}</p>
                            </div>
                            <div className="card-footer text-muted">
                                <Link to={`/TopMovies/${data.id}`} target="_blank" className="btn btn-primary">More Info</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default MovieList;


