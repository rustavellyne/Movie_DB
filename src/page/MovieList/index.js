import React, {Component} from 'react';
import { Container, Row } from 'reactstrap';
import fetchEvents from '../../api/movies';
import spinner from '../../assets/Spinner.svg'
import MovieItem from '../../components/MovieItem'
class MovieList extends Component {

    state = {
        currentPage: 1,
        list: [],
    };

    componentDidMount(){
        fetchEvents(this.state.currentPage)
             .then(res => {
                 this.setState({
                     list: res.results
                 })
            })
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }

    fetchMoreData = () => {
        const{list, currentPage} = this.state;
        let page = currentPage + 1;

        fetchEvents(page)
                .then(res => {
                    if(res.results){
                        this.setState({
                            currentPage: page,
                            list: list.concat(res.results)
                        })
                    } else {

                        this.setState({
                            currentPage: currentPage,
                            list: [...list]
                        })
                    }

                })
    };




    handleScroll = (event) => {
        const w = window,
            d = document,
            e = d.documentElement,
            g = d.getElementsByTagName('body')[0],
            clientHeight = w.innerHeight|| e.clientHeight|| g.clientHeight;
        const scrollHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
        const scrollPosition = window.pageYOffset;

        if(scrollHeight-scrollPosition <= clientHeight*(1.3)){
            this.fetchMoreData()
        }

    };

    render(){
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
                <div className='spinner-wrapper'>
                    <img src={spinner} alt='img'/>
                </div>
            )
        }
    }
}

export default MovieList;