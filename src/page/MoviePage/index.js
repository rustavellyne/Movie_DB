import React, {Component} from 'react';
import {Container, Row, Button} from 'reactstrap';
import {fetchEventData} from "../../api/movies";
import spinner from '../../assets/Spinner.svg'
import './MoviePage.css'
import Rate from "../../components/Rate";

class MoviePage extends Component {
    state = {
        data: {}
    };

    componentDidMount () {
        fetchEventData(this.props.match.params.id).then(
            res => {
                this.setState({
                    data: res
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
            release_date,
            vote_average,
            budget,
            genres
        } = this.state.data;

        const IMG_URL = poster_path ?
            `https://image.tmdb.org/t/p/w500${poster_path}` :
            `/img/no-poster.jpg`;
        console.log(genres);

        const BG_IMAGE_URL = backdrop_path ?
            `https://image.tmdb.org/t/p/original${backdrop_path}` :
            `/img/no-poster.jpg`;

        if(Object.keys(this.state.data).length){
        return (
            <div className="movieItem-wrapper" style={{backgroundImage: `url(${BG_IMAGE_URL})`}}>
                <div className="overflow"/>
                <Container>
                    <Row style={{padding:'0 15px'}}>
                        <div className="col-5 col-lg-4">
                            <img src={IMG_URL} alt="poster FILM" width='100%'/>
                        </div>
                        <div className="col-7">
                            <h2>{original_title}</h2>
                            <span className="tagline">{tagline}</span>
                            <Rate rate={vote_average}/>
                            <div className="col-12">
                                <h3>Overview</h3>
                                <p className="overview">{overview}</p>
                            </div>

                            <div>
                                {genres.map(item=><Button outline color="success" key={item.id}>{item.name}</Button>)}
                            </div>


                        </div>
                    </Row>
                </Container>
            </div>
        )} else {
            return (
                <div>
                    <img src={spinner} alt='img'/>
                </div>
            )
        }


    }
}

export default MoviePage;