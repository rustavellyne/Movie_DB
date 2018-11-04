import React, {Component} from 'react';
import logo from './logo.svg';
import './header.css';
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

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (

                <Navbar light expand="md" className='navbar-dark bg-dark' style={{position: 'fixed',zIndex: 99, width: '100vw' }}>
                    <Container>
                        <NavbarBrand href="/" className="col-4 col-sm-4 col-md-2">
                            <img src={logo} alt="TMDB" />
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <Link  to="/Movies" className='nav-link links'>
                                        Infinity
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link  to="/Movies" className='nav-link links'>
                                        Pagination
                                    </Link>

                                </NavItem>

                            </Nav>
                            <InputGroup className="ml-auto col-sm-12 col-md-8">
                                {/*<InputGroupAddon addonType="prepend">@</InputGroupAddon>*/}
                                <Input placeholder="Search..." />
                            </InputGroup>
                        </Collapse>
                    </Container>
                </Navbar>
        );
    }
}

export default Header;