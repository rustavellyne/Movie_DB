import React, {Component} from 'react';
import { Container, Row } from 'reactstrap';
import fetchEvents from '../../api/movies';
import spinner from '../../assets/Spinner.svg'
import MovieItem from '../../components/MovieItem'
class MovieList extends Component {

    state = {
        list: [],
    };

    componentDidMount(){
        fetchEvents()
             .then(res => {
                 this.setState({
                     list: res.results
                 })
            })
    }

    render(){
        console.log(this.state.list);
        const {list} = this.state;
        if (this.state.list.length) {
        return (
            <Container style={{padding: '120px 0'}}>
                <Row className='justify-content-center'>
                    {list.map(item=> (<MovieItem key ={item.id} data = {item}/>))}
                </Row>
            </Container>
        )
    } else {
            return (
                <div>
                    <img src={spinner} alt='img'/>
                </div>
            )
        }
    }
}

export default MovieList;