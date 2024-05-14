
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import React from 'react';


interface MycontextPropse {
    context: string; // Определяем тип context как строку
    t: (key: string) => string; // Предполагая, что t имеет тип any, но лучше указать конкретный тип, если это возможно
  }
  
  export const CourseMain:React.FC<MycontextPropse> = ({ context, t }) => {

    return (
    <div className="container">
        <div className="course-main">
            <div className="course-main_info">
                <p className="course-main-text_small">Профессия</p>
                <p className="course-main-text_small"><AccessTimeIcon /> 15 месяцев </p>
            </div>
            <h2 className='course-main-title'>{t(`${context}.main.title`)}</h2>
            <ul className='course-main-list'>
                <li className='course-main-item'>{t(`${context}.main.text1`)}</li>
                <li className='course-main-item'>{t(`${context}.main.text2`)}</li>
                <li className='course-main-item'>{t(`${context}.main.text3`)}</li>
            </ul>
            <a href="#form-comp" className='course-main-btn' >Узнать цену</a>
            <img className='course-main-img' src={t(`${context}.main.img`)}></img>
        </div>
    </div>
    )
}