import React from "react";
import { useTranslation } from "react-i18next";
import VolcanoIcon from "@mui/icons-material/Volcano";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import MySlider from './Swiper';


export const HeroBlock: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="Hero-block container">
      <h2 className="Hero-block__title">
      {t('ux.heroblock.title')}
      </h2>
      <div className="Hero-block__container">
        <div className="Swiper">
          <MySlider />
        </div>

        <div className="hero-block__salary">
          <div className="hero-block__salary-top">
            
            <div className="hero-block__salary-svg">
            <p className="hero-block__salary-top-text">{t('ux.heroblock.salarycount')}</p>
              <VolcanoIcon sx={{ fontSize: 50 }} />
            </div>
            <span className="hero-block__salary-span">{t("ux.heroblock.salaryAverage")}</span>
          </div>
          <div className="hero-block__salary-bottom">
            <p className="hero-block__salary-bottom-text">
            {t("ux.heroblock.salaryDescription1")}{" "}
              <a href="https://www.comprehensive.io/t/Senior%20Product%20Designer/location=ROW">
              {t("ux.heroblock.comprehensiveLink")}
              </a>{" "}
            
              {t("ux.heroblock.salaryDescription2")}
            </p>
            <p className="hero-block__salary-bottom-span">{t("ux.heroblock.hhData")}</p>
          </div>
        </div>

        <div className="hero-block__right">
          <div className="hero-block__right-top black-round">
            <div className="hero-block__salary-svg">
            <p className="hero-block__salary-top-text">{t("ux.heroblock.rightTopText1")}</p>
              <GroupAddIcon sx={{ fontSize: 50 }} />
            </div>
            <span className="hero-block__salary-span">{t("ux.heroblock.rightTopSpan")}</span>
            <p className="hero-block__salary-bottom-span">{t("ux.heroblock.hhData")}</p>
          </div>
          <div className="hero-block__right-bottom black-round">
         
            <div className="hero-block__salary-svg">
            <p className="hero-block__salary-top-text">{t("ux.heroblock.rightBottomText1")}</p>
              <GroupAddIcon sx={{ fontSize: 50 }} />
            </div>
            <span className="hero-block__salary-span">{t("ux.heroblock.rightBottomSpan")}</span>
            <p className="hero-block__salary-bottom-span">{t("ux.heroblock.linkedInData")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
