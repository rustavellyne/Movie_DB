import React, {Component} from 'react';
import {Container, Row, Button, Col} from 'reactstrap';
import {fetchMovieData, fetchRelatedMovies} from "../../api/movies";
import spinner from '../../assets/Spinner.svg'
import noPoster from '../../assets/poster_none.png'
import './MoviePage.css'
import Rate from "../../components/Rate";
import RelatedSlider from "../../containers/RelatedSlider";

class MoviePage extends Component {
    state = {
        data: {},
        relatedData: []
    };

    componentDidMount () {
        fetchMovieData(this.props.match.params.id).then(
            res => {
                this.setState({
                    data: res
                })
            }
        );
        fetchRelatedMovies(this.props.match.params.id).then(
            res=> {
                this.setState({
                    relatedData: res.results
                })
            }
        )
    }

    render(){
        const {
            backdrop_path,
            original_title,
            tagline,
            overview,
            poster_path,
            vote_average,
            genres
        } = this.state.data;

        const IMG_URL = poster_path ?
            `https://image.tmdb.org/t/p/w500${poster_path}` :
            `${noPoster}`;


        const BG_IMAGE_URL = backdrop_path ?
            `https://image.tmdb.org/t/p/original${backdrop_path}` :
            `${noPoster}`;

        if(Object.keys(this.state.data).length){
        return (
            <Container-fluid>
                <div className="movieItem-wrapper" style={{backgroundImage: `url(${BG_IMAGE_URL})`}}>
                    <div className="overflow"/>
                    <Container>
                        <Row style={{padding:'0 15px'}} className="align-items">
                            <div className="col-12 col-sm-5 col-md-5 col-lg-4">
                                <img src={IMG_URL} alt="poster FILM" width='100%'/>
                            </div>
                            <div className="col-12 col-sm-5 col-md-5 col-lg-4 film-info-wrapper">
                                <div className="row no-gutters">
                                    <h2 className="original-title">{original_title}</h2>
                                    <span className="tagline col-12">{tagline}</span>
                                    <Rate rate={vote_average}/>
                                    <div className="col-12 overview">
                                        <h3>Overview</h3>
                                        <p>{overview}</p>
                                    </div>

                                    <div>
                                        {genres.map(item=><Button outline color="success" className="testClass" key={item.id}>{item.name}</Button>)}
                                    </div>


                                </div>


                            </div>
                        </Row>
                    </Container>
                </div>
                <Row noGutters>
                    <Col className='slider-wrapper'>
                        <h4>Related Movies</h4>
                        <RelatedSlider data={this.state.relatedData}/>
                    </Col>
                </Row>
            </Container-fluid>

        )} else {
            return (
                <div className='spinner-wrapper'>
                    <img src={spinner} alt='img'/>
                </div>
            )
        }


    }
}

export default MoviePage;