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
    <SwiperSlide><img className='w-auto h-[300px] md:w-[1450px] md:h-[650px]' src="https://media.licdn.com/dms/image/D5612AQG2WCRI1sERxw/article-cover_image-shrink_720_1280/0/1697442444538?e=2147483647&v=beta&t=JkFu01LM9pB0vYKzBc4qjSNKe-ENP_gFQ84HGkmcEBQ" alt="" /></SwiperSlide>
    <SwiperSlide ><img className='w-auto h-[300px] md:w-[1450px] md:h-[650px]' src="https://img.freepik.com/free-photo/african-american-man-paying-with-credit-card-online-while-making-orders-via-mobile-internet-making-transaction-using-mobile-bank-application_231208-743.jpg" alt="" /></SwiperSlide>
    <SwiperSlide><img className='w-auto h-[300px] md:w-[1450px] md:h-[650px]' src="https://img.lovepik.com/bg/20240315/Enhanced-Mobile-Banking-3D-Render-of-Smartphone-Screen-Showcasing-Financial_4052065_wh1200.jpg" alt="" /></SwiperSlide>
    <SwiperSlide><img className='w-auto h-[300px] md:w-[1450px] md:h-[650px]' src="https://www.troygroup.com/hs-fs/hubfs/Bank%20Technology.jpeg?width=550&height=308&name=Bank%20Technology.jpeg" alt="" /></SwiperSlide>
  </Swiper>
  );
};

export default Banner;