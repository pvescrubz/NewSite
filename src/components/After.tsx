import React from "react";
import SchoolIcon from '@mui/icons-material/School';

export const After = () => {
    return (
        <div className="container">

        <div className="after-block">
            <h3 className="after-block__left-title title-black">После выпуска</h3>
            <div className="after-block-content">
                <div className="after-block__left white-round">
                    
                    <div className="after-block__left-text-block ">
                        <h3 className="after-block__right-main_title">Резюме</h3>
                        <p className="after-block__left-text-main">Должность</p>
                        <p className="after-block__left-text-gray">Продуктовый дизайнер</p>
                    </div>

                    <div className="after-block__left-instruments">
                        <p className="after-block__left-text-main">Инструменты</p>
                        <div className="after-block__left-imgs">
                            <img className="after-block__left-img" src="../../public/bank.jpg"></img>
                            <img className="after-block__left-img" src="../../public/nind.jpg"></img>
                            <img className="after-block__left-img" src="../../public/figma.jpg"></img>
                            <img className="after-block__left-img" src="../../public/react.jpg"></img>
                            <img className="after-block__left-img" src="../../public/tilda.jpg"></img>
                            <img className="after-block__left-img" src="../../public/wind.jpg"></img>
                        </div>
                    </div>
                    <div className="after-block__left-text-block">

                        <p className="after-block__left-text-gray">Навыки</p>
                        <ul className="after-block__left-list">
                            <li className="after-block-left-item">Создание дизайн-концепций.</li>
                            <li className="after-block-left-item">Cоздание веб-сайтов и адаптивных страниц.</li>
                            <li className="after-block-left-item">Дизайн мобильных приложений.</li>
                            <li className="after-block-left-item">UX-исследования.</li>
                            <li className="after-block-left-item">Фреймворки CJM и JTBD.</li>
                            <li className="after-block-left-item">Создание вайрфреймов и прототипирование.</li>
                            <li className="after-block-left-item">No-code инструменты.</li>
                            <li className="after-block-left-item">Гибкие методологии Agile и Scrum.</li>
                            <li className="after-block-left-item">Продуктовые метрики.</li>
                            <li className="after-block-left-item">Построение и проверка продуктовых гипотез.</li>
                            <li className="after-block-left-item">Основы маркетинга и бренд-позиционирования продукта.</li>
                            <li className="after-block-left-item">Презентация решений команде и заказчику.</li>
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
                                <p className="after-block__right-resume-text">Проработанные экраны для приложения</p>
                            </div>
                            <div className="after-block__right-resume-item">
                            <SchoolIcon />
                                <p className="after-block__right-resume-text">Путь пользователя для сайта</p>
                            </div>
                            <div className="after-block__right-resume-item">
                            <SchoolIcon />
                                <p className="after-block__right-resume-text">Дизайн веб-интерфейса</p>
                            </div>
                            <div className="after-block__right-resume-item">
                            <SchoolIcon />
                                <p className="after-block__right-resume-text">Дизайн мобильного приложения</p>
                            </div>
                            <div className="after-block__right-resume-item">
                            <SchoolIcon />
                                <p className="after-block__right-resume-text">Дизайн продукта</p>
                            </div>
                            <div className="after-block__right-resume-item">
                            <SchoolIcon />
                                <p className="after-block__right-resume-text">Продуктовый кейс от IT-компании</p>
                            </div>
                        </div>
                    </div>
                    <div className="after-block__right-imgs">
                        <img className="after-block__right-img" src="../../public/after1.jpg"></img>
                        <img className="after-block__right-img" src="../../public/after2.jpg"></img>
                        <img className="after-block__right-img" src="../../public/after3.jpg"></img>
                        <img className="after-block__right-img" src="../../public/after4.jpg"></img>
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