import React, { useState } from "react";

import Description from "./Description";
import Additionalinfo from "./Additionalinfo";
import Reviews from "./Reviews";

const ProductDescription = () => {
  const [activeTab, setactiveTab] = useState<number>(1);
  const tabs = [
    {
      id: 1,
      title: "Description",
    },
    {
      id: 2,
      title: "Additional information",
    },
    {
      id: 3,
      title: "Reviews (2)",
    },
  ];

  const tabContent = [
    {
      id: 1,
      content: <Description />,
    },
    {
      id: 2,
      content: <Additionalinfo />,
    },
    {
      id: 3,
      content: <Reviews />,
    },
  ];

  return (
    <>
      <div className="row">
        <div className="col-xl-12  col-lg-12  col-md-12  col-sm-12 col-12">
          <div className="product-review-tab-area mt-60">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              {tabs?.map((item) => (
                <li key={item?.id} className="nav-item" role="presentation">
                  <button
                    className={`nav-link  bg-transparent pl-0 title position-relative hvr2 font600 ${
                      activeTab === item?.id ? "active" : ""
                    }`}
                    onClick={() => setactiveTab(item?.id)}
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    {item?.title}
                  </button>
                </li>
              ))}
            </ul>
            <div className="tab-content mt-30" id="pills-tabContent">
              {tabContent?.map((item) => (
                <div
                  key={item?.id}
                  className={`tab-pane fade ${activeTab === item?.id ?  "show active" : ""}`}
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  {item?.content}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDescription;
