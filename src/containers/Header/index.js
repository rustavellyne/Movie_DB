import React, {Component} from 'react';
import logo from './logo.svg';
import './header.css';
import {fetchSearchData} from '../../api/movies'

import {
    Collapse,
    Container,
    InputGroup,
    Input,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    } from 'reactstrap';
import {Link} from "react-router-dom";
import AutoSuggest from "../../components/AutoSuggest";


class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            inputText: "",
            searchResults: [],
            isVisible: false
        };
    }


    componentDidMount(){

        window.addEventListener('click', this.closeSuggest);
    }

    componentWillUnmount(){
        window.removeEventListener('click', this.closeSuggest);
    }

    closeSuggest = () => {

            this.setState({
                isVisible: false,
                inputText: ""
            })

    };

    onChange = (event) => {
        const query = event.target.value;
          if(query){
            fetchSearchData(query)
                .then(res=>{
                    console.log('queryfrom event', query);
                    this.setState({
                        searchResults: res.results,
                        isVisible: true
                    })
                })
        } else {
            console.log('clear string');
            this.setState({
                isVisible: false
            })
        }
    };


    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }



    render() {
        return (
                <Navbar light expand="md" className='navbar-dark bg-dark' style={{position: 'fixed',zIndex: 99, width: '100vw' }}>
                    <Container>
                        <NavbarBrand className="col-4 col-sm-4 col-md-2">
                            <img src={logo} alt="TMDB" />
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <Link  to='/TopMovies' className='nav-link links'>
                                        Popular
                                    </Link>
                                </NavItem>
                                {/*<NavItem>*/}
                                    {/*<Link  to="/TopMovies" className='nav-link links'>*/}
                                        {/*Pagination*/}
                                    {/*</Link>*/}

                                {/*</NavItem>*/}

                            </Nav>
                            <InputGroup className="ml-auto col-sm-12 col-md-8">
                                {/*<InputGroupAddon addonType="prepend">@</InputGroupAddon>*/}
                                <AutoSuggest suggests={this.state.searchResults} visible={this.state.isVisible}/>
                                <Input placeholder="Search..." onChange={this.onChange}/>

                            </InputGroup>
                        </Collapse>
                    </Container>
                </Navbar>
        );
    }
}

export default Header;