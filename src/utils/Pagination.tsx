import React from "react";

interface Props {
  total?: any
  onChange?: any
  active?: any
}

const Pagination = ({ total, active, onChange }: Props) => {

  const onClick = (page: any) => {
    onChange(page)
  }

  return (
    <>
      <ul className="pagination align-items-center justify-content-center">
        <li className="page-item" onClick={() => Number(active) === 1 ? onClick(1) : onClick(active - 1)}>
          <p className="page-link prev">
            <i className="fas fa-angle-left"></i>
            {" "}
          </p>
        </li>
        {
          Array(Math.ceil(total / 12)).fill(1).map((el, index) => (
            <li key={index} className={`page-item ${(index + 1) === Number(active) ? "active" : ""}`} onClick={() => onClick(index + 1)}>
              <p className="page-link">
                {index + 1}
              </p>
            </li>
          ))
        }
        <li className="page-item" onClick={() => Number(active) === Math.ceil(total / 12) ? onClick(Math.ceil(total / 12)) : onClick(Number(active) + 1)}>
          <p className="page-link next">
            <i className="fas fa-angle-right"></i>
          </p>
        </li>
      </ul>
    </>
  );
};

export default Pagination;
