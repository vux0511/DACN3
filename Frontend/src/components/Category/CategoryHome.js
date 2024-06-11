// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import CategoryCard from "./CategoryCard";
import { useState, useEffect } from "react";
import axios from "axios";
import CALL_URL from "../../api/CALL_URL";

const CategoryHome = () => {
    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        axios.get(CALL_URL.URL_getCategory).then((response) => {
            setCategoryList(response.data);
        });
    }, []);

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
                            {categoryList.map((category) => (
                                <SwiperSlide>
                                    <CategoryCard categoryList={category} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryHome;
