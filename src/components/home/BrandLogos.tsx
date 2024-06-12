"use client";
import React, { useEffect, useState } from "react";
import { A11y, Autoplay, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import api from "@/utils/api";
import useResponsive from "@/hooks/use-responsive";

interface PartnerItemType {
  id: number,
  name: string,
  image: string,
  url: string,
  order: number
}

const BrandLogos = () => {

  const { t } = useTranslation()
  const [data, setData] = useState<PartnerItemType[]>([])
  const { isMobile } = useResponsive()

  const getData = async () => {
    const resp = await api.get(`common/partners/`)

    setData(resp.data);
  }


  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <div className="brand-logo-area bg-white over-hidden">
        <div className="border-t-gray pt-55 pb-55" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div className="col-xl-12  col-lg-12  col-md-12  col-sm-12 col-12 pb-15">
            <div className="section-title text-center">
              <h3 className="font-pt light-black-color2 pb-1">
                {t("Xamkorlarimiz")}
              </h3>
            </div>
          </div>
          <div className="mlr--55">
            <div className="row pt-25 pb-25">
              {data.length && <Swiper
                modules={[Scrollbar, A11y, Autoplay]}
                spaceBetween={20}
                loop={true}
                observeParents={true}
                observer={true}
                centeredSlides={true}
                slidesPerView={3}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: true,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  365: {
                    slidesPerView: 2,
                  },
                  576: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  992: {
                    slidesPerView: 4,
                  },
                  1200: {
                    slidesPerView: 4,
                  },
                  1400: {
                    slidesPerView: 5,
                  },
                }}
              >
                {[...data, ...data]?.map((el, j) => (
                  <SwiperSlide key={j} className="brand-img-div col-md-4 d-flex align-items-center justify-content-center">
                    <div key={j} className={`text-center  p-0`}>
                      <div className="p-3">
                        <a href={el.url} target="_blank" className="d-block">
                          <Image
                            className="d-inline-block brand-img"
                            src={el.image}
                            alt="brand-img"
                            width={300}
                            height={200}
                            style={{ width: '100%', height: 'auto', objectFit: 'cover', maxHeight: '80px' }}
                          />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandLogos;
