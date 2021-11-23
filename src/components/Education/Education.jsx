import React, { useEffect, useState, useContext } from "react";
import "./index.scss";
import cultureImg from "../../assets/images/culture-icon.png";
import star from "../../assets/images/star.png";
import book from "../../assets/images/book.png";
import watch from "../../assets/images/watch.png";
import classNames from "classnames";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PopularItem } from "../PopularItem/PopularItem";
import { ReadItem } from "../ReadItem/ReadItem";
import { WatchItem } from "../WatchItem/WatchItem";
import { Modal } from "../Modal/Modal";
import axios from "axios";
import { MainGroup } from "../MainGroup/MainGroup";
import { AuthContext } from "../../context";

const popularBlogs = [
  {
    id: "1",
    title: "Как начать медитировать?",
    category: "Ментальное здоровье",
    image:
      "https://static.onecms.io/wp-content/uploads/sites/35/2019/04/16045733/benefits-yoga-fb.jpg",
    type: "video",
    time: "20 mins  •  2 weeks ago",
    videoSrc: "https://www.youtube.com/watch?v=OEv8a1kY5tQ",
  },
  {
    id: "2",
    title: "Знаки на пластике",
    category: "Ментальное здоровье",
    image:
      "https://img.championat.com/news/big/n/f/kak-pravilno-meditirovat-sovety-praktika_157684379279536979.jpg",
    type: "image",
    time: "20 mins  •  2 weeks ago",
    videoSrc: "https://www.youtube.com/watch?v=OEv8a1kY5tQ",
  },
  {
    id: "3",
    title: "Как начать копить деньги?",
    category: "Ментальное здоровье",
    image:
      "https://static.onecms.io/wp-content/uploads/sites/35/2019/04/16045733/benefits-yoga-fb.jpg",
    type: "video",
    time: "20 mins  •  2 weeks ago",
    videoSrc: "https://www.youtube.com/watch?v=OEv8a1kY5tQ",
  },
  {
    id: "4",
    title: "Сортировка вторсырья, гринвошинг",
    category: "Ментальное здоровье",
    image:
      "https://static.onecms.io/wp-content/uploads/sites/35/2019/04/16045733/benefits-yoga-fb.jpg",
    type: "image",
    time: "20 mins  •  2 weeks ago",
    videoSrc: "https://www.youtube.com/watch?v=OEv8a1kY5tQ",
  },
  {
    id: "5",
    title: "Разговоры о СЕКСЕ половое воспитание UYAT? ",
    category: "Ментальное здоровье",
    image:
      "https://static.onecms.io/wp-content/uploads/sites/35/2019/04/16045733/benefits-yoga-fb.jpg",
    type: "image",
    time: "20 mins  •  2 weeks ago",
    videoSrc: "https://www.youtube.com/watch?v=OEv8a1kY5tQ",
  },
];

const modalItem = {
  title: "Как начать медитировать?",
  description:
    "В этом выпуске Данайя расскажет о том, как правильно начать медитировать, какую пользу несёт медитация и как важно быть в гармонии с самим собой. Удачи :)",
  category: "🌱 Экофилософия",
  time: "20 mins  •  2 weeks ago",
  videoSrc: "https://www.youtube.com/watch?v=OEv8a1kY5tQ",
};

// const categories = [
//   {
//     title: "🌱 Экофилософия",
//     code: "eco",
//   },
//   {
//     title: "💸 Фин.грамотность",
//     code: "finance",
//   },
//   {
//     title: "🙏 Ментальное здоровье",
//     code: "mental",
//   },
//   {
//     title: "❤ ️Половое воспитание",
//     code: "gender",
//   },
//   {
//     title: "👁‍🗨 Культура",
//     code: "culture",
//   },
// ];

