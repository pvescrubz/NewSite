import { Outlet, NavLink } from "react-router-dom";

export const Layout = () => {
    return (
        <>
         <header>
        <NavLink to='/' className={ ({isActive}) => isActive? 'active-link' : "" } >Home</NavLink>
        <NavLink to='/about' className={ ({isActive}) => isActive? 'active-link' : "" }>About</NavLink>
        <NavLink to='/courses' className={ ({isActive}) => isActive? 'active-link' : "" }>Courses</NavLink>
        <NavLink to='/courses' className={ ({isActive}) => isActive? 'active-link' : "" }>Contacts</NavLink>
        <NavLink to='/UX-course' className={ ({isActive}) => isActive? 'active-link' : "" }>UX</NavLink>
       </header>
       <Outlet />
       <footer> footer</footer>
        </>
       
    );
}