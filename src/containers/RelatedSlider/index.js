import React, {Component} from 'react';
import Swiper from 'react-id-swiper';
import RelatedMovieItem from "../../components/RelatedMovieItem";


class RelatedSlider extends Component {
    render() {
        const {data} = this.props;
        console.log('dataRelatedArray===', data);



        // const IMG_URL = poster_path ?
        //     `https://image.tmdb.org/t/p/w500${poster_path}` :
        //     `${noPoster}`;

        const params = {
            slidesPerView: 5,
            spaceBetween: 5,
            rebuildOnUpdate: true,
            slidesPerGroup: 2,
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