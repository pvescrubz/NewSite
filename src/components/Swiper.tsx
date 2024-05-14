import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';

interface MycontextPropse {
  context: string; // Определяем тип context как строку
  t: (key: string) => string; // Предполагая, что t имеет тип any, но лучше указать конкретный тип, если это возможно
}

export const MySlider:React.FC<MycontextPropse> = ({ context, t }) => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2500, // Set autoplay speed in milliseconds
    arrows: false, // Убрать стрелки навигации
    adaptiveHeight: true, // Автоматический расчет высоты слайдов
    className: 'slider-container' // Добавить класс для дополнительного стилизования
  };

  return (
    <Slider {...settings}>
      <div>
        <div className='swiper-img__hero'>
          <img className="swiper-img" src={t(`${context}.swiper.img3`)} alt="Image 1" />
          <div className='swiper-text'>
            <h2 className='swiper-title'>{t(`${context}.swiper.text1`)}</h2>
            <p className='swiper-text_small'>{t(`${context}.swiper.smalltext1`)}</p>
          </div>
        </div>
      </div>
      <div>
        <div className='swiper-img__hero'>
          <img className="swiper-img" src={t(`${context}.swiper.img1`)} alt="Image 2" />
          <div className='swiper-text'>
            <h2 className='swiper-title'>{t(`${context}.swiper.text2`)}</h2>
            <p className='swiper-text_small'>{t(`${context}.swiper.smalltext2`)}</p>
          </div>
        </div>
      </div>
      <div>
        <div className='swiper-img__hero'>
          <img className="swiper-img" src={t(`${context}.swiper.img2`)} alt="Image 3" />
          <div className='swiper-text'>
            <h2 className='swiper-title'>{t(`${context}.swiper.text3`)}</h2>
            <p className='swiper-text_small'>{t(`${context}.swiper.smalltext3`)}</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export const MySliderTeacher:React.FC<MycontextPropse> = ({ context, t }) => {



  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false, // Enable autoplay
    autoplaySpeed: 2500, // Set autoplay speed in milliseconds
    arrows: false, // Убрать стрелки навигации
    className: 'slider-container-teacher', // Добавить класс для дополнительного стилизования
  };

  return (
    <div className="slider-container-teacher">
      <Slider {...settings}>
        <div className="white-round">
          <img className="teachers-img white-round" src={t(`${context}.teachers.img1`)}></img>
          <h2 className="teachers-title">{t(`${context}.teachers.name1`)}</h2>
          <p className="teachers-text">{t(`${context}.teachers.desc1`)}</p>
        </div>
        <div className="white-round">
        <img className="teachers-img white-round" src={t(`${context}.teachers.img2`)}></img>
          <h2 className="teachers-title">{t(`${context}.teachers.name2`)}</h2>
          <p className="teachers-text">{t(`${context}.teachers.desc2`)}</p>
        </div>
        <div className="white-round">
        <img className="teachers-img white-round" src={t(`${context}.teachers.img3`)}></img>
          <h2 className="teachers-title">{t(`${context}.teachers.name3`)}</h2>
          <p className="teachers-text">{t(`${context}.teachers.desc3`)}</p>
        </div>

      </Slider>

    </div>
  );
};
