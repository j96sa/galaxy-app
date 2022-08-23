import React from 'react'
import "../styles/styles.css";
import logo from "../assets/starter-code/shared/logo.svg";
import hamburguesa from "../assets/starter-code/shared/icon-hamburger.svg";
import close from "../assets/starter-code/shared/icon-close.svg";
import { Link, useLocation} from 'react-router-dom';



export default function MobileHeader({setActNavBar,actNavBar}) {     
    //para controlar la seccion activa
    const location = useLocation();
    
    return (
        <>
        <div className='mh'>
            <img src={logo} alt="logo" />
            <img onClick={()=>setActNavBar(true)} src={hamburguesa} alt="menu" />
        </div>

        <div className='placeholder'>
            <div className={actNavBar ?"nav-bar active" :"nav-bar"} onClick={(e)=>e.stopPropagation()}>
                <img onClick={()=>setActNavBar(false)} src={close} alt="close"/>
                <section className="nav-links">
                    <Link to="/"><span className={(location.pathname === "/") ?"active" :undefined}>00 </span>HOME</Link>
                    <Link to="/destination/moon"><span className={location.pathname.includes("/destination") ?"active" :undefined}>01 </span>DESTINATION</Link>
                    <Link to="/crew/commander"><span className={location.pathname.includes("/crew") ?"active" :undefined}>02 </span>CREW</Link>
                    <Link to="/technology/launch-vehicle"><span className={location.pathname.includes("/technology") ?"active" :undefined}>03 </span>TECHNOLOGY</Link>
                </section>
            </div>
        </div>
        </>
    )
}
