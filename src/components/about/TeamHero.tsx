"use client"
import React, { useEffect, useState } from "react";
import api from "@/utils/api";
import parse from 'html-react-parser'
import Preloader from "@/utils/Preloader";
import { useTranslation } from "react-i18next";

const TeamHero = () => {

  const [data, setData] = useState<any>(null)
  const { t } = useTranslation()

  const getData = async () => {
    const resp = await api.get(`common/about-team/`)

    setData(resp.data?.[0]);
    console.log(resp.data?.[0]);

  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      {
        data ? (
          <div className="category-lineup-area fadeInUp animated mb-35">
            <div className="container">
              <div className="row">
                <p className="team-description" >
                  {parse(data?.description)}
                </p>

                <img src={data.image} style={{ objectFit: 'cover', objectPosition: 'top', width: '100%', height: 'auto' }} alt="product" />
              </div>
            </div>
          </div>
        ) : data === undefined ? <div className='mx-auto py-4 d-flex flex-column gap-4 px-3' style={{ maxWidth: '1000px', minHeight: '400px', textAlign: 'center' }}>
          <h1>{t("Ma'lumot topilmadi")}</h1>
        </div> : <Preloader />
      }
    </>
  );
};

export default TeamHero;
