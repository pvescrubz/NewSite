import React from "react";
import VolcanoIcon from "@mui/icons-material/Volcano";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import {MySlider} from './Swiper';

interface MycontextPropse {
  context: string; // Определяем тип context как строку
  t: (key: string) => string; // Предполагая, что t имеет тип any, но лучше указать конкретный тип, если это возможно
}

export const HeroBlock: React.FC<MycontextPropse> = ({ context, t }) => {

  return (
    <div className="Hero-block container">
      <h2 className="Hero-block__title title-black">
      {t(`${context}.heroblock.title`)}
      </h2>
      <div className="Hero-block__container">
        <div className="Swiper">
          <MySlider context={context} t={t}/>
        </div>

        <div className="hero-block__salary">
          <div className="hero-block__salary-top">
            
            <div className="hero-block__salary-svg">
            <p className="hero-block__salary-top-text">{t(`${context}.heroblock.salarycount`)}</p>
              <VolcanoIcon sx={{ fontSize: 50 }} />
            </div>
            <span className="hero-block__salary-span">{t(`${context}.heroblock.salaryAverage`)}</span>
          </div>
          <div className="hero-block__salary-bottom">
            <p className="hero-block__salary-bottom-text">
            {t(`${context}.heroblock.salaryDescription1`)}{" "}
              <a href="https://www.comprehensive.io/t/Senior%20Product%20Designer/location=ROW">
              {t(`${context}.heroblock.comprehensiveLink`)}
              </a>{" "}
            
              {t(`${context}.heroblock.salaryDescription2`)}
            </p>
            <p className="hero-block__salary-bottom-span">{t(`${context}.heroblock.hhData`)}</p>
          </div>
        </div>

        <div className="hero-block__right">
          <div className="hero-block__right-top black-round">
            <div className="hero-block__salary-svg">
            <p className="hero-block__salary-top-text">{t(`${context}.heroblock.rightTopText1`)}</p>
              <GroupAddIcon sx={{ fontSize: 50 }} />
            </div>
            <span className="hero-block__salary-span">{t(`${context}.heroblock.rightTopSpan`)}</span>
            <p className="hero-block__salary-bottom-span">{t(`${context}.heroblock.hhData`)}</p>
          </div>
          <div className="hero-block__right-bottom black-round">
         
            <div className="hero-block__salary-svg">
            <p className="hero-block__salary-top-text">{t(`${context}.heroblock.rightBottomText1`)}</p>
              <GroupAddIcon sx={{ fontSize: 50 }} />
            </div>
            <span className="hero-block__salary-span">{t(`${context}.heroblock.rightBottomSpan`)}</span>
            <p className="hero-block__salary-bottom-span">{t(`${context}.heroblock.linkedInData`)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
