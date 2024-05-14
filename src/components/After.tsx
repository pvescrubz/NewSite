import SchoolIcon from '@mui/icons-material/School';
import React from 'react';

interface MycontextPropse {
    context: string; // Определяем тип context как строку
    t: (key: string) => string; // Предполагая, что t имеет тип any, но лучше указать конкретный тип, если это возможно
  }

export const After:React.FC<MycontextPropse> = ({ context, t }) => {

    return (
        <div className="container">

        <div className="after-block">
            <h3 className="after-block__left-title title-black">После выпуска</h3>
            <div className="after-block-content">
                <div className="after-block__left white-round">
                    
                    <div className="after-block__left-text-block ">
                        <h3 className="after-block__right-main_title">Резюме</h3>
                        <p className="after-block__left-text-main">Должность</p>
                        <p className="after-block__left-text-gray">{t(`${context}.afterblock.text1`)}</p>
                    </div>

                    <div className="after-block__left-instruments">
                        <p className="after-block__left-text-main">Инструменты</p>
                        <div className="after-block__left-imgs">
                            <img className="after-block__left-img" src={t(`${context}.afterblock.img1`)}></img>
                            <img className="after-block__left-img" src={t(`${context}.afterblock.img2`)}></img>
                            <img className="after-block__left-img" src={t(`${context}.afterblock.img3`)}></img>
                            <img className="after-block__left-img" src={t(`${context}.afterblock.img4`)}></img>
                            <img className="after-block__left-img" src={t(`${context}.afterblock.img5`)}></img>
                            <img className="after-block__left-img" src={t(`${context}.afterblock.img6`)}></img>
                        </div>
                    </div>
                    <div className="after-block__left-text-block">

                        <p className="after-block__left-text-gray">Навыки</p>
                        <ul className="after-block__left-list">
                            <li className="after-block-left-item">{t(`${context}.afterblock.skill1`)}</li>
                            <li className="after-block-left-item">{t(`${context}.afterblock.skill2`)}</li>
                            <li className="after-block-left-item">{t(`${context}.afterblock.skill3`)}</li>
                            <li className="after-block-left-item">{t(`${context}.afterblock.skill4`)}</li>
                            <li className="after-block-left-item">{t(`${context}.afterblock.skill5`)}</li>
                            <li className="after-block-left-item">{t(`${context}.afterblock.skill6`)}</li>
                            <li className="after-block-left-item">{t(`${context}.afterblock.skill7`)}</li>
                            <li className="after-block-left-item">{t(`${context}.afterblock.skill8`)}</li>
                            <li className="after-block-left-item">{t(`${context}.afterblock.skill9`)}</li>
                            <li className="after-block-left-item">{t(`${context}.afterblock.skill10`)}</li>
                            <li className="after-block-left-item">{t(`${context}.afterblock.skill11`)}</li>
                        </ul>
                    </div>

                </div>
                <div className="after-block__right">
                    
                    <div className="after-block__right-resume white-round">
                        
                        <h3 className="after-block-title">Портфолио: 6 крупных проектов</h3>
                        <p className="after-block__left-text-main">Кейсы, которые помогут при трудоустройстве и расскажут работодателям о ваших навыках.</p>
                        <div className="after-block__right-resume-list">
                            <div className="after-block__right-resume-item">
                                <SchoolIcon />
                                <p className="after-block__right-resume-text">{t(`${context}.afterblock.imgtext1`)}</p>
                            </div>
                            <div className="after-block__right-resume-item">
                            <SchoolIcon />
                                <p className="after-block__right-resume-text">{t(`${context}.afterblock.imgtext2`)}</p>
                            </div>
                            <div className="after-block__right-resume-item">
                            <SchoolIcon />
                                <p className="after-block__right-resume-text">{t(`${context}.afterblock.imgtext3`)}</p>
                            </div>
                            <div className="after-block__right-resume-item">
                            <SchoolIcon />
                                <p className="after-block__right-resume-text">{t(`${context}.afterblock.imgtext4`)}</p>
                            </div>
                            <div className="after-block__right-resume-item">
                            <SchoolIcon />
                                <p className="after-block__right-resume-text">{t(`${context}.afterblock.imgtext5`)}</p>
                            </div>
                            <div className="after-block__right-resume-item">
                            <SchoolIcon />
                                <p className="after-block__right-resume-text">{t(`${context}.afterblock.imgtext6`)}</p>
                            </div>
                        </div>
                    </div>
                    <div className="after-block__right-imgs">
                        <img className="after-block__right-img" src={t(`${context}.afterblock.imgbig1`)}></img>
                        <img className="after-block__right-img" src={t(`${context}.afterblock.imgbig2`)}></img>
                        <img className="after-block__right-img" src={t(`${context}.afterblock.imgbig3`)}></img>
                        <img className="after-block__right-img" src={t(`${context}.afterblock.imgbig4`)}></img>
                    </div>
                    <div className="after-block__right-info">
                        <div className="after-block__right-info-left white-round">
                            <h2 className="after-block__right-info-title">Сопроводительное письмо</h2>
                            <p className="after-block__right-info-text">Научим составлять сопроводительные письма, чтобы получить работу мечты.</p>
                            <img className="after-block__right-info-img" src="../../public/after-bg-1.jpg"></img>
                        </div>
                        <div className="after-block__right-info-right white-round">
                            <h2 className="after-block__right-info-title">Подготовка к собеседованию</h2>
                            <p className="after-block__right-info-text">Карьерный центр Ultimate Education подготовит вас к интервью на воркшопах и карьерных консультациях.</p>
                            <img className="after-block__right-info-img" src="../../public/after-bg-2.jpg"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}