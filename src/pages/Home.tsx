
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Whywe } from "../components/Whywe";
import Form from "../components/Form";
import { FAQ } from "../components/FAQ";


export const Home = () => {
    const { t } = useTranslation();
    return (
        <>
        
        <div className="container">
            <div className="home-main">
                <h1 className="home-main-title">{t("schoolname")}</h1>
                <p className="home-main-text">{t("schoolsub")}</p>
                <NavLink to='/Courseall' className={ 'home-main-btn white-round' }>Выбрать программу</NavLink>
            </div>
        </div>
        <div className="container">
            <div className="transform">
                <div className="transform-slide">
                    <img className="animation-slide-team1" src="./public/team1.png"></img>
                    <img className="animation-slide-team1" src="./public/team1.png"></img>
                </div>
                <div className="transform-slide backwards">
                <img className="animation-slide-team1" src="./public/team2.png"></img>
                <img className="animation-slide-team1" src="./public/team2.png"></img>
                <img className="animation-slide-team1" src="./public/team2.png"></img>
                </div>
                <div className="transform-slide">
                <img className="animation-slide-team3" src="./public/team1.png"></img>
                <img className="animation-slide-team3" src="./public/team1.png"></img>
                </div>
                <div className="overlay"></div>
                <h2 className="transform-title">Школа Bang Bang Education — это большое поддерживающее сообщество</h2>
                <p className="transoform-text">Мы создаем условия, чтобы раскрыть потенциал студентов и сделать их проекты заметными. Наши выпускники меняют культурный ландшафт, выдвигая на первое место человека и доступность среды.
</p>
            </div>
        </div>
        <Whywe />
        
        <Form />
        <FAQ />
        </>
    );
  
}