import { Outlet, NavLink} from "react-router-dom";

export const Layout = () => {

    

    return (
        <>
        <header className="header">
        <img className="Logo" src="../../public/logo.png"></img>
        <div className="nav-menu">
        <NavLink to='/' className={ ({isActive}) => isActive? 'active-link nav-link' : "nav-link" } >Главная</NavLink>
        <NavLink to='/Courseall' className={ ({isActive}) => isActive? 'active-link nav-link' : "nav-link" } >Наши Курсы</NavLink>
        <NavLink to='/Pay' className={ ({isActive}) => isActive? 'active-link nav-link' : "nav-link" } >Купить Курсы</NavLink>
        </div>
        <div className="cabinet-block">
            <a className="login-btn">Вход</a>
        </div>
       </header>
       <Outlet />
       <footer>
        <div className="container footer-container">
            <img className="logo footer-logo" src="./public/logo.png"></img>
            <div className="footer-nav">
        <NavLink to='/' className={ ({isActive}) => isActive? 'active-link nav-link footer-link' : "nav-link footer-link" } >Главная</NavLink>
        <NavLink to='/Courseall' className={ ({isActive}) => isActive? 'active-link nav-link' : "nav-link" } >Наши Курсы</NavLink>
       
            </div>
            <div className="footer-info">
                <p className="footer-text">ООО хз кто</p>
                <p className="footer-text">адресс</p>
                <p className="footer-text">ИНН</p>
                <p className="footer-text">mail</p>
                <p className="footer-text">phone</p>
            </div>
        </div>
       </footer>
        </>
       
    );
}