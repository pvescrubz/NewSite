import React from 'react';


interface MycontextPropse {
  context: string; // Определяем тип context как строку
  t: (key: string) => string; // Предполагая, что t имеет тип any, но лучше указать конкретный тип, если это возможно
}


export const Price:React.FC<MycontextPropse> = ({ context, t }) => {


  
  return (
    <div className="container">
      <div className="price-content">
        <div className="price-base price-block-content">
          <h2 className="price-base-title">{t(`${context}.price.title1`)}</h2>
          <ul className="price-list-adv">
            <li className="prace-adv-item">
            {t(`${context}.price.text1`)}
            </li>
            <li className="prace-adv-item">
            {t(`${context}.price.text2`)}
            </li>
            <li className="prace-adv-item">Практические вебинары.</li>
            <li className="prace-adv-item">
            {t(`${context}.price.text3`)}
            </li>
            <li className="prace-adv-item">
            {t(`${context}.price.text4`)}
            </li>
            <li className="prace-adv-item">
            {t(`${context}.price.text5`)}
            </li>
          </ul>
            <div className="price-bonus">
              <h3 className="bonus-title">{t(`${context}.price.text6`)}</h3>
              <ul className="price-list-adv">
            <li className="prace-adv-item">
            {t(`${context}.price.text7`)}
            </li>
            <li className="prace-adv-item">{t(`${context}.price.text8`)}
            </li>
          </ul>
            </div>
            <div className="price-small-block">
            <p className="price-discount">{t(`${context}.price.text9`)}</p>
            <p className="price-main">
              <span className="course-price">{t(`${context}.price.text10`)}</span>
            </p>
            <p className="price-credit">{t(`${context}.price.text11`)}</p>

            <p className="price-full-info">{t(`${context}.price.text12`)}</p>
            <p className="price-full">
            {t(`${context}.price.text13`)} <span className="price-full-discount">{t(`${context}.price.text14`)}</span>
            </p>
         
          </div>
          
        </div>
        <div className="price-base price-block-content special-offer">
          <h2 className="price-base-title">{t(`${context}.price.title2`)}</h2>
          <ul className="price-list-adv">
            <li className="prace-adv-item">
            {t(`${context}.price.text15`)}
            </li>
            <li className="prace-adv-item">
            {t(`${context}.price.text16`)}
            </li>
          </ul>
    
            <div className="price-bonus">
              <h3 className="bonus-title">{t(`${context}.price.text17`)}</h3>
              <ul className="price-list-adv">
              <li className="prace-adv-item">{t(`${context}.price.text18`)}</li>
    <li className="prace-adv-item">{t(`${context}.price.text19`)}</li>
    <li className="prace-adv-item">{t(`${context}.price.text20`)}</li>
    <li className="prace-adv-item">{t(`${context}.price.text21`)}</li>
    <li className="prace-adv-item">{t(`${context}.price.text22`)}</li>
    <li className="prace-adv-item">{t(`${context}.price.text23`)}</li>
    <li className="prace-adv-item">{t(`${context}.price.text24`)}</li>
          </ul>
            </div>
            <div className="price-small-block">
            <p className="price-discount">{t(`${context}.price.text25`)}</p>
            <p className="price-main">
              <span className="course-price">{t(`${context}.price.text26`)}</span>
            </p>
            <p className="price-credit">{t(`${context}.price.text27`)}</p>

            <p className="price-full-info">{t(`${context}.price.text28`)}</p>
            <p className="price-full">
            {t(`${context}.price.text29`)} <span className="price-full-discount">{t(`${context}.price.text30`)}</span>
            </p>
         
          </div>
          
        </div>
        <div className="price-base price-block-content">
          <h2 className="price-base-title">{t(`${context}.price.title3`)}</h2>
          <ul className="price-list-adv">
            <li className="prace-adv-item">
            {t(`${context}.price.text31`)}
            </li>
            <li className="prace-adv-item">
            {t(`${context}.price.text32`)}
            </li>
          </ul>
            <div className="price-bonus">
              <h3 className="bonus-title">{t(`${context}.price.text33`)}</h3>
              <ul className="price-list-adv">
            <li className="prace-adv-item">
            {t(`${context}.price.text34`)}
            </li>
            <li className="prace-adv-item">
            {t(`${context}.price.text35`)}
            </li>
            <li className="prace-adv-item">
            {t(`${context}.price.text36`)}</li>
          </ul>
            </div>
            <div className="price-small-block">
            <p className="price-discount">{t(`${context}.price.text37`)}</p>
            <p className="price-main">
              <span className="course-price">{t(`${context}.price.text38`)}</span>
            </p>
            <p className="price-credit">{t(`${context}.price.text39`)}</p>
            <p className="price-full-info">{t(`${context}.price.text40`)}</p>
            <p className="price-full">
            {t(`${context}.price.text41`)}<span className="price-full-discount">{t(`${context}.price.text42`)}</span>
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};
