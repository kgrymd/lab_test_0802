import React, { useState, useEffect, useRef } from 'react';
import style from "../styles/test.module.scss"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewsSlider = () => {
    const [characters, setCharacters] = useState([]);
    const audioRef = useRef(null); // BGM用のaudio要素への参照


    useEffect(() => {
        fetch('https://akabab.github.io/starwars-api/api/all.json')
            .then(response => response.json())
            .then(data => setCharacters(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    const handleButtonClick = () => {
        window.location.href = "https://starwars.disney.co.jp/"; // スターウォーズの公式サイトに遷移
    }

    // BGMを再生する関数
    const playBGM = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    }

    return (
        <>
            <audio ref={audioRef} src="/audio/ending2.mp3" loop />

            <div className={style.button}>
                <button onClick={playBGM}>PLAY BGM</button>
            </div>

            <h3 className={style.title}>Star Wars Characters</h3>
            <p className={style.subtitle}>A long time ago in a galaxy far, far away....</p>
            <Slider {...settings}>
                {characters.map((character, index) => (
                    <div key={index} className={style.newsItem}>
                        <img src={character.image} alt={character.name} />
                        <h2>{character.name}</h2>
                        <p>Gender: {character.gender}</p>
                        {/* <p>Birth Year: {character.born}</p> */}
                        <p>Species: {character.species}</p>
                        <p>Homeworld: {character.homeworld}</p>
                        <p>Height: {character.height}m</p>
                        <p>Mass: {character.mass}kg</p>
                        {/* <p>Hair Color: {character.hairColor}</p> */}
                        {/* <p>Eye Color: {character.eyeColor}</p> */}
                        {/* <p>Skin Color: {character.skinColor}</p> */}
                        {/* <p>Cybernetics: {character.cybernetics}</p> */}
                        {/* <p><a href={character.wiki} target="_blank" rel="noopener noreferrer">Learn more</a></p> */}
                    </div>
                ))}
            </Slider>
            <div className={style.button}>
                <button onClick={handleButtonClick}>Learn more</button>
            </div>
        </>
    );
}

export default NewsSlider;
