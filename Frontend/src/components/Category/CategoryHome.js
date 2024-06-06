// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import CategoryCard from "./CategoryCard";

const CategoryHome = () => {
    return (
        <div className="categoryhome__wrapper">
            <div className="layout">
                <div className="sec-heading">Danh mục sản phẩm</div>
                <div className="swiper mySwiper">
                    <div className="swiper-wrapper">
                        <Swiper
                            // pagination={true}
                            slidesPerView={8}
                            spaceBetween={15}
                            modules={[Navigation, Pagination]}
                            className="mySwiper"
                            breakpoints={{
                                0: {
                                    slidesPerView: 1.4,
                                    spaceBetween: 20,
                                },
                                640: {
                                    slidesPerView: 6,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 6,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 8,
                                    spaceBetween: 15,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <CategoryCard />
                            </SwiperSlide>
                            <SwiperSlide>
                                <CategoryCard />
                            </SwiperSlide>
                            <SwiperSlide>
                                <CategoryCard />
                            </SwiperSlide>
                            <SwiperSlide>
                                <CategoryCard />
                            </SwiperSlide>
                            <SwiperSlide>
                                <CategoryCard />
                            </SwiperSlide>
                            <SwiperSlide>
                                <CategoryCard />
                            </SwiperSlide>
                            <SwiperSlide>
                                <CategoryCard />
                            </SwiperSlide>
                            <SwiperSlide>
                                <CategoryCard />
                            </SwiperSlide>
                            <SwiperSlide>
                                <CategoryCard />
                            </SwiperSlide>
                            <SwiperSlide>
                                <CategoryCard />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryHome;
