import React, { useContext, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import "./index.scss";
import { AuthContext } from "../../context";
import axios from "axios";
import { ReadItem } from "../ReadItem/ReadItem";
import TimeAgo from 'react-timeago';
import russianStrings from 'react-timeago/lib/language-strings/ru'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'


const Reading = () => {
  const { setHideSidebar, setIsAuthPage } = useContext(AuthContext);
  const  { id } = useParams();
  setHideSidebar(false);
  setIsAuthPage(false);
  const [reports, setReports] = useState([]);
  const [report, setReport] = useState(null);
  console.log(report)

  const fetchReports = () => {
    axios
      .get("http://195.210.47.160/edu/reports")
      .then(function (response) {
        setReports(response.data);
      })
      .catch(function (error) {})
  };

  const fetchReport = () => {
    axios
      .get("http://195.210.47.160/edu/report_detail/" + id)
      .then(function (response) {
        setReport(response.data);
      })
      .catch(function (error) {})
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchReports();
    fetchReport();
  }, [id]);

  const formatter = buildFormatter(russianStrings)

  console.log(report)
  
  return report ? (
    <>
      <div className="Reading d-flex flex-column">
        <div className="Reading-top d-flex">
          <h1>{report.title}</h1>
        </div>
        <div className="Reading-pic">
          {report.debt_report_image.length > 0 && (
            <img
              className="Reading-pic"
              src={report.debt_report_image[0].image}
            />
          )}
        </div>
        <div className="Reading-t d-flex justify-content-start">
          <div className="Reading-t1">
            <p><TimeAgo date={report.created_at} formatter={formatter} /></p>
          </div>
          <div className="Reading-t2">
            <p>by {report.author}</p>
          </div>
        </div>
        <div className="Reading-article-p1">
          <p>{report.body}</p>
        </div>
        <div className="Reading-divider" />
        {/* <div className="Reading-h2">
          <h2>Bla bla</h2>
        </div>
        <div className="Reading-divider" />
        <div className="Reading-aricle-p2">
          <p>{report.body}</p>
        </div>
        <div className="Reading-eco d-flex align-items-center">
          {report.category}
        </div> */}
      </div>
      <div className="Reading-bottom">     
      <div className="Reading-author d-flex">
        <div className="Reading-aut-pic"></div>
        <div className="Reading-aut-w d-flex flex-column">
          <p className="aut-w1">Author</p>
          <p className="aut-w2">
            <b>{report.author}</b>
          </p>
          {/* <p className="aut-w3">bla bla bla</p> */}
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
      </div>
    </>
  ) : null;
};

export default Reading;
