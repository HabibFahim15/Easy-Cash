import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const Banner = () => {
  return (
    <Swiper
    spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay,Pagination, Navigation]}
        className="mySwiper my-4 md:my-8"
  >
    <SwiperSlide ><img className='w-auto h-[300px] md:w-[1450px] md:h-[650px]' src="https://c4.wallpaperflare.com/wallpaper/71/397/257/nature-full-size-desktop-7680x4320-wallpaper-preview.jpg" alt="" /></SwiperSlide>
    <SwiperSlide><img className='w-auto h-[300px] md:w-[1450px] md:h-[650px]' src="https://c4.wallpaperflare.com/wallpaper/856/564/920/nature-full-size-desktop-7680x4320-wallpaper-preview.jpg" alt="" /></SwiperSlide>
    <SwiperSlide><img className='w-auto h-[300px] md:w-[1450px] md:h-[650px]' src="https://c4.wallpaperflare.com/wallpaper/26/26/373/full-size-hd-nature-1920x1200-wallpaper-preview.jpg" alt="" /></SwiperSlide>
    <SwiperSlide><img className='w-auto h-[300px] md:w-[1450px] md:h-[650px]' src="https://wallpapers.com/images/hd/hd-nature-trees-on-grass-rwujzayqg8ip7kyy.jpg" alt="" /></SwiperSlide>
  </Swiper>
  );
};

export default Banner;