import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTranslation } from "react-i18next";

const MySlider = () => {

    const { t } = useTranslation();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
  autoplaySpeed: 4000, // Set autoplay speed in milliseconds
  arrows: false, // Убрать стрелки навигации
  adaptiveHeight: true, // Автоматический расчет высоты слайдов
  className: 'slider-container' // Добавить класс для дополнительного стилизования
  };

  return (
    <Slider {...settings}>
      <div>
        <div className='swiper-img__hero'>
        <img className="swiper-img" src={t("ux.swiper.img3")} alt="Image 1" />
        <div className='swiper-text'>
            <h2 className='swiper-title'>{t("ux.swiper.text1")}</h2>
            <p className='swiper-text_small'>{t("ux.swiper.smalltext1")}</p>
        </div>
        </div>
      </div>
      <div>
      <div className='swiper-img__hero'>
        <img className="swiper-img" src={t("ux.swiper.img1")} alt="Image 2" />
        <div className='swiper-text'>
            <h2 className='swiper-title'>{t("ux.swiper.text2")}</h2>
            <p className='swiper-text_small'>{t("ux.swiper.smalltext2")}</p>
        </div>
        </div>
      </div>
      <div>
      <div className='swiper-img__hero'>
        <img className="swiper-img" src={t("ux.swiper.img2")} alt="Image 3" />
        <div className='swiper-text'>
            <h2 className='swiper-title'>{t("ux.swiper.text3")}</h2>
            <p className='swiper-text_small'>{t("ux.swiper.smalltext3")}</p>
        </div>
        </div>
      </div>
    </Slider>
  );
};

export default MySlider;