const Education = () => {
  const { setHideSidebar, setIsAuthPage } = useContext(AuthContext);
  setHideSidebar(false);
  setIsAuthPage(false);
  const [showModal, setShowModal] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [videos, setVideos] = useState([]);
  const [reports, setReports] = useState([]);
  const [category, setCategory] = useState("all");
  const [categories, setCategories] = useState([]);
  //   const [popular, setPopular] = useState([]);

  console.log("videos", activeItem);

  function compare(a, b) {
    if (a.count < b.count) {
      return 1;
    }
    if (a.count > b.count) {
      return -1;
    }
    return 0;
  }

  const fetchCategories = () => {
    axios
      .get("http://195.210.47.160/edu/categories")
      .then(function (response) {
        console.log(response);
        setCategories(response.data.categories);
      })
      .catch(function (error) {})
      .then(function () {});
  };
  const fetchVideos = () => {
    axios
      .get("http://195.210.47.160/edu/videos")
      .then(function (response) {
        console.log(response);
        if (category === "all") {
          setVideos(response.data.videos);
          //   setPopular(response.data.videos);
        } else {
          var arr = response.data.videos;
          setVideos(arr.filter((a) => a.category.name === category));
          //   setPopular(arr.filter((a) => a.category.name === category));
        }
      })
      .catch(function (error) {})
      .then(function () {});
  };
  const fetchReports = () => {
    axios
      .get("http://195.210.47.160/edu/reports")
      .then(function (response) {
        if (category === "all") {
          setReports(response.data);
        } else {
          var arr = response.data;
          setReports(arr.filter((a) => a.category.name === category));
        }
      })
      .catch(function (error) {})
      .then(function () {});
  };

  useEffect(() => {
    fetchVideos();
    fetchReports();
    fetchCategories();
  }, [category]);

  const onClickItem = (selectedItem) => {
    setShowModal(true);
    setActiveItem(selectedItem);
  };

  const onCategoryClick = (selectedCategoryCode) => {
    setCategory(selectedCategoryCode);
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  return (
    <div className="main d-flex w-100">
      <div className="d-flex flex-column w-100 align-items-start">
        <div className="main-categories d-flex align-items-center">
          <div
            className="main-categories__all"
            onClick={() => onCategoryClick("all")}
          >
            <span
              className={classNames([
                "main-categories__text",
                category === "all" && "main-categories__text--active",
              ])}
            >
              Все темы
            </span>
          </div>
          <div className="main-categories__divider" />
          {categories.map((n, index) => (
            <div
              key={index}
              className={classNames([
                "d-flex category-item",
                category === n.code && "category-item--active",
              ])}
              onClick={() => onCategoryClick(n.name)}
            >
              <span
                className={classNames([
                  "categories__text",
                  category === n.name && "categories__text--active",
                ])}
              >
                {n.name}
              </span>
            </div>
          ))}
        </div>
        {category === "all" && (
          <div className="main-popular">
            <div className="d-flex align-items-center">
              <img src={star} alt="star icon" className="category-item__img" />
              <div className="main-popular__text">Популярное</div>
            </div>
            <div className="popular-items d-flex">
              {/*<Slider {...settings}>*/}
              {reports.sort(compare).map((item, index) => (
                <PopularItem
                  item={item}
                  key={index}
                  onClickItem={onClickItem}
                />
              ))}
              {/*</Slider>*/}
            </div>
          </div>
        )}
        <div className="main-read">
          <div className="d-flex align-items-center">
            <img src={book} alt="star icon" className="category-item__img" />
            <div className="main-popular__text">Читать</div>
          </div>
          <div className="read-items d-flex">
            {reports.map((item, index) => (
              <ReadItem item={item} key={index} />
            ))}
          </div>
        </div>
        {category === "all" ? (
          <div className="main-w">
            <div className="main-watch">
              <div className="d-flex align-items-center">
                <img
                  src={watch}
                  alt="star icon"
                  className="category-item__img"
                />
                <div className="main-popular__text">Смотреть</div>
              </div>
              <div className="watch-items d-flex">
                {videos.map((item, index) => (
                  <WatchItem
                    item={item}
                    key={index}
                    onClickItem={onClickItem}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="main-bottom">
            <div className="d-flex align-items-center">
              <img src={watch} alt="star icon" className="category-item__img" />
              <div className="main-popular__text">Смотреть</div>
            </div>
            <div className="main-bottom__group d-flex justify-content-between">
              <div className="main-bottom__left">
                <MainGroup
                  items={videos.slice(0, 3)}
                  onItemClick={onClickItem}
                />
              </div>
              <div className="main-bottom__right">
                <MainGroup
                  items={videos.slice(1, 4)}
                  isColumnReverse
                  isRowReverse
                  onItemClick={onClickItem}
                />
              </div>
            </div>
          </div>
        )}
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
  );
};

export default Education;
