import ContactForm from "@/form/ContactForm";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const HomeContact = () => {

    const { t } = useTranslation()

    return (
        <>
            <div className="contact-area bgimg-3">
                <div className="container">
                    <div className="row pb-100">
                        <div className="col-xl-6  col-lg-6  col-md-12  col-sm- col-">
                            <div className="contact-form-left mt-60">
                                <div className="section-title text-left">
                                    <h4 className="c-title mb-35 font600 title d-inline-block position-relative">
                                        {t("Aloqa ma'lumotlari")}
                                    </h4>

                                </div>
                                <div className="c-contact d-sm-flex gap-2">
                                    <span className="primary-color pr-1">{t("Manzil")}:</span>
                                    <a href="map:https://maps.app.goo.gl/j11ED3KvTLkqSD638">{t("header_address")}</a>
                                </div>
                                <div className="c-email d-sm-flex gap-2">
                                    <span className="primary-color pr-1">{t("Email")}:</span>
                                    <a href="mailto:info@jaspharm.uz">info@jaspharm.uz</a>
                                </div>
                                <div className="c-number d-sm-flex gap-2">
                                    <span className="primary-color pr-1">{t("Tel")}:</span>
                                    <a href="tel:+998974143377">{" "}+998 97 414 33 77</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6  col-lg-6  col-md-12  col-sm-12 col-12">
                            <div className="contact-form-right mt-60">
                                <h4 className="c-title mb-35 font600 title d-inline-block position-relative">
                                    {t("Xabar qoldirish")}
                                </h4>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeContact;
