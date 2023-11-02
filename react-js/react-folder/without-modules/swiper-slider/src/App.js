// import Swiper core and required modules
import { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

function App() {
  return (
    <>
    {/*
      https://swiperjs.com/react
    */}
      <Swiper modules={[Navigation, Autoplay]} autoplay={true} spaceBetween={30} slidesPerView={3} navigation breakpoints={
          {
              0: {slidesPerView: 1},
              576: {slidesPerView: 2},
              992: {slidesPerView: 3}
          }
      }>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </>
  );
}

export default App;
