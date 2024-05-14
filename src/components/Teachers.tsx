import { MySliderTeacher } from "./Swiper";
import React from "react";
interface MycontextPropse {
  context: string; // Определяем тип context как строку
  t: (key: string) => string; // Предполагая, что t имеет тип any, но лучше указать конкретный тип, если это возможно
}

export const Teachers:React.FC<MycontextPropse> = ({ context, t }) => {
  return (
    <div className="container">
    <div className="teachers-container">
      <h2 className="Teachers-title black-title">Преподаватели</h2>
      <div className="teachers-content">
        <div className="teachers-grid">
          <div className="teachers-item white-round">
            <img className="teachers-img" src={t(`${context}.teachers.img1`)}></img>
            <h2 className="teachers-title">{t(`${context}.teachers.name1`)}</h2>
            <p className="teachers-text">
            {t(`${context}.teachers.desc1`)}
            </p>
          </div>
          <div className="teachers-item white-round">
            <img className="teachers-img" src={t(`${context}.teachers.img2`)}></img>
            <h2 className="teachers-title">{t(`${context}.teachers.name2`)}</h2>
            <p className="teachers-text">
            {t(`${context}.teachers.desc2`)}
            </p>
          </div>
          <div className="teachers-item white-round">
            <img className="teachers-img" src={t(`${context}.teachers.img3`)}></img>
            <h2 className="teachers-title">{t(`${context}.teachers.name3`)}</h2>
            <p className="teachers-text">
            {t(`${context}.teachers.desc3`)}
            </p>
          </div>
        </div>

        <div className="teachers-slider">
          <MySliderTeacher context={context} t={t} />
        </div>
      </div>
    </div>
    </div>
  );
};
