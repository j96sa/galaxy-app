import React from 'react'
import "../styles/header/mobile-header.css"
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
                    <Link to="/destination/moon"><span className={location.pathname === "/destination/moon" ?"active" :undefined}>01 </span>DESTINATION</Link>
                    <Link to="/"><span>02 </span>CREW</Link>
                    <Link to="/"><span>03 </span>TECHNOLOGY</Link>
                </section>
            </div>
        </div>
        </>
    )
}
