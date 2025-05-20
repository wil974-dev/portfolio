import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './carrousel.scss';

function Carrousel({ images }) {
    return (
        <Swiper
            className="swiper"
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 1800 }}
            modules={[Autoplay]}
            loop={true}
            speed={2300}
        >
            {images.map((img, index) => (
                <SwiperSlide className="swiper__slide" key={index}>
                    <img
                        className="swiper__img"
                        src={img}
                        alt={`Slide ${index + 1} qui représente un projet web`}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default Carrousel;
