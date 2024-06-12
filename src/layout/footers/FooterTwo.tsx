import React from "react";
import Socials from "./Socials";
import Link from "next/link";
import FooterLinks from "./components/FooterLinks";
import FooterLinksTwo from "./components/FooterLinksTwo";
import { useTranslation } from "react-i18next";


const FooterTwo = () => {

  const { t } = useTranslation()

  return (
    <>
      <footer>
        <div className="footer-area footer2 pt-60 footer-bg">
          <div className="footer-top">
            <div className="container">
              <div className="row d-flex border-b-gray1 pb-40">
                <div className="col-xxl-5 col-xl-5  col-lg-6  col-md-12  col-sm-12 col-12 pl-0">
                  <div className="row">
                    <div className="col-xl-6  col-lg-6  col-md-6 col-sm-6 col-12 ">
                      <div className="footer-widget pb-30">
                        <ul className="footer-account ml-footer">
                          <FooterLinks />
                        </ul>
                      </div>
                    </div>
                    <div className="col-xl-6  col-lg-6  col-md-6  col-sm-6 col-12 pl-xl-0">
                      <div className="footer-widget pb-30">
                        <ul className="footer-account ml-footer">
                          <FooterLinksTwo />
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-7 col-xl-7  col-lg-6  col-md-12  col-sm-12 col-12">
                  <div className="row">
                    <div className="col-xl-6  col-lg-6  col-md-6  col-sm-6 col-12 pl-0">
                      <div className="footer-widget f-adress pb-30 pr-60 ml--35">
                        <ul className="footer-address ml-footer">
                          <li>
                            <Link
                              className="footer-phone text-white"
                              href="tel:+998974143377"
                            >
                              <span className="mr-2">
                                <small className="first-num">+998</small>
                              </span>
                              97 414 33 77
                            </Link>
                          </li>
                          <li className="footer-mail mt-28">
                            <span>
                              {t("Yordam kerakmi?")}{" "}
                              <Link className="text-white" href="mailto:info@jaspharm.uz">info@jaspharm.uz</Link>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-xl-6  col-lg-6  col-md-6  col-sm-6 col-12 pl-xl-0">
                      <div className="footer-widget pb-30 f-link ml--3">
                        <p className="font500">
                          <a href="map:https://maps.app.goo.gl/j11ED3KvTLkqSD638">{t("header_address")}</a> <br />
                        </p>
                        <Socials />
                        <div className="copyright-text d-sm-flex justify-content-center align-items-center mt-50">
                          <p className="mb-0">
                            © {new Date().getFullYear()}
                            <Link href="#" className="c-theme text-white">
                              JasPharm
                            </Link>
                            {t("Barcha huquqlar himoyalangan.")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom pt-25 pb-25">
            <div className="container">
              <div className="d-flex align-items-center justify-content-center">
                <div className="d-flex gap-1 align-items-center">
                  <span>
                    {t("Sayt ishlab chiquvchi")}
                  </span>
                  <a href="https://soffhub.uz" target="_blank" className="d-flex">
                    <img src="/assets/images/logo/soffhub-logo.png" alt="site worker logo" width={70} style={{ verticalAlign: 'middle' }} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterTwo;
