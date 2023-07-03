// import Swiper core and required modules
import { FreeMode, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import client1 from '../../../assets/Images/client1-dark.png'
import client2 from '../../../assets/Images/client2-dark.png'
import client3 from '../../../assets/Images/client3-dark.png'
import client4 from '../../../assets/Images/client4-dark.png'
import client5 from '../../../assets/Images/client5-dark.png'
import client6 from '../../../assets/Images/client6-dark.png'
import client7 from '../../../assets/Images/client7-dark.png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const Clients = () => {
    return (
        <div className="lg:max-w-[calc(100vw-25rem)] mx-auto my-5">
            <div className="text-center my-5">
                <h1 className="uppercase text-3xl mb-1">
                    Clients
                </h1>
                <p className="w-40 h-1 bg-base-content rounded-full mx-auto"><p className="w-1/3 h-full bg-primary rounded-full"></p></p>
            </div>
            <div className='py-3'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                    breakpoints={{
                        640: { slidesPerView: 5, spaceBetween: 30 }
                    }}
                >
                    <SwiperSlide><div className='text-center flex justify-center'><img className='h-40' src={client1} alt="" /></div></SwiperSlide>
                    <SwiperSlide><div className='text-center flex justify-center'><img className='h-40' src={client2} alt="" /></div></SwiperSlide>
                    <SwiperSlide><div className='text-center flex justify-center'><img className='h-40' src={client3} alt="" /></div></SwiperSlide>
                    <SwiperSlide><div className='text-center flex justify-center'><img className='h-40' src={client4} alt="" /></div></SwiperSlide>
                    <SwiperSlide><div className='text-center flex justify-center'><img className='h-40' src={client5} alt="" /></div></SwiperSlide>
                    <SwiperSlide><div className='text-center flex justify-center'><img className='h-40' src={client6} alt="" /></div></SwiperSlide>
                    <SwiperSlide><div className='text-center flex justify-center'><img className='h-40' src={client7} alt="" /></div></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Clients;