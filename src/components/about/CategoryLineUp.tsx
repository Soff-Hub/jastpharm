import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import useResponsive from "@/hooks/use-responsive";
import { brandData } from "./PartnersMain";
import api from "@/utils/api";
import parse from 'html-react-parser'
import { useTranslation } from "react-i18next";
import Preloader from "@/utils/Preloader";

const CategoryLineUp = () => {

  const { isMobile } = useResponsive()
  const [timer, setTimer] = useState(0)
  const [data, setData] = useState<any[] | null>(null)

  const { t } = useTranslation()

  const showItems = () => {
    const interval = setInterval(() => {
      setTimer(c => c + 1)
    }, 300)
    setTimeout(() => {
      clearInterval(interval)
    }, 2000);
  }

  const getData = async () => {
    const resp = await api.get(`common/our-history/`)
    showItems()
    setData(resp.data);
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <div className="category-lineup-area">
        {!data && <Preloader />}
        {
          data?.length ? (
            <div className="container">
              <div className="row pt-20 gy-5">
                {
                  data.map((item: any, i: number) => (
                    i % 2 === 0 ? (
                      <>
                        <div key={i} className={`col-md-5`}>
                          <Image src={item?.image} width={1200} height={isMobile ? 200 : 300} alt="product" style={{ objectFit: 'cover' }} />
                        </div>
                        <div key={i} className={`col-md-7`}>
                          <div className="category-wrapper category-wrapper1">
                            {item?.body && parse(item?.body)}
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div key={i} className={`col-md-7`}>
                          <div className="category-wrapper category-wrapper1">
                            {item?.body && parse(item?.body)}
                          </div>
                        </div>
                        <div key={i} className={`col-md-5`}>
                          <Image src={item?.image} width={1200} height={isMobile ? 200 : 300} alt="product" style={{ objectFit: 'cover' }} />
                        </div>
                      </>
                    )
                  ))
                }
                {data.some((el: any) => el.images.length > 0) ? <h2 className="text-center">{t("Galareya")}</h2> : ""}
                {
                  data.map((item: any, i: number) => (
                    <>
                      <div key={i} className={`col-md-12 fade ${timer > 4 ? "show" : ""}`}>
                        <div className="category-wrapper category-wrapper1 mt-15">
                          <div className="category-wrapper category-wrapper1 mt-15 row gy-4 p-0 mx-auto">
                            {item?.images.map((el: { image: string }, j: number) => (
                              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12" key={j}>
                                <div className="text-center brand-img-div bg-white" style={{ border: '1px solid #c3cccc' }}>
                                  <Image
                                    className="d-inline-block brand-img"
                                    src={el.image}
                                    alt="brand-img"
                                    width={200}
                                    height={300}
                                    style={{ width: 'auto', height: 'auto' }}
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  ))
                }
              </div>
            </div>
          ) : (
            <div className='mx-auto py-4 d-flex flex-column gap-4 px-3' style={{ maxWidth: '1000px', minHeight: '400px', textAlign: 'center' }}>
              <h1>{t("Ma'lumot topilmadi")}</h1>
            </div>
          )
        }
      </div>
      .
    </>
  );
};

export default CategoryLineUp;
