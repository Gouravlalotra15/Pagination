/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Details from "./Components/Details";
import axios from "axios";
import "./App.css";
const App = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalpage, setTotalpage] = useState(1);
  const fetch = async () => {
    const url = `https://dummyjson.com/products?limit=10&skip=${
      (10 * page - 10, 10 * page)
    }`;
    try {
      const { data } = await axios.get(
        `https://dummyjson.com/products?limit=10&skip=${
          (10 * page - 10, 10 * page)
        }`
      );
      console.log(data);
      setProducts(data.products);
      setTotalpage(data.total / 10);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetch();
  }, [page]);

  const leftclick = (page) => {
    if (page <= 1) return;
    setPage(page - 1);
  };

  const rightclick = (page) => {
    if (page >= totalpage) return;
    setPage(page + 1);
  };

  return (
    <>
      <div className="heading">Pagination</div>
      <div className="hero">
        {products.map((item) => {
          return (
            <>
              <Details key={item.id} item={item} />
            </>
          );
        })}
      </div>

      {products.length > 0 && (
        <div className="pagination">
          <span
            onClick={() => leftclick(page)}
            className={page == 1 ? "no-class" : ""}
          >
            ◀
          </span>
          {[...Array(totalpage)].map((item, i) => {
            return (
              <span
                key={i}
                onClick={() => {
                  setPage(i + 1);
                }}
                className={page === i + 1 ? "active" : ""}
              >
                {i + 1}
              </span>
            );
          })}
          <span
            onClick={() => rightclick(page)}
            className={page == totalpage ? "no-class" : ""}
          >
            ▶
          </span>
        </div>
      )}
    </>
  );
};

export default App;
