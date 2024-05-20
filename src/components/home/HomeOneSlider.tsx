"use client";
import React, { useEffect, useState } from "react";
import { Scrollbar, A11y, Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/effect-fade";
import { sliderOneData } from "@/data/headernav/slider-one-data";
import Link from "next/link";
import useResponsive from "@/hooks/use-responsive";
import api from "@/utils/api";
import { useTranslation } from "react-i18next";
import Preloader from "@/utils/Preloader";

export interface HomeCarouselItem {
  id: string
  name: string
  image: string
  slug: string
  description: string
}

const HomeOneSlider = () => {

  const { isDesktop } = useResponsive()
  const { t } = useTranslation()

  const [data, setData] = useState<HomeCarouselItem[]>([])

  const getData = async () => {
    const resp = await api.get(`common/banner/`)

    setData(resp.data);
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <div className="slider-area over-hidden slider1" style={data.length ? {} : { height: '1000px' }}>
        <div className="slider-active">
          {data.length ? <Swiper
            modules={[Scrollbar, A11y, Autoplay, EffectFade]}
            spaceBetween={0}
            loop={true}
            observeParents={true}
            observer={true}
            centeredSlides={true}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: true,
            }}
            effect={"fade"}
          >
            {data.map((item, i) => (
              <SwiperSlide key={i}>
                <div
                  className="single-slider slider-height d-flex align-items-center"
                  style={{ backgroundImage: `url(${item.image})`, }}
                  data-overlay="6"
                >
                  <div className="slider-content z-index1 position-absolute w-100" style={isDesktop ? { transform: 'translateX(-50%)', left: '50%' } : {}}>
                    <div className="container">
                      <h2
                        data-animation="fadeInLeft"
                        data-delay="1s"
                        className="light-black-color2 mb-1 text-capitalize pb-25 font500 font-pt hero-title"
                      >
                        {item.name}
                      </h2>
                      <p
                        className="light-black-color2 font300 pb-25"
                        data-animation="fadeInLeft"
                        data-delay="1.5s"
                      >
                        {item.description}
                        <br />
                      </p>
                      <Link
                        data-animation="fadeInUp"
                        data-delay="1.7s"
                        href="/shop"
                        className="web-btn  d-inline-block text-uppercase white theme-bg position-relative over-hidden pl-30 pr-30 ptb-17"
                      >
                        {t("To'plamni ko'rish")}
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper> : <Preloader />}
        </div>
      </div>
    </>
  );
};

export default HomeOneSlider;
