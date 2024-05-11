"use client";
import React, { useState } from "react";
import Image from "next/image";
import { productData } from "@/data/product-data";
import Link from "next/link";
import RangeComp from "@/utils/RangeComp";
const ShopSidebar = () => {
  const [sliderValues, setSliderValues] = useState([25]);

  const handleSliderChange = (newValues: number[]) => {
    setSliderValues(newValues);
  };
  return (
    <>
      <div className="shop-sidebar-area pt-80">
        <div className="row">
          <div className="col-xl-12  col-lg-12  col-md-6  col-sm-12 col-12">
            <div className="row">
              <div className="col-xl-12  col-lg-12  col-md-12  col-sm-12 col-12">
                <div className="sidebar-widget mb-20">
                  <h6 className="mb-15 title font600 sidebar-title d-inline-block position-relative pb-1">
                    Product Categories
                  </h6>
                  <ul>
                    <li className="pb-15 d-block">
                      <Link href="/shop">
                        Accessories<span> (2)</span>
                      </Link>
                      <span className="accordion"></span>
                      <ul className="panel bg-transparent over-hidden">
                        <li>
                          <Link className="pb-15 pt-20 d-block" href="#">
                            Floor
                          </Link>
                        </li>
                        <li>
                          <Link className="pb-2 d-block" href="#">
                            Outdoor
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="pb-15 d-block">
                      <Link href="/shop">
                        Clothing <span>(8)</span>
                      </Link>
                      <span className="accordion"></span>
                      <ul className="panel bg-transparent over-hidden">
                        <li>
                          <Link className="pb-15 pt-20 d-block" href="#">
                            Man
                          </Link>
                        </li>
                        <li>
                          <Link className="pb-15 d-block" href="#">
                            Women
                          </Link>
                        </li>
                        <li>
                          <Link className="pb-2 d-block" href="#">
                            children
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="pb-15 d-block">
                      <Link href="/shop">
                        Interior <span>(3)</span>
                      </Link>
                      <span className="accordion"></span>
                      <ul className="panel bg-transparent over-hidden">
                        <li>
                          <Link className="pb-15 pt-20 d-block" href="#">
                            Man
                          </Link>
                        </li>
                        <li>
                          <Link className="pb-15 d-block" href="#">
                            Women
                          </Link>
                        </li>
                        <li>
                          <Link className="pb-2 d-block" href="#">
                            children
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="pb-15 d-block">
                      <Link href="/shop">
                        Lights <span>(4)</span>
                      </Link>
                      <span className="accordion"></span>
                      <ul className="panel bg-transparent over-hidden">
                        <li>
                          <Link className="pb-15 pt-20 d-block" href="#">
                            Bathroom Lights
                          </Link>
                        </li>
                        <li>
                          <Link className="pb-2 d-block" href="#">
                            Ceiling lights
                          </Link>
                        </li>
                        <li>
                          <Link className="pb-15 pt-2 d-block" href="#">
                            Tables lamp
                          </Link>
                        </li>
                        <li>
                          <Link className="pb-2 d-block" href="#">
                            Wall lights
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="pb-15 d-block">
                      <Link href="/shop">
                        Wheel <span>(9)</span>
                      </Link>
                      <span className="accordion"></span>
                      <ul className="panel bg-transparent over-hidden">
                        <li>
                          <Link className="pb-15 pt-20 d-block" href="#">
                            Man
                          </Link>
                        </li>
                        <li>
                          <Link className="pb-15 d-block" href="#">
                            Women
                          </Link>
                        </li>
                        <li>
                          <Link className="pb-2 d-block" href="#">
                            children
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="pb-15 d-block">
                      <Link href="/shop">
                        Tires <span>(11)</span>
                      </Link>
                      <span className="accordion"></span>
                      <ul className="panel bg-transparent over-hidden">
                        <li>
                          <Link className="pb-15 pt-20 d-block" href="#">
                            Bathroom Lights
                          </Link>
                        </li>
                        <li>
                          <Link className="pb-2 d-block" href="#">
                            Ceiling lights
                          </Link>
                        </li>
                        <li>
                          <Link className="pb-15 pt-2 d-block" href="#">
                            Tables lamp
                          </Link>
                        </li>
                        <li>
                          <Link className="pb-2 d-block" href="#">
                            Wall lights
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-12  col-lg-12  col-md-12  col-sm-12 col-12">
                <div className="sidebar-widget mb-35">
                  <h6 className="mb-25 title font600 sidebar-title d-inline-block position-relative pb-1">
                    Filter By Price
                  </h6>
                  <div id="slider-range"></div>
                  <div className="price-slider mt-20">
                    <   div>
                      <form action="#">
                        <div className="prc-slider-content mb-15">
                          <div className="prc-amount d-sm-flex">
                            <label htmlFor="amount" className="mb-0 mr-1">
                              Price : {0} - {sliderValues}
                            </label>
                            
                          </div>
                        </div>
                      </form>
                    </div>
                    <RangeComp values={sliderValues} min={15} max={500} step={1} onChange={handleSliderChange} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-12  col-lg-12  col-md-6  col-sm-12 col-12">
            <div className="sidebar-widget">
              <h6 className="mb-25 title font600 sidebar-title d-inline-block position-relative pb-1">
                Color
              </h6>
              <ul className="shop-color">
                <li className="pb-10 font13">
                  <Link href="#">Blue (2)</Link>
                </li>

                <li className="pb-10 font13">
                  <Link href="#">Green (2)</Link>
                </li>

                <li className="pb-10 font13">
                  <Link href="#">White (53)</Link>
                </li>

                <li className="pb-10 font13">
                  <Link href="#">Yellow (53)</Link>
                </li>

                <li className="pb-10 font13">
                  <Link href="#">Pink (20)</Link>
                </li>

                <li className="pb-10 font13">
                  <Link href="#">Red (20)</Link>
                </li>

                <li className="pb-10 font13">
                  <Link href="#">Brown (16)</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-12  col-lg-12  col-md-6  col-sm-12 col-12">
            <div className="sidebar-widget mt-25">
              <h6 className="mb-15 title font600 sidebar-title d-inline-block position-relative pb-1">
                Size
              </h6>
              <ul className="shop-color">
                <li className="pb-10 font13">
                  <Link href="#">Small (2)</Link>
                </li>

                <li className="pb-10 font13">
                  <Link href="#">Extra Small (2)</Link>
                </li>

                <li className="pb-10 font13">
                  <Link href="#">Extra Large (16)</Link>
                </li>

                <li className="pb-10 font13">
                  <Link href="#">Huge (53)</Link>
                </li>

                <li className="pb-10 font13">
                  <Link href="#">Large (53)</Link>
                </li>

                <li className="pb-10 font13">
                  <Link href="#">Medium (20)</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-12  col-lg-12  col-md-6  col-sm-12 col-12">
            <div className="sidebar-widget mt-25">
              <h6 className="mb-20 title font600 sidebar-title d-inline-block position-relative pb-1">
                Popular tags
              </h6>
              <ul className="shop-tag">
                <li className="pb-10 font13 d-inline-block">
                  <Link href="#">Small</Link>
                </li>
                <li className="pb-10 font13 d-inline-block">
                  <Link href="#">Fashion</Link>
                </li>
                <li className="pb-10 font13 d-inline-block">
                  <Link href="#">Magenta</Link>
                </li>
                <li className="pb-10 font13 d-inline-block">
                  <Link href="#">Grey</Link>
                </li>
                <li className="pb-10 font13 d-inline-block">
                  <Link href="#">Clothing</Link>
                </li>
                <li className="pb-10 font13 d-inline-block">
                  <Link href="#">Grey</Link>
                </li>
                <li className="pb-10 font13 d-inline-block">
                  <Link href="#">Small</Link>
                </li>
                <li className="pb-10 font13 d-inline-block">
                  <Link href="#">large</Link>
                </li>
                <li className="pb-10 font13 d-inline-block">
                  <Link href="#">Yellows</Link>
                </li>
                <li className="pb-10 font13 d-inline-block">
                  <Link href="#">Magenta</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-12  col-lg-12  col-md-6  col-sm-12 col-12">
            <div className="sidebar-widget mt-25">
              <h6 className="title font600 sidebar-title d-inline-block position-relative mb-20 pb-1">
                Recent Product
              </h6>
              <div className="side-product mb-50">
                {productData?.slice(6, 10)?.map((item) => (
                  <div
                    key={item?.id}
                    className="side-pro-wrapper d-flex align-items-start mb-15"
                  >
                    <div className="side-pro-img border-gray1 mr-10">
                      <Link href={`/shop-details/${item?.id}`}>
                        <Image
                          src={item?.img}
                          className="img-fluid"
                          alt="sidebar-img"
                        />
                      </Link>
                    </div>
                    <div className="side-pro-text">
                      <h6 className="pb-10">
                        <Link href={`/shop-details/${item?.id}`}>
                          {" "}
                          {item?.title}{" "}
                        </Link>
                      </h6>
                      <span className="price font500">
                        $17.50 <del>$19.50</del>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopSidebar;
