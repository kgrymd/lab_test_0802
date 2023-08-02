import React from 'react';
import style from "../styles/test.module.scss"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewsSlider = () => {
    const news = [
        {
            date: "2021.07.31",
            title: "30秒の採用動画で「本来出会うべき出会い」を創出する。",
            description: "G’s発スタートアップ「moovy」の今とこれから",
            imageUrl: "https://gsacademy.jp/uploads/moovy_photo1-1280x855.jpg"
        },
        {
            date: "2021.07.31",
            title: "30秒の採用動画で「本来出会うべき出会い」を創出する。",
            description: "G’s発スタートアップ「moovy」の今とこれから",
            imageUrl: "https://gsacademy.jp/uploads/moovy_photo1-1280x855.jpg"
        },
        {
            date: "2021.07.31",
            title: "30秒の採用動画で「本来出会うべき出会い」を創出する。",
            description: "G’s発スタートアップ「moovy」の今とこれから",
            imageUrl: "https://gsacademy.jp/uploads/moovy_photo1-1280x855.jpg"
        },
        {
            date: "2021.07.31",
            title: "30秒の採用動画で「本来出会うべき出会い」を創出する。",
            description: "G’s発スタートアップ「moovy」の今とこれから",
            imageUrl: "https://gsacademy.jp/uploads/moovy_photo1-1280x855.jpg"
        },
        {
            date: "2021.07.31",
            title: "30秒の採用動画で「本来出会うべき出会い」を創出する。",
            description: "G’s発スタートアップ「moovy」の今とこれから",
            imageUrl: "https://gsacademy.jp/uploads/moovy_photo1-1280x855.jpg"
        },
        {
            date: "2021.07.31",
            title: "30秒の採用動画で「本来出会うべき出会い」を創出する。",
            description: "G’s発スタートアップ「moovy」の今とこれから",
            imageUrl: "https://gsacademy.jp/uploads/moovy_photo1-1280x855.jpg"
        },
        // 他のニュースも同様に追加します...
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // 一度に表示するスライドの数を3に変更
        slidesToScroll: 1,
        autoplay: true, // 自動でスライドするように設定
        autoplaySpeed: 2000, // 2秒ごとにスライド
    };

    return (
        <>
            <h3 className={style.title}>INTERVIEW</h3>
            <p className={style.subtitle}>起業家のインタビュー</p>
            <Slider {...settings}>
                {news.map((newsItem, index) => (
                    <div key={index} className={style.newsItem}>
                        <img src={newsItem.imageUrl} alt={newsItem.title} />
                        <h3>{newsItem.date}</h3>
                        <h2>{newsItem.title}</h2>
                        <p>{newsItem.description}</p>
                    </div>
                ))}
            </Slider>
            <div className={style.button}>
                <button>記事一覧を見る</button>
            </div>
        </>
    );
}

export default NewsSlider;
