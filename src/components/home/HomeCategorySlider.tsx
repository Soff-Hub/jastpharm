"use client";
import React from "react";
import { Scrollbar, A11y, Autoplay, EffectFade, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/effect-fade";
import { sliderOneData } from "@/data/headernav/slider-one-data";
import Link from "next/link";
import Image from "next/image";
const HomeCategrorSlider = () => {
    return (
        <>
            <div className="slider-area over-hidden slider1 mt-3">
                <div className="slider-active row">
                    <div className="col-xl-12  col-lg-12  col-md-12  col-sm-12 col-12 pb-15">
                        <div className="section-title text-center">
                            <h3 className="font-pt light-black-color2 pb-1">
                                Mavjud sohalar
                            </h3>
                        </div>
                    </div>
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        spaceBetween={30}
                        loop={true}
                        slidesPerView={3}
                        autoplay={{
                            delay: 3000,
                            // disableOnInteraction: true,
                        }}
                        navigation
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            500: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            992: {
                                slidesPerView: 3,
                            },
                            1200: {
                                slidesPerView: 3,
                            },
                            1400: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {sliderOneData.map((item, i) => (
                            <SwiperSlide key={i}>
                                <div className="banner mb-30 transition-3 position-relative over-hidden ">
                                    <Link href="/shop" className="d-block">
                                        <Image height={220} width={250} style={{ width: "100%", height: '350px', objectFit: 'cover' }} className="img-zoom transition-3 width100" src={item.img} alt="banner-img" />
                                    </Link>
                                    <div className="banner-content position-absolute transfY transfY50 pl-50 sohalar-card">

                                        <h3 className="text-white font500 pb-1">
                                            <Link href="/shop" className="text-white">Xirurgiya</Link>
                                        </h3>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default HomeCategrorSlider;
