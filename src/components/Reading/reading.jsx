import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import { AuthContext } from "../../context";
import axios from "axios";
import { ReadItem } from "../ReadItem/ReadItem";

const Reading = () => {
  const { setHideSidebar, setIsAuthPage } = useContext(AuthContext);
  setHideSidebar(false);
  setIsAuthPage(false);
  const [reports, setReports] = useState([]);

  const fetchReports = () => {
    axios
      .get("http://195.210.47.160/edu/reports")
      .then(function (response) {
        setReports(response.data);
      })
      .catch(function (error) {})
      .then(function () {});
  };

  useEffect(() => {
    fetchReports();
  });

  return (
    <>
      <div className="Reading d-flex flex-column align-items-center">
        <div className="Reading-top">
          <h1>John Lewis</h1>
        </div>
        <div className="Reading-pic"></div>
        <div className="Reading-t d-flex justify-content-start">
          <div className="Reading-t1">
            <p>12 hours ago</p>
          </div>
          <div className="Reading-t2">
            <p>Bla bla bla</p>
          </div>
        </div>
        <div className="Reading-article-p1">
          <p>bla bla bla bla</p>
        </div>
        <div className="Reading-divider" />
        <div className="Reading-h2">
          <h2>Bla bla</h2>
        </div>
        <div className="Reading-divider" />
        <div className="Reading-aricle-p2">
          <p>bla bla bla bla bla</p>
        </div>
        <div className="Reading-eco align-items-center"> ЭКОФИЛОСОФИЯ</div>
      </div>
      <div className="Reading-author d-flex">
        <div className="Reading-aut-pic"></div>
        <div className="Reading-aut-w d-flex flex-column">
          <p>Author</p>
          <p>
            <b>Bla</b>
          </p>
          <p>bla bla bla</p>
        </div>
      </div>
      <div className="main-read">
        <div className="d-flex align-items-center">
          <div className="main-popular__text">Related topics</div>
        </div>
        <div className="read-items d-flex">
          {reports.map((item, index) => (
            <ReadItem item={item} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Reading;
