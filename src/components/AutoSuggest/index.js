import React, {Component} from 'react';
import './suggests.css';
import {Link} from "react-router-dom";

class AutoSuggest extends Component {

    render(){
        const {suggests} = this.props;
        if(this.props.visible){
            return (
                <ul className='suggests-component'>
                    {suggests.map(item => (<Link key={item.id} to={`/TopMovies/${item.id}`} target="_blank">
                            <li className='suggests-component-item'>
                                <h5>{item.original_title}</h5>
                                <div>{item.release_date}</div>
                            </li>
                    </Link>)
                    )}
                </ul>
            )
        } else {
            return null
        }

    }
}

export default AutoSuggest;