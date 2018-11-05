import React, {Component} from 'react';
import Swiper from 'react-id-swiper';
import RelatedMovieItem from "../../components/RelatedMovieItem";
import StarRatings from 'react-star-ratings';
import noPoster from '../../assets/poster_none.png'

class RelatedSlider extends Component {
    render() {
        const {data} = this.props;
        console.log('dataRelatedArray===', data);



        // const IMG_URL = poster_path ?
        //     `https://image.tmdb.org/t/p/w500${poster_path}` :
        //     `${noPoster}`;

        const params = {
            slidesPerView: 3,
            spaceBetween: 30,
            rebuildOnUpdate: true,
            slidesPerGroup: 3,
            loop: true,
            loopFillGroupWithBlank: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        };
        return (
            <Swiper {...params}>

                {data.map(item=>{
                    return(
                         <div>
                            <RelatedMovieItem data={item} key={item.id}/>
                         </div>

                    )
                })}
            </Swiper>
        )
    }
}

export default RelatedSlider;