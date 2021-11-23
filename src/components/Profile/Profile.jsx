import React, { useEffect, useState, useContext } from "react";
import "./index.scss";
import { Modal } from "../Modal/Modal";
import { AuthContext } from "../../context";
import book from "../../assets/images/book.png";
import watch from "../../assets/images/watch.png";
import location from "../../assets/images/location.svg";
import edit from "../../assets/images/edit.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReadItem } from "../ReadItem/ReadItem";
import { WatchItem } from "../WatchItem/WatchItem";
import axios from "axios";

const Profile = () => {
  const { setHideSidebar, setIsAuthPage } = useContext(AuthContext);
  const [videos, setVideos] = useState([]);
  const [reports, setReports] = useState([]);
  const [profile, setProfile] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  setHideSidebar(false);
  setIsAuthPage(false);

  console.log("profile", activeItem);

  const fetchVideos = () => {
    axios
      .get("http://195.210.47.160/edu/videos")
      .then(function (response) {
        console.log(response);
        setVideos(response.data.videos);
      })
      .catch(function (error) {})
      .then(function () {});
  };
  const fetchReports = () => {
    axios
      .get("http://195.210.47.160/edu/reports")
      .then(function (response) {
        setReports(response.data);
      })
      .catch(function (error) {})
      .then(function () {});
  };

  const fetchProfile = () => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("http://195.210.47.160/auth/profile/", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `JWT ${token}`,
          },
        })
        .then(function (response) {
          setProfile(response.data.data[0]);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const onClickItem = (selectedItem) => {
    setShowModal(true);
    setActiveItem(selectedItem);
  };

  useEffect(() => {
    fetchVideos();
    fetchReports();
    fetchProfile();
  }, []);

  return profile ? (
    <div className="profile d-flex flex-column">
      <div className="profile-top d-flex">
        <div className="profile-left">
          {profile.images && (
            <img
              className="profile-left"
              src={`http://195.210.47.160${profile.images}`}
            />
          )}
        </div>
        <div className="profile-right d-flex flex-column">
          <p className="profile-name">
            <b>{profile.full_name}</b> <img src={edit} alt="" />{" "}
          </p>
          <p className="profile-mail">{profile.email}</p>
          <p className="profile-age">
            {new Date().getFullYear() - +profile.birth_date.substring(0, 4)}{" "}
            years
          </p>
          <p className="profile-loc d-flex align-items-center">
            {" "}
            <img className="me-2" src={location} alt="" />
            {profile.city}
          </p>
        </div>
      </div>
      <div className="profile-bottom">
        <div className="main-read">
          <div className="d-flex align-items-center">
            <img src={book} alt="star icon" className="category-item__img" />
            <div className="main-popular__text">Читаю</div>
          </div>
          <div className="read-items d-flex">
            {reports.map((item, index) => (
              <ReadItem item={item} key={index} />
            ))}
          </div>
        </div>
        <div className="main-watch">
          <div className="d-flex align-items-center">
            <img src={watch} alt="star icon" className="category-item__img" />
            <div className="main-popular__text">Смотрю</div>
          </div>
          <div className="watch-items d-flex">
            {videos.map((item, index) => (
              <WatchItem item={item} key={index} onClickItem={onClickItem} />
            ))}
          </div>
        </div>
      </div>
      {activeItem && (
        <Modal
          open={showModal && activeItem}
          onClose={() => {
            setShowModal(false);
            setActiveItem(null);
          }}
          item={activeItem}
        />
      )}
    </div>
  ) : null;
};

export default Profile;
