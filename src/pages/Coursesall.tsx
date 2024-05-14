import { NavLink } from "react-router-dom";





export const Courseall = () => {
    return (
        <div className="container">
            <div className="curse-container" id="our-course">
            <h2 className="course-title-main title-black">Наши курсы</h2>
            <div className="course-content-main">
                <NavLink to='/UX-course' className="course-link ux">
                    <div className="course-item">
                        <div className="title-curse-main">
                            <p className="curse-main-text">UX-UI дизайн</p>
                            <p className="curse-main-text">• С нуля</p>
                            <p className="curse-main-text">• Получить проффесию</p>
                        </div>
                        <p className="curse-big-text">UX/UI дизайнер</p>
                    </div>
                    </NavLink>
                    <NavLink to='/Graph_design' className="course-link graph">
                    <div className="course-item">
                        <div className="title-curse-main">
                            <p className="curse-main-text">Графический дизайнер Plus</p>
                            <p className="curse-main-text">• С нуля</p>
                            <p className="curse-main-text">• Получить проффесию</p>
                        </div>
                        <p className="curse-big-text">Графический дизайнер Plus</p>
                    </div>
                    </NavLink>
                    <NavLink to='/3d-course' className="course-link d3">
                    <div className="course-item">
                        <div className="title-curse-main">
                            <p className="curse-main-text">3D-графика</p>
                            <p className="curse-main-text">• С нуля</p>
                            <p className="curse-main-text">• Получить проффесию</p>
                        </div>
                        <p className="curse-big-text">3D-художник</p>
                    </div>
                    </NavLink>
                    <NavLink to='/' className="course-link illut">
                    <div className="course-item">
                        <div className="title-curse-main">
                            <p className="curse-main-text">Анимация и иллюстрация • </p>
                            <p className="curse-main-text">• С нуля</p>
                            <p className="curse-main-text">• Получить проффесию</p>
                        </div>
                        <p className="curse-big-text">Иллюстратор</p>
                    </div>
                    </NavLink>
                    
            </div>        
            </div>
        </div>
    )
}