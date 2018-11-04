import React, {Component} from 'react';
import StarRatings from 'react-star-ratings';

class Rate extends Component {

    render() {
        const {rate} = this.props;
        return (
            <StarRatings
                rating={rate}
                starDimension="25px"
                starSpacing="0px"
                starRatedColor='rgb(1, 210, 119)'
                numberOfStars={10}
            />
        );
    }
}

export default Rate;