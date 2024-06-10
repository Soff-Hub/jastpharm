"use client";
import React, { useEffect, useState } from "react";
import { A11y, Autoplay, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import api from "@/utils/api";
import Router from "next/router";

interface PartnerItemType {
  id: number;
  name: string;
  image: string;
  url: string;
  order: number;
}

const BrandLogos = () => {
  const { t } = useTranslation();
  const [data, setData] = useState<PartnerItemType[]>([]);

  const getData = async () => {
    const resp = await api.get(`common/partners/`);

    setData(resp.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="brand-logo-area bg-white over-hidden">
        <div
          className="border-t-gray pt-55 pb-55"
          style={{ maxWidth: "1000px", margin: "0 auto" }}
        >
          <div className="col-xl-12  col-lg-12  col-md-12  col-sm-12 col-12 pb-15">
            <div className="section-title text-center">
              <h3 className="font-pt light-black-color2 pb-1">
                {t("Xamkorlarimiz")}
              </h3>
            </div>
          </div>
          <div className="mlr--55">
            <div className="row brand-active d-flex align-items-center ">
              <Swiper
                modules={[Scrollbar, A11y, Autoplay]}
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
                // breakpoints={{
                //   0: {
                //     slidesPerView: 1,
                //   },
                //   500: {
                //     slidesPerView: 3,
                //   },
                //   768: {
                //     slidesPerView: 4,
                //   },
                //   992: {
                //     slidesPerView: 4,
                //   },
                //   1200: {
                //     slidesPerView: 4,
                //   },
                //   1400: {
                //     slidesPerView: 6,
                //   },
                // }}
              >
                {data?.map((item, i) => (
                  <SwiperSlide key={i}>
                    <div className="row">
                      {data?.slice(0, 6)?.map((el, j) => (
                        <div
                          key={j}
                          className={`text-center brand-img-div col-md-4 p-0 ${
                            (i + 1) % 3 === 0 ? "border-start" : "border-end"
                          } ${j >= 0 && j < 3 ? "border-bottom" : ""}`}
                        >
                          <div className="p-5">
                            <div
                              style={{ cursor: "pointer" }}
                              onClick={() => Router.push(item?.url)}
                              className="d-block"
                            >
                              <Image
                                className="d-inline-block brand-img"
                                src={el.image}
                                alt="brand-img"
                                width={160}
                                height={120}
                                style={{
                                  width: "100%",
                                  height: "auto",
                                  maxHeight: "80px",
                                  objectFit: "contain",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandLogos;
