"use client";
import React, { useEffect, useState } from "react";
import ShopSidebar from "./ShopSidebar";
import ShopGridView from "./ShopGridView";
import ShopListView from "./ShopListView";
import Pagination from "@/utils/Pagination";
import api from "@/utils/api";
import useQueryParam from "@/utils/useQueryParams";
import { useParams, useRouter } from "next/navigation";
import Preloader from "@/utils/Preloader";
import { useTranslation } from "react-i18next";

const ShopArea = () => {
  const [activeTab, setactiveTab] = useState<boolean>(false);
  const param = useParams()

  const tab = [
    {
      id: 1,
      icon: "fas fa-th",
    },
    {
      id: 2,
      icon: "fas fa-bars",
    },
  ];

  const query = useQueryParam()
  const [data, setData] = useState<any[] | null>(null)
  const { t } = useTranslation()
  const [count, setCount] = useState<any>(0)
  const [page, setPage] = useState<any>(query.getParams()?.page || 1)
  const router = useRouter()

  const getData = async (p: any) => {
    const resp = await api.get(`common/products/?category__slug=${param?.slug || ''}&page=${p}`)

    setactiveTab(true)
    setCount(resp.data.count)
    setData(resp.data.results);
  }

  const handlePagination = (p: any) => {
    router.push(`/shop?page=${p}`)
    setPage(p)
  }


  useEffect(() => {
    getData(page)
  }, [param?.slug, page])


  return (
    <>
      {activeTab && data && data?.length > 0 ? <div className="product-area shop-product mt-20 mb-100">
        <div className="container">
          <div className="product-content single-product-tab-content"></div>
          <div className="product-wrapper mt-1">
            <div className="row">
              <div className="col-xl-3  col-lg-4  col-md-12  col-sm-12 col-12">
                <ShopSidebar />
              </div>
              <div className="col-xl-9  col-lg-8  col-md-12  col-sm-12 col-12 mt-25">
                <div className="tab-content" id="myTabContent">
                  <ShopGridView data={data} activeTab={1} />
                </div>
                <div className="pagination-area mt-50 over-hidden position-relative">
                  <div className="row">
                    <div className="col-xl-12  col-lg-12  col-md-12  col-sm-12 col-12">
                      <nav
                        className="pagination-page"
                        aria-label="Page navigation example"
                      >
                        <Pagination active={page} total={count} onChange={(p: any) => handlePagination(p)} />
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> : data?.length === 0 ? <div className='mx-auto py-4 d-flex flex-column gap-4 px-3' style={{ maxWidth: '1000px', minHeight: '400px', textAlign: 'center' }}>
        <h1>{t("Ma'lumot topilmadi")}</h1>
      </div> : <Preloader />}
    </>
  );
};

export default ShopArea;
