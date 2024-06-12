"use client";
import React, { useEffect } from "react";
import logoImg from "../../../public/assets/images/logo/logo.png";
import Image from "next/image";
import Link from "next/link";
import DropdownMenu from "./DropdownMenu";

import Menu from "./Menu";
import SidebarMenu from "./SidebarMenu";
import OverlyDiv from "@/utils/OverlyDiv";
import { useTranslation } from "react-i18next";
import useResponsive from "@/hooks/use-responsive";

const HeaderOne = () => {

  const { i18n, t } = useTranslation()
  const { isDesktop } = useResponsive()

  const { changeLanguage, language } = i18n

  const handleChangeLanguage = (lng: string) => {
    if (language !== lng) {
      changeLanguage(lng)
      window.location.reload()
    }
  }

  // useEffect(() => {
  //   window.addEventListener("scroll", sticky);
  //   return () => {
  //     window.removeEventListener("scroll", sticky);
  //   };
  // });

  const sticky = () => {
    const header = document.querySelector("#header-sticky");
    const headerTop = document.getElementById('header-top')
    const scrollTop = window.scrollY;
    if (headerTop) {
      if (scrollTop >= 40) {
        headerTop.style.height = '0'
        headerTop.style.overflow = 'hidden'
      } else {
        headerTop.style.height = 'auto'
        headerTop.style.overflow = 'visible'
      }
    }

    // if (header) {
    //   scrollTop >= 40
    //     ? header.classList.add("header-sticky")
    //     : header.classList.remove("header-sticky");
    // }
  };

  return (
    <>
      <header id="header-sticky" className="d-none d-lg-block">
        <div className="header-top" id="header-top" style={{ backgroundColor: '#DB0000', color: 'white' }}>
          <div className="header-top-inner d-flex justify-content-between container mx-auto py-1">
            <ul className="d-flex align-items-center">
              <li className="d-flex align-items-center gap-2 border-r-gray1 px-4">
                <i className="fa-solid fa-phone"></i>
                <a href="tel:+998974143377">+998 (97) 414-33-77</a>
              </li>
              <li className="d-flex align-items-center gap-2 border-r-gray1 px-4">
                <i className="fa-regular fa-envelope"></i>
                <a href="mailto:info@jaspharm.uz">info@jaspharm.uz</a>
              </li>
              <li className="d-flex align-items-center gap-2 px-4">
                <i className="fa-solid fa-location-dot"></i>
                <a href="map:https://maps.app.goo.gl/j11ED3KvTLkqSD638">{t("header_address")}</a>
              </li>
            </ul>

            <ul className="d-flex align-items-center gap-4">
              <li onClick={() => handleChangeLanguage('ru')} style={{ borderBottom: language === 'ru' ? '1px solid white' : '1px solid transparent', cursor: 'pointer' }}>
                RU
              </li>
              <li onClick={() => handleChangeLanguage('en')} style={{ borderBottom: language === 'en' ? '1px solid white' : '1px solid transparent', cursor: 'pointer' }}>
                EN
              </li>
              <li onClick={() => handleChangeLanguage('uz')} style={{ borderBottom: language === 'uz' ? '1px solid white' : '1px solid transparent', cursor: 'pointer' }}>
                UZ
              </li>
            </ul>
          </div>
        </div>
        <div className="header-area header-area1">
          <div className="header extra-padding-55">
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-xxl-1 col-xl-1 col-xl-1  col-lg-2  col-md-2  col-sm-12 col-12 pr-md-0">
                  <div className="logo-area">
                    <div className="logo z-index1 position-relative">
                      <Link
                        href="/"
                        className="d-block"
                        data-toggle="tooltip"
                        data-selector="true"
                        data-placement="bottom"
                        title="stepmeds"
                      >
                        <Image src={logoImg} alt="stepmeds" height={40} />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6  col-lg-6  col-md-9  col-sm-0 col-0  pl-0 d-flex  align-items-center justify-content-end">
                  <div className="header-right d-flex align-items-center w-100">
                    <div
                      className="header-bottom home1-header-bottom w-100">
                      <div className="d-flex align-items-center justify-content-lg-between position-relative">
                        <div className="pr-0 d-flex align-items-center position-static w-100">
                          <div className="main-menu main-menu-1 w-100">
                            <nav id="mobile-menu">
                              <Menu />
                            </nav>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {isDesktop && <div className="header-blur"></div>}
      {/* mobile menu */}

      <SidebarMenu />
      <OverlyDiv />
    </>
  );
};

export default HeaderOne;
