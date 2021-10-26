import React, {useEffect, useState} from 'react';
import './index.scss';
import cultureImg from "../../assets/images/culture-icon.png";
import star from "../../assets/images/star.png";
import book from "../../assets/images/book.png";
import watch from "../../assets/images/watch.png";
import classNames from "classnames";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {PopularItem} from "../PopularItem/PopularItem";
import {ReadItem} from "../ReadItem/ReadItem";
import {WatchItem} from "../WatchItem/WatchItem";
import {Modal} from "../Modal/Modal";
import axios from "axios";
import {MainGroup} from "../MainGroup/MainGroup";




const popularBlogs = [
    {
        title: 'Как начать медитировать?',
        category: 'Ментальное здоровье',
        image: 'https://static.onecms.io/wp-content/uploads/sites/35/2019/04/16045733/benefits-yoga-fb.jpg',
        type: 'video',
    },
    {
        title: 'Знаки на пластике',
        category: 'Ментальное здоровье',
        image: 'https://img.championat.com/news/big/n/f/kak-pravilno-meditirovat-sovety-praktika_157684379279536979.jpg',
        type: 'image',
    },
    {
        title: 'Как начать копить деньги?',
        category: 'Ментальное здоровье',
        image: 'https://static.onecms.io/wp-content/uploads/sites/35/2019/04/16045733/benefits-yoga-fb.jpg',
        type: 'video',
    },
    {
        title: 'Сортировка вторсырья, гринвошинг',
        category: 'Ментальное здоровье',
        image: 'https://static.onecms.io/wp-content/uploads/sites/35/2019/04/16045733/benefits-yoga-fb.jpg',
        type: 'image',
    },
    {
        title: 'Разговоры о СЕКСЕ половое воспитание UYAT? ',
        category: 'Ментальное здоровье',
        image: 'https://static.onecms.io/wp-content/uploads/sites/35/2019/04/16045733/benefits-yoga-fb.jpg',
        type: 'image',
    },
];

const modalItem = {
    title: 'Как начать медитировать?',
    description: 'В этом выпуске Данайя расскажет о том, как правильно начать медитировать, какую пользу несёт медитация и как важно быть в гармонии с самим собой. Удачи :)',
    category: '🌱 Экофилософия',
    time: '20 mins  •  2 weeks ago',
    videoSrc: 'https://www.youtube.com/watch?v=OEv8a1kY5tQ',
};


const Education = () => {
    const [showModal, setShowModal] = useState(false);
    const [activeItem, setActiveItem] = useState();
    const [videos, setVideos] = useState([])
    const [reports, setReports] = useState([])
    const [category, setCategory] = useState('all')

    const fetchVideos = () => {
        axios.get("http://195.210.47.160/edu/videos")
            .then(function (response) {
                console.log(response);
                if (category == 'all')
                {
                    setVideos(response.data.videos)
                }
                else {
                    var arr = response.data.videos
                    setVideos(arr.filter(a => a.category.name == category))
                }
            })
            .catch(function (error) {
            })
            .then(function () {
            });
    }
    const fetchReports = () => {
        axios.get("http://195.210.47.160/edu/reports")
            .then(function (response) {
                if (category == 'all')
                {
                    setReports(response.data)
                }
                else {
                    var arr = response.data
                    setReports(arr.filter(a => a.category.name == category))
                }
            })
            .catch(function (error) {
            })
            .then(function () {
            });
    }

    useEffect(() => {
        fetchVideos();
        fetchReports();
    },[category])


    const onClickItem = (selectedItem) => {
        setShowModal(true);
        setActiveItem(selectedItem);
    }

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
                    <div className="main-categories__all"  onClick={() => {setCategory('all')}}>
                        <span className="main-categories__text">Все темы</span>
                    </div>
                    <div className="main-categories__divider"/>
                    <div className={category=='eco' ? "d-flex category-item active" : "d-flex category-item"} onClick={() => {setCategory('eco')}}>
                        <span className="main-categories__text">🌱 Экофилософия</span>
                    </div>
                    <div className="d-flex category-item" onClick={() => {setCategory('finance')}}>
                        <span className="main-categories__text">💸 Фин.грамотность</span>
                    </div>
                    <div className="d-flex category-item" onClick={() => {setCategory('mental')}}>
                        <span className="main-categories__text">🙏 Ментальное здоровье</span>
                    </div>
                    <div className="d-flex category-item" onClick={() => {setCategory('sex')}}>
                        <span className="main-categories__text">❤ ️Половое воспитание</span>
                    </div>
                    <div className="d-flex category-item align-items-center" onClick={() => {setCategory('culture')}}>
                        <img src={cultureImg} alt="culture icon" className="category-item__img"/>
                        <span className="main-categories__text">Культура</span>
                    </div>
                </div>
                <div className="main-popular">
                    <div className="d-flex align-items-center">
                        <img src={star} alt="star icon" className="category-item__img"/>
                        <div className="main-popular__text">Популярное</div>
                    </div>
                    <div className="popular-items d-flex">
                        {/*<Slider {...settings}>*/}
                        {popularBlogs.map((item, index) => (
                            <PopularItem item={item} key={index} onClickItem={onClickItem}/>
                        ))}
                        {/*</Slider>*/}
                    </div>
                </div>
                <div className="main-read">
                    <div className="d-flex align-items-center">
                        <img src={book} alt="star icon" className="category-item__img"/>
                        <div className="main-popular__text">Читать</div>
                    </div>
                    <div className="read-items d-flex">
                        {reports.map((item, index) => (
                            <ReadItem item={item} key={index}/>
                        ))}
                    </div>
                </div>
                <div className="main-watch">
                    <div className="d-flex align-items-center">
                        <img src={watch} alt="star icon" className="category-item__img"/>
                        <div className="main-popular__text">Смотреть</div>
                    </div>
                    <div className="watch-items d-flex">
                        {videos.map((item, index) => (
                            <WatchItem item={item} key={index}/>
                        ))}
                    </div>
                </div>
                <div className="main-bottom">
                    <div className="d-flex align-items-center">
                        <img src={watch} alt="star icon" className="category-item__img"/>
                        <div className="main-popular__text">Смотреть</div>
                    </div>
                    <div className="main-bottom__group d-flex justify-content-between">
                        <div className="main-bottom__left">
                            <MainGroup items={popularBlogs.slice(0, 3)}/>
                        </div>
                        <div className="main-bottom__right">
                            <MainGroup items={popularBlogs.slice(1, 4)} isColumnReverse isRowReverse/>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                open={showModal && activeItem}
                onClose={() => setShowModal(false)}
                item={modalItem}
                // item={activeItem}
            />
        </div>
    );
};

export default Education;
