import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import AlbumCard from '../AlbumCard/AlbumCard';
import { SwiperButtonNext, SwiperButtonPrev } from '../SwiperNavigation/SwiperNavigation';
import styles from './CustomCarousel.module.css';


const CustomCarousel = ({ data, isAlbum, handleSongClick }) => {
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const handleSwipe = (swiper) => {
        setIsBeginning(swiper.isBeginning)
        setIsEnd(swiper.isEnd)
    }

    return (
        <Swiper onActiveIndexChange={handleSwipe} modules={[Navigation]} className='mySwiper' slidesPerView={1}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
                1024: {
                    slidesPerView: 6,
                    spaceBetween: 10,
                },
            }}>

            {data.map((item) => {
                return (
                    <SwiperSlide key={item.id} className={styles.swiperSlide} onClick={() => { if (!isAlbum) handleSongClick(item.id) }} >
                        <AlbumCard title={item.title} imgSrc={item.image} count={isAlbum ? item.follows : item.likes} isAlbum={isAlbum} />
                    </SwiperSlide>)
            })}

            {isBeginning ? <></> : <SwiperButtonPrev className={styles.btnLeft} />}
            {isEnd ? <></> : <SwiperButtonNext className={styles.btnRight} />}
        </Swiper>
    )
}

export default CustomCarousel; 