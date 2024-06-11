"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Breadcrumb from "@/sheardComponent/Breadcrumb";
import useResponsive from "@/hooks/use-responsive";
import api from "@/utils/api";
import parse from 'html-react-parser'
import Preloader from "@/utils/Preloader";
import { useTranslation } from "react-i18next";

const MissionMain = () => {

  const { isMobile } = useResponsive()
  const [data, setData] = useState<any>(null)
  const { t } = useTranslation()

  const getData = async () => {
    const resp = await api.get(`common/mission/`)

    setData(resp.data)

  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <div className="category-lineup-area">
        {!data ? <Preloader /> : !data?.image && data?.description === '' ? <div className='mx-auto py-4 d-flex flex-column gap-4 px-3' style={{ maxWidth: '1000px', minHeight: '400px', textAlign: 'center' }}>
          <h1>{t("Ma'lumot topilmadi")}</h1>
        </div> : <div className="container">
          <div className="row">
            <Breadcrumb pageTitle='ourMission' />


            <img src={data?.image} style={{ objectFit: 'contain', width: '100%', height: 'auto' }} alt="product" />

            <div className="category-wrapper category-wrapper1 mt-15" style={{ textAlign: 'justify' }}>
              {
                parse(data?.description || '')
              }
            </div>

          </div>
        </div>}


      </div>
      .
    </>
  );
};

export default MissionMain;
