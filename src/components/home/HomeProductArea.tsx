import GridProductView from "@/sheardComponent/GridProductView";
import api from "@/utils/api";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export interface ProductType {
  id: number
  title: string
  price: number
  slug: string
  poster: string
}

const HomeProductArea = () => {

  const { t } = useTranslation()
  const [data, setData] = useState<ProductType[]>([])

  const getData = async () => {
    const resp = await api.get(`common/products/`)

    setData(resp.data?.results);
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <div className="product-area bgimg-2">
        <div className="container">
          <div className="product-content single-product-tab-content pt-25 pb-25">
            <div className="row">
              <div className="col-xl-12  col-lg-12  col-md-12  col-sm-12 col-12 pb-15">
                <div className="section-title text-center">
                  <h3 className="font-pt light-black-color2 pb-3 pt-20">
                    {t("our_products")}
                  </h3>
                </div>
              </div>
            </div>
            <div className="product-wrapper mt-1 mb-30">
              <div className="row">
                <div className="col-md-12  col-sm-12 col-12">
                  <div className="popular-product">
                    <div className="row product-active">
                      {
                        data.splice(0, 8).map((el, i) => (
                          <div key={i} className="col-xl-3 col-lg-4  col-md-4 col-sm-6 col-6 plr-14 mb-20">
                            <GridProductView data={el} start={0} end={2} />
                          </div>
                        ))
                      }
                    </div>
                  </div>
                </div>
                {/* <SidebarCategory/> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeProductArea;
