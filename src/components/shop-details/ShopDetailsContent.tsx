"use client";
import React, { useState } from "react";
import img1 from "../../../public/assets/images/product/rc-img1.jpg";
import img2 from "../../../public/assets/images/product/rc-img2.jpg";
import img3 from "../../../public/assets/images/product/rc-img3.jpg";
import Image from "next/image";
import { ProductType, idType } from "@/interFace/interFace";
import { productData } from "@/data/product-data";
import ProductDescription from "./ProductDescription";
import Link from "next/link";
import { StaticImageData } from "next/image";

// interface for selectImg

interface imgType {
  id: number;
  img: StaticImageData;
}

const ShopDetailsContent = ({ id }: idType) => {
  const fileterData: ProductType | any = productData.find(
    (item) => item.id == id
  );
  const previewImg = fileterData?.largeImg ? fileterData?.largeImg : img1;
  const [selectImg, setselectImg] = useState(previewImg);


  const myProduct: imgType[] = [
    {
      id: 1,
      img: previewImg,
    },
    {
      id: 2,
      img: img2,
    },
    {
      id: 3,
      img: img3,
    },
  ];
  const handleChange = (e: any) => { };
  const handleSelectImg = (item: imgType) => {
    setselectImg(item.img);
  };
  return (
    <>
      <div className="product-details-area pro-top-thamb pro-bottom-thamb pt-80">
        <div className="container">
          <div className="product-details-content">
            <div
              className="single-product-tab-content tab-content"
              id="myTabContent2"
            >
              <div className="row">
                <div className="col-xxl-7 col-xl-7 col-lg-6 col-md-12 col-sm-12 col-12">
                  <div className="product-left-img-tab mt-20">
                    <div className="d-flex align-items-start img-preview-box">
                      <div
                        className="nav flex-column nav-pills me-4 preview-imges"
                        id="v-pills-tab"
                        role="tablist"
                        aria-orientation="vertical"
                      >
                        {myProduct?.map((item) => (
                          <button
                            key={item.id}
                            className="nav-link  bg-transparent"
                            onClick={() => handleSelectImg(item)}
                          >
                            <Image
                              style={{ width: "100%", height: "auto" }}
                              className="product-thumbnail w-100 border-gray2"
                              src={item.img}
                              alt=""
                            />
                          </button>
                        ))}
                      </div>

                      <div className="tab-content" id="v-pills-tabContent">
                        <div
                          className="tab-pane fade show active position-relative"
                          id="v-pills-home"
                          role="tabpanel"
                          aria-labelledby="v-pills-home-tab"
                        >
                          <div className="product-img border-gray2">
                            <Image
                              style={{ width: "100%", height: "auto" }}
                              width={500}
                              height={500}
                              src={selectImg}
                              alt="product"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-11 col-sm-12 col-12">
                  <div className="product-view-info mt-30">
                    <div className="product-left-img-info">
                      <h3 className="mb-20"> {fileterData?.title} </h3>
                      <div className="price pb-18 pt-3">
                        <span className="rc-price font700">
                          ${fileterData?.price}.00
                        </span>
                      </div>
                      <div className="p-info-text pr-55">
                        <p className="gray-color2">
                          On the other hand, we denounce with righteous
                          indignation and dislike men who are so beguiled and
                          demoralized by the charms we denounce with righteous
                          indignation and dislike men who are so beguiled with
                          righteous
                        </p>
                        <p className="gray-color2">
                          But I must explain to you how all this mistaken idea
                          of denouncing pleasure men who are so beguiled and
                          demoralized
                        </p>
                      </div>
                      <div className="all-info d-sm-flex align-items-center mt-35">
                        <div className="pro-list-btn d-inline-block mr-10 mb-15">
                          <Link
                            href="/shopping-cart"
                            className="web-btn h2-theme-border1 d-inline-block rounded-0 text-capitalize white h2-theme-bg position-relative over-hidden pl-35 pr-35 ptb-17"
                          >
                            {"To'liq malumot olish"}
                          </Link>
                        </div>
                      </div>
                      <ul className="review-cat d-sm-flex align-items-center pt-20 pb-15">
                        <li className="mb-1 mb-2 mr-6 d-inline-block">
                          <span className="cat-title dark-black-color font600">
                            Ketegoriyasi :
                          </span>
                        </li>
                        <li className="mr-6 mb-2 d-inline-block position-relative">
                          <Link href="/shop" className="gray-color2 font600">
                            Mask,
                          </Link>
                        </li>
                        <li className="mr-6 mb-2 d-inline-block position-relative">
                          <Link href="/shop" className="gray-color2 font600">
                            Covid -19,
                          </Link>
                        </li>
                        <li className="mr-6 mb-2 d-inline-block position-relative">
                          <Link href="/shop" className="gray-color2 font600">
                            Sanitizer,
                          </Link>
                        </li>
                        <li className="mr-6 mb-2 d-inline-block position-relative">
                          <Link href="/shop" className="gray-color2 font600">
                            Facemask
                          </Link>
                        </li>
                      </ul>
                      <ul className="social-link mt-10">
                        <li className="d-block d-sm-inline-block mr-12">
                          <span className="cat-title dark-black-color font600">
                            Share Now:
                          </span>
                        </li>
                        <li
                          className="d-inline-block"
                          data-toggle="tooltip"
                          data-selector="true"
                          data-placement="bottom"
                          title="Facebook"
                        >
                          <Link
                            className="d-inline-block font13 text-uppercase transition-3 mb-20"
                            href="https://www.facebook.com/"
                          >
                            <span className="d-inline-block text-center">
                              <i className="fab fa-facebook-f"></i>
                            </span>
                          </Link>
                        </li>
                        <li
                          className="d-inline-block"
                          data-toggle="tooltip"
                          data-selector="true"
                          data-placement="bottom"
                          title="Twitter"
                        >
                          <Link
                            className="d-inline-block font13 text-uppercase transition-3 mb-20"
                            href="https://twitter.com/"
                          >
                            <span className="d-inline-block text-center">
                              <i className="fab fa-twitter"></i>
                            </span>
                          </Link>
                        </li>
                        <li
                          className="d-inline-block"
                          data-toggle="tooltip"
                          data-selector="true"
                          data-placement="bottom"
                          title="Instagram"
                        >
                          <Link
                            className="d-inline-block font13 text-uppercase transition-3 mb-20"
                            href="https://www.instagram.com/"
                          >
                            <span className="d-inline-block text-center">
                              <i className="fab fa-instagram"></i>
                            </span>
                          </Link>
                        </li>
                        <li
                          className="d-inline-block"
                          data-toggle="tooltip"
                          data-selector="true"
                          data-placement="bottom"
                          title="Pinterest"
                        >
                          <Link
                            className="d-inline-block font13 text-uppercase transition-3 mb-20"
                            href="https://bd.linkedin.com/"
                          >
                            <span className="d-inline-block text-center">
                              <i className="fab fa-linkedin-in"></i>
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ProductDescription />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopDetailsContent;
