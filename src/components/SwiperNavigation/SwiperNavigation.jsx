import { useSwiper } from "swiper/react";
import { ReactComponent as ButtonPrev } from '../../assets/carousel-btn-prev.svg';
import { ReactComponent as ButtonNext } from '../../assets/carousel-btn-next.svg';


const SwiperButtonPrev = (props) => {
    const swiper = useSwiper();

    return <ButtonPrev onClick={() => swiper.slidePrev()} {...props} />
}

const SwiperButtonNext = (props) => {
    const swiper = useSwiper();

    return <ButtonNext onClick={() => { swiper.slideNext() }} {...props} />
}


export { SwiperButtonPrev, SwiperButtonNext